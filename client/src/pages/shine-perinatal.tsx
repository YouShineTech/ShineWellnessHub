import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Heart, Sun, Moon, Users, Baby, Check } from "lucide-react";
import heroImage from "@assets/stock_images/mother_holding_newbo_692fd47d.jpg";
import imgPregnancy from "@assets/stock_images/pregnant_woman_yoga__a763b2a2.jpg";
import textureImage from "@assets/generated_images/ancient_wisdom_scroll_or_texture_background.png";

export default function ShinePerinatal() {
  const phases = [
    {
      title: "Phase 1: The Fertility Renaissance™",
      subtitle: "6-Month Pre-Conception Optimization",
      price: "$12,000",
      description: "Transform your fertility from the cellular level. Includes constitutional analysis, stress-to-strength practices, and sacred timing for conception.",
      features: ["Couple synchronization", "Environmental detox", "Cellular optimization"]
    },
    {
      title: "Phase 2: Conscious Pregnancy Journey™",
      subtitle: "9-Month Sacred Pregnancy Support",
      price: "$15,000",
      description: "Month-by-month transformation protocols based on baby's development. Includes trimester-specific massage, prenatal yoga, and birth preparation.",
      features: ["Weekly optimization sessions", "Partner integration", "Birth intensives"]
    },
    {
      title: "Phase 3: The Golden Recovery™",
      subtitle: "6-Month Postpartum Restoration",
      price: "$12,000",
      description: "Protect mother's health for the next 40 years. Focused on hormonal rebalancing, constitutional rebuilding, and preventing 'invisible injuries'.",
      features: ["42-day intensive protocol", "Sleep recovery", "Relationship restoration"]
    },
    {
      title: "Phase 4: The First Year Advantage™",
      subtitle: "6-Month Newborn Optimization",
      price: "$10,000",
      description: "Give your baby the ultimate foundation. Includes developmental assessments, sleep optimization without trauma, and illness prevention.",
      features: ["Milestone maximization", "Constitutional analysis for baby", "Parent confidence"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src={heroImage} 
             alt="Mother and Child" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>

        <div className="container relative z-10 text-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-background/80 backdrop-blur-md p-8 md:p-12 rounded-t-[100px] shadow-2xl border-t border-primary/20"
          >
            <div className="flex justify-center mb-6">
              <Sun className="text-primary w-12 h-12" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Shine Through <br/><span className="text-primary italic">Perinatal Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
              Ancient wisdom for your family's sacred transition. <br className="hidden md:block"/>
              From pre-conception through your baby's first year.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 h-14 text-lg shadow-lg">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img src={textureImage} alt="Texture" className="w-full h-full object-cover" />
         </div>
         
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <img 
                 src={imgPregnancy} 
                 alt="Prenatal Yoga" 
                 className="rounded-tl-[100px] rounded-br-[100px] shadow-2xl w-full object-cover h-[600px]" 
               />
             </div>
             <div>
               <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                 Your Family's Wellness Begins <span className="text-primary">Before Birth</span>
               </h2>
               <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                 What if the way you navigate pregnancy creates the foundation for your child's lifelong vitality?
               </p>
               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                 Drawing from thousands of years of ancestral wisdom (TCM & Ayurveda) combined with modern neuroscience, 
                 we guide you through a transformative journey that honors your unique constitution.
               </p>
               
               <div className="grid grid-cols-2 gap-6">
                 <div className="bg-secondary/20 p-6 rounded-lg border border-secondary/30">
                   <Heart className="text-primary mb-3 w-8 h-8" />
                   <h3 className="font-bold text-foreground mb-2">Holistic Care</h3>
                   <p className="text-sm text-muted-foreground">Integrating body, mind, and spirit for the whole family ecosystem.</p>
                 </div>
                 <div className="bg-secondary/20 p-6 rounded-lg border border-secondary/30">
                   <Users className="text-primary mb-3 w-8 h-8" />
                   <h3 className="font-bold text-foreground mb-2">Ancient Wisdom</h3>
                   <p className="text-sm text-muted-foreground">Proven traditions adapted for modern busy lives.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* The 4 Phases */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">The Sacred Family Blueprint™</h2>
            <p className="text-muted-foreground text-lg">Four transformational phases for generational health.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-background/50 backdrop-blur-sm overflow-hidden group">
                <div className="h-2 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{phase.title}</h3>
                      <p className="text-sm font-semibold text-primary uppercase tracking-wider">{phase.subtitle}</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-bold">
                      {phase.price}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed border-b border-border/50 pb-6">
                    {phase.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {phase.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Star className="w-4 h-4 text-accent fill-accent" /> {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Complete Package CTA */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10 max-w-4xl">
           <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">The Complete Journey Offer</h2>
           <p className="text-xl md:text-2xl text-white/90 mb-8">
             Invest in the full 27-month transformation for <span className="font-bold text-accent">$30,000</span>.
             <span className="block text-lg mt-2 opacity-80">(Save $19,000 compared to individual phases)</span>
           </p>
           <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 mb-10">
             <h3 className="font-bold text-xl mb-4">Bonuses Included:</h3>
             <div className="grid md:grid-cols-2 gap-4 text-left">
               <div className="flex items-center gap-2"><Check className="w-5 h-5 text-accent"/> Sibling Preparation Program</div>
               <div className="flex items-center gap-2"><Check className="w-5 h-5 text-accent"/> 5-Year Family Wellness Assessments</div>
               <div className="flex items-center gap-2"><Check className="w-5 h-5 text-accent"/> Grandparent Integration</div>
               <div className="flex items-center gap-2"><Check className="w-5 h-5 text-accent"/> 24/7 Emergency Support Hotline</div>
             </div>
           </div>
           <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 h-16 text-xl font-bold shadow-2xl transform hover:scale-105 transition-transform">
             Schedule Your Consultation
           </Button>
         </div>
      </section>
    </Layout>
  );
}
