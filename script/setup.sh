#!/bin/bash

# Exit on error
set -e

echo "Starting Shine Wellness Hub Deployment Setup..."

# Function to check if running as root
if [ "$EUID" -ne 0 ]; then 
  echo "Please run as root"
  exit 1
fi

# 1. Update System and Install Dependencies
echo "Step 1: Updating system and installing dependencies..."
apt-get update
apt-get install -y curl git build-essential nginx certbot python3-certbot-nginx

# 2. Install Node.js 20
echo "Step 2: Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# 3. Install PM2 Global
echo "Step 3: Installing PM2..."
npm install -g pm2

# 4. Install Project Dependencies
echo "Step 4: Installing project dependencies..."
# Navigate to script directory's parent (root of repo)
cd "$(dirname "$0")/.."
npm ci

# 5. Build Project
echo "Step 5: Building project..."
npm run build

# 6. Configuration (Env Vars)
echo "Step 6: Configuration"
if [ ! -f .env ]; then
    echo "Creating .env file..."
    read -p "Enter DATABASE_URL: " DB_URL
    
    cat > .env <<EOF
DATABASE_URL="${DB_URL}"
PORT=5000
NODE_ENV=production
EOF
else
    echo ".env file already exists. Skipping..."
fi

# 7. Start Application with PM2
echo "Step 7: Starting application with PM2..."
# Delete existing process if it exists to allow restart
pm2 delete shine-hub 2>/dev/null || true
pm2 start dist/index.cjs --name shine-hub
pm2 save
pm2 startup | tail -n 1 | bash || true

# 8. Configure Nginx
echo "Step 8: Configuring Nginx..."
read -p "Enter Domain Name (e.g., example.com): " DOMAIN_NAME

# Read template and replace placeholder
sed "s/{{DOMAIN_NAME}}/$DOMAIN_NAME/g" script/nginx.conf.template > /etc/nginx/sites-available/shine-hub

# Enable site
ln -sf /etc/nginx/sites-available/shine-hub /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test and Restart Nginx
nginx -t
systemctl restart nginx

# 9. SSL Configuration
echo "Step 9: Setting up SSL with Certbot..."
certbot --nginx -d $DOMAIN_NAME --non-interactive --agree-tos -m admin@$DOMAIN_NAME --redirect

echo "Deployment Complete! Your site should be live at https://$DOMAIN_NAME"
