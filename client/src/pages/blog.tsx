import { Layout } from "@/components/layout";
import { BlogCard } from "@/components/blog-card";

import imgForest from "@assets/stock_images/forest_walk_nature_w_97380c60.jpg";
import imgFood from "@assets/stock_images/healthy_plant_based__e40d1694.jpg";
import imgYoga from "@assets/stock_images/meditation_yoga_woma_bdd95ccd.jpg";
import imgTea from "@assets/stock_images/herbal_tea_natural_m_0efb74bd.jpg";
import imgCrystals from "@assets/stock_images/crystals_healing_ene_fd9f87cc.jpg";
import imgMeditation from "@assets/stock_images/meditation_yoga_woma_6c51746f.jpg";

export default function Blog() {
  const posts = [
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
    },
    {
      title: "The Healing Power of Chamomile",
      excerpt: "More than just a sleep aid, chamomile is a powerhouse for digestive health and anxiety relief.",
      date: "Sep 28, 2024",
      readTime: "6 min read",
      image: imgTea
    },
    {
      title: "Cleansing Your Space with Selenite",
      excerpt: "How to use this high-vibration crystal to clear stagnant energy from your home and aura.",
      date: "Sep 22, 2024",
      readTime: "3 min read",
      image: imgCrystals
    },
    {
      title: "Meditation for Busy Minds",
      excerpt: "Struggling to sit still? Try these dynamic meditation techniques designed for the modern lifestyle.",
      date: "Sep 15, 2024",
      readTime: "7 min read",
      image: imgMeditation
    }
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4">Wellness Journal</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Thoughts, tips, and inspiration for living a balanced, natural, and uplifted life.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
