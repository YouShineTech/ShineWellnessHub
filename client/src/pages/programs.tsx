import { Layout } from "@/components/layout";
import { ProgramCard } from "@/components/program-card";
import heroImage from "@assets/generated_images/serene_golden_hour_nature_landscape_for_wellness_website_hero.png";

import imgMeditation from "@assets/stock_images/meditation_yoga_woma_6c51746f.jpg";
import imgCrystals from "@assets/stock_images/crystals_healing_ene_fd9f87cc.jpg";
import imgTea from "@assets/stock_images/herbal_tea_natural_m_0efb74bd.jpg";
import imgYoga from "@assets/stock_images/meditation_yoga_woma_bdd95ccd.jpg";
import imgCrystals2 from "@assets/stock_images/crystals_healing_ene_a9a61d0c.jpg";
import imgTea2 from "@assets/stock_images/herbal_tea_natural_m_c0379742.jpg";

export default function Programs() {
  const allPrograms = [
    {
      title: "Inner Peace Meditation",
      description: "A 4-week guided journey to silence the mind and reconnect with your inner essence through ancient techniques.",
      price: "$49.00",
      category: "Meditation",
      image: imgMeditation
    },
    {
      title: "Crystal Healing 101",
      description: "Learn the fundamentals of energy work using crystals to balance your chakras and enhance your environment.",
      price: "$89.00",
      category: "Energy Work",
      image: imgCrystals
    },
    {
      title: "Herbal Wisdom Course",
      description: "Discover the healing power of nature's pharmacy. Learn to identify, harvest, and prepare medicinal herbs.",
      price: "$129.00",
      category: "Herbalism",
      image: imgTea
    },
    {
      title: "Morning Yoga Flow",
      description: "Energize your body and awaken your spirit with this 7-day morning yoga series for all levels.",
      price: "$35.00",
      category: "Movement",
      image: imgYoga
    },
    {
      title: "Advanced Crystal Grids",
      description: "Take your crystal practice to the next level by learning sacred geometry and grid layouts for manifestation.",
      price: "$95.00",
      category: "Energy Work",
      image: imgCrystals2
    },
    {
      title: "Tea Blending Workshop",
      description: "Master the art of blending teas for flavor and health. Includes a starter kit of organic dried herbs.",
      price: "$150.00",
      category: "Herbalism",
      image: imgTea2
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4">Healing Programs</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our collection of courses, workshops, and guides designed to support your journey to wholeness.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPrograms.map((program, i) => (
            <ProgramCard key={i} {...program} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
