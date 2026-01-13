import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, ArrowRight, Clock, Activity, Brain, Zap, Award, ShieldCheck } from "lucide-react";
import textureImage from "@assets/generated_images/ancient_wisdom_scroll_or_texture_background.png";
import heroImage from "@assets/stock_images/business_professiona_46b58c3e.jpg";

export default function BeyondCleanse() {
  const benefits = [
    { icon: Zap, title: "Double Efficiency", text: "Accomplish in one day what used to take two." },
    { icon: Brain, title: "Mental Clarity", text: "Eliminate fog and wake up energized and unstoppable." },
    { icon: ShieldCheck, title: "Resilience", text: "Handle stress with calm focus under pressure." },
    { icon: Activity, title: "True Balance", text: "Achieve more while being present with loved ones." }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="High Performance Executive" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block py-2 px-4 border border-primary text-primary font-medium tracking-widest text-xs uppercase mb-6 bg-background/50 backdrop-blur-sm">
              For Visionary Entrepreneurs & Executives
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Beyond <span className="text-primary italic">Cleanse</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light leading-relaxed border-l-4 border-primary pl-6">
              Reclaim your energy, focus, and freedom in just <span className="font-semibold text-primary">21 days</span> of one-on-one transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 h-14 px-8 text-lg rounded-none shadow-lg">
                Apply for Transformation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 h-14 px-8 text-lg rounded-none bg-transparent">
                Download Syllabus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              You've Built Success. <br/>But at What Cost?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              You wake up tired even after a full night's sleep. Work stress feels heavier than it used to. 
              Your focus wavers, your energy dips, and your family gets what's left of you, not the best of you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <div className="absolute -inset-4 border border-primary/20 -z-10 transform rotate-2"></div>
               <img 
                 src={textureImage} 
                 alt="Texture" 
                 className="w-full h-96 object-cover grayscale opacity-50"
               />
               <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                 <p className="font-serif text-2xl italic text-foreground">
                   "Effort alone isn't the solution anymore. It's time to work smarter, not harder."
                 </p>
               </div>
            </div>
            
            <div className="space-y-8">
              {benefits.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 shrink-0 bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-24 bg-secondary/20 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Not a Course. <br/>An <span className="text-primary">Immersion</span>.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                This is a fully personalized transformation protocol based on your unique physiology, mindset, and schedule.
                We combine ancient eastern wisdom with modern neuroscience to reset your baseline.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Daily one-on-one sessions customized to your needs",
                  "Real-time guidance to track progress & stay accountable",
                  "Simple yet powerful lifestyle shifts to enhance efficiency",
                  "Deep mental & physical reprogramming to eliminate burnout",
                  "Ancient Eastern practices adapted for modern leadership"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-10 border-t border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-primary">$5,000</div>
                  <div className="text-sm text-muted-foreground">Total Investment <br/> for 21-Day Reset</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 shadow-xl border border-border relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-primary text-white px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg">
                Limited Spots
              </div>
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">The 21-Day Protocol</h3>
              
              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-primary/20"></div>

                <div className="relative pl-20">
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Week 1: The Physical Reset</h4>
                  <p className="text-sm text-muted-foreground">Restoring biological rhythm, detoxifying the system, and grounding nervous energy.</p>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Week 2: Mental Clarity</h4>
                  <p className="text-sm text-muted-foreground">Clearing brain fog, sharpening focus, and implementing efficiency protocols.</p>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-1.5 ring-4 ring-background"></div>
                  <h4 className="font-bold text-lg">Week 3: Integrated Mastery</h4>
                  <p className="text-sm text-muted-foreground">Solidifying new patterns, emotional resilience, and sustainable high performance.</p>
                </div>
              </div>

              <div className="mt-10">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg rounded-none">
                  Apply Now
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  100% Transformation Guarantee Included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
