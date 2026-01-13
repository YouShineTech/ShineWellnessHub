import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/program-card";
import { BlogCard } from "@/components/blog-card";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, Heart, Zap, Baby } from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/bright_warming_sunshine_wellness_background_with_natural_elements.png";

import imgMeditation from "@assets/stock_images/meditation_yoga_woma_6c51746f.jpg";
import imgCrystals from "@assets/stock_images/crystals_healing_ene_fd9f87cc.jpg";
import imgTea from "@assets/stock_images/herbal_tea_natural_m_0efb74bd.jpg";
import imgForest from "@assets/stock_images/forest_walk_nature_w_97380c60.jpg";
import imgFood from "@assets/stock_images/healthy_plant_based__e40d1694.jpg";
import imgYoga from "@assets/stock_images/meditation_yoga_woma_bdd95ccd.jpg";
import imgBamboo from "@assets/stock_images/bamboo_forest_sunlig_eb748606.jpg";
import imgAcupuncture from "@assets/stock_images/acupuncture_needles__c6edbae8.jpg";

export default function Home() {
  const latestPosts = [
    {
      title: "Forest Bathing: The Art of Shinrin-Yoku",
      excerpt: "Discover how immersing yourself in the forest atmosphere can lower stress and boost immunity.",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      image: imgForest
    },
    {
      title: "Nourish Your Soul with Plant-Based Eating",
      excerpt: "Simple recipes and philosophy for high-vibrational eating that energizes your body and mind.",
      date: "Oct 08, 2024",
      readTime: "8 min read",
      image: imgFood
    },
    {
      title: "Morning Rituals for a Radiant Day",
      excerpt: "Start your day with intention. 5 simple practices to ground yourself before the world wakes up.",
      date: "Oct 01, 2024",
      readTime: "4 min read",
      image: imgYoga
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Bright Warming Wellness" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-orange-50/30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
        </div>
        
        <div className="container relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-6 rounded-full bg-white/80 backdrop-blur-md text-primary text-sm font-bold tracking-wider uppercase mb-8 border border-white shadow-sm">
              Integrative Mind-Body Medicine
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#5D4037] mb-8 drop-shadow-sm leading-tight">
              Let Your Inner <br /> Light <span className="text-primary">Shine</span>
            </h1>
            <p className="text-[#5D4037]/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Bridging ancient wisdom with modern science to support your journey 
              towards optimum vitality, clarity, and radiant health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                  Explore Programs
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="bg-white/60 backdrop-blur-md text-[#5D4037] border-white hover:bg-white hover:text-primary rounded-full px-10 h-14 text-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Programs Section */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50 relative">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#5D4037] mb-6">Signature Journeys</h2>
            <p className="text-muted-foreground text-lg">
              Two distinct paths designed for your life stage. Whether you are building an empire or a family, 
              we provide the structure you need to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Beyond Cleanse Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white border border-orange-100"
            >
              <div className="absolute inset-0 h-1/2">
                <img src={imgBamboo} alt="Bamboo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              </div>
              <div className="relative z-10 p-10 pt-48 h-full flex flex-col justify-between">
                <div>
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-6 text-accent">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#5D4037] mb-4">Beyond Cleanse</h3>
                  <p className="text-primary font-medium text-lg mb-6">
                    The Optimum Vitality & Clarity Program for Entrepreneurs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Reclaim your energy, focus, and freedom in just 21 days. A high-performance reset combining bio-hacking with ancient restoration.
                  </p>
                </div>
                <Link href="/programs/beyond-cleanse">
                  <Button className="w-full bg-orange-50 text-primary hover:bg-primary hover:text-white transition-colors h-12 text-lg font-semibold rounded-xl border border-primary/20">
                    Discover More
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Shine Through Perinatal Journey Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white border border-green-100"
            >
              <div className="absolute inset-0 h-1/2">
                <img src={imgAcupuncture} alt="Acupuncture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              </div>
              <div className="relative z-10 p-10 pt-48 h-full flex flex-col justify-between">
                <div>
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-6 text-secondary">
                    <Baby className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#5D4037] mb-4">Shine Through Perinatal</h3>
                  <p className="text-secondary font-medium text-lg mb-6">
                    Ancient Wisdom for the Modern Family Start-Up Journey.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Using Chinese Medicine, Ayurveda, and Neuroscience to support your whole family from pre-conception through the first year.
                  </p>
                </div>
                <Link href="/programs/shine-perinatal">
                  <Button className="w-full bg-green-50 text-secondary hover:bg-secondary hover:text-white transition-colors h-12 text-lg font-semibold rounded-xl border border-secondary/20">
                    View The Journey
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Philosophy */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Integrative Medicine", text: "Merging clinical pharmacology with herbal wisdom.", color: "text-secondary" },
              { icon: Heart, title: "Somatic Healing", text: "Regulating the nervous system for deep emotional release.", color: "text-primary" },
              { icon: Sparkles, title: "Identity Alignment", text: "Restructuring self-concept for sustainable change.", color: "text-accent" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className={`${feature.color} mb-6 flex justify-center`}>
                  <feature.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-[#5D4037]">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-orange-200 pb-4">
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase">The Journal</span>
              <h2 className="font-serif text-4xl font-bold text-[#5D4037] mt-2">Wisdom & Insights</h2>
            </div>
            <Link href="/blog">
               <Button variant="ghost" className="hidden md:flex gap-2 text-primary hover:text-primary/80 hover:bg-orange-50">
                Read All Articles <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Begin Your Transformation</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 font-medium">
            Join our community of conscious leaders and parents. Receive ancient wisdom tailored for modern life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow h-14 px-6 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <Button className="h-14 px-10 bg-white text-primary hover:bg-white/90 font-bold rounded-full shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
