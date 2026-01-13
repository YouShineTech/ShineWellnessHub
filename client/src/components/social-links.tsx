import { SiYoutube, SiFacebook, SiLinkedin, SiInstagram } from "react-icons/si";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
        <SiYoutube size={24} />
        <span className="sr-only">YouTube</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
        <Mic size={24} />
        <span className="sr-only">Podcast</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
        <SiFacebook size={24} />
        <span className="sr-only">Facebook</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
        <SiLinkedin size={24} />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
        <SiInstagram size={24} />
        <span className="sr-only">Instagram</span>
      </a>
    </div>
  );
}
