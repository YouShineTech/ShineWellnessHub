import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface ProgramCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  slug: string;
}

export function ProgramCard({ title, description, price, image, category, slug }: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow bg-card">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {description}
          </p>
          <p className="text-lg font-semibold text-secondary-foreground">{price}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/programs/${slug}`} className="w-full">
            <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
              Learn More
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
