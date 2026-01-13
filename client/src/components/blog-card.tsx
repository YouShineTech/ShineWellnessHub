import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
}

export function BlogCard({ title, excerpt, date, image, readTime }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full border-none shadow-sm hover:shadow-md transition-shadow bg-card group">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <CardTitle className="font-serif text-lg group-hover:text-primary transition-colors leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="link" className="px-0 text-secondary-foreground hover:text-primary">
            Read Article →
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
