import { Link } from "wouter";
import { SocialLinks } from "./social-links";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import logoImage from "@assets/You Shine Health & Wellness Logo_1764219812158.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-foreground">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src={logoImage} 
                alt="You Shine Health & Wellness" 
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col items-start hidden sm:flex">
                <span className="font-serif text-2xl font-bold text-[#5D4037] tracking-tight leading-none">
                  YouShine
                </span>
                <span className="text-[#8D6E63] text-[0.65rem] font-bold tracking-[0.2em] uppercase mt-1">
                  Health & Wellness
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground font-medium")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground font-medium">Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-orange-50 to-green-50 p-6 no-underline outline-none focus:shadow-md border border-orange-100"
                            href="/programs"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-primary">
                              All Offerings
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore our full range of holistic programs designed for every stage of life.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/programs/beyond-cleanse" title="Beyond Cleanse">
                        For Entrepreneurs: 21-day vitality & clarity reset.
                      </ListItem>
                      <ListItem href="/programs/shine-perinatal" title="Perinatal Journey">
                        For Families: Conception through first year support.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground font-medium")}>
                      Journal
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground font-medium")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link href="/booking">
              <Button variant="default" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-md ml-4 font-semibold">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#FDFBF7] border-l border-orange-100">
                <div className="flex flex-col gap-6 mt-10">
                  <Link href="/"><a className="text-lg font-medium text-foreground hover:text-primary">Home</a></Link>
                  <div className="space-y-3">
                    <div className="text-lg font-medium text-muted-foreground">Programs</div>
                    <Link href="/programs/beyond-cleanse"><a className="block pl-4 text-base text-foreground/80 hover:text-primary">• Beyond Cleanse</a></Link>
                    <Link href="/programs/shine-perinatal"><a className="block pl-4 text-base text-foreground/80 hover:text-primary">• Perinatal Journey</a></Link>
                  </div>
                  <Link href="/blog"><a className="text-lg font-medium text-foreground hover:text-primary">Journal</a></Link>
                  <Link href="/contact"><a className="text-lg font-medium text-foreground hover:text-primary">Contact</a></Link>
                  
                  <div className="pt-8 border-t border-orange-100">
                    <SocialLinks className="justify-center text-primary" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#5D4037] text-orange-50 py-16 border-t-8 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <img 
                    src={logoImage} 
                    alt="You Shine Health & Wellness" 
                    className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                  />
                  <span className="font-serif text-2xl font-bold text-white">YOU SHINE</span>
              </div>
              <p className="text-white/70 max-w-md mb-6 leading-relaxed font-light">
                Redefining modern leadership and family wellness by restoring internal clarity, 
                emotional coherence, and biological vitality.
              </p>
              <SocialLinks className="text-accent" />
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-accent tracking-wider uppercase text-sm">Programs</h4>
              <ul className="space-y-3">
                <li><Link href="/programs/beyond-cleanse"><a className="text-white/70 hover:text-white transition-colors">Beyond Cleanse</a></Link></li>
                <li><Link href="/programs/shine-perinatal"><a className="text-white/70 hover:text-white transition-colors">Perinatal Journey</a></Link></li>
                <li><Link href="/programs"><a className="text-white/70 hover:text-white transition-colors">All Offerings</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-accent tracking-wider uppercase text-sm">Connect</h4>
              <ul className="space-y-3">
                <li><Link href="/contact"><a className="text-white/70 hover:text-white transition-colors">For Practitioners</a></Link></li>
                <li><Link href="/contact"><a className="text-white/70 hover:text-white transition-colors">Contact Support</a></Link></li>
                <li><Link href="/blog"><a className="text-white/70 hover:text-white transition-colors">Read the Journal</a></Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} You Shine Health & Wellness. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
