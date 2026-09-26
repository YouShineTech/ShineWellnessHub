
import imgMeditation from "@assets/stock_images/meditation_yoga_woma_6c51746f.jpg";
import imgCrystals from "@assets/stock_images/crystals_healing_ene_fd9f87cc.jpg";
import imgTea from "@assets/stock_images/herbal_tea_natural_m_0efb74bd.jpg";
import imgYoga from "@assets/stock_images/meditation_yoga_woma_bdd95ccd.jpg";
import imgCrystals2 from "@assets/stock_images/crystals_healing_ene_a9a61d0c.jpg";
import imgTea2 from "@assets/stock_images/herbal_tea_natural_m_c0379742.jpg";

export interface Program {
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  slug: string;
}

export const allPrograms: Program[] = [
  {
    title: "Inner Peace Meditation",
    description: "A 4-week guided journey to silence the mind and reconnect with your inner essence through ancient techniques.",
    price: "$49.00",
    category: "Meditation",
    image: imgMeditation,
    slug: "inner-peace-meditation"
  },
  {
    title: "Crystal Healing 101",
    description: "Learn the fundamentals of energy work using crystals to balance your chakras and enhance your environment.",
    price: "$89.00",
    category: "Energy Work",
    image: imgCrystals,
    slug: "crystal-healing-101"
  },
  {
    title: "Herbal Wisdom Course",
    description: "Discover the healing power of nature's pharmacy. Learn to identify, harvest, and prepare medicinal herbs.",
    price: "$129.00",
    category: "Herbalism",
    image: imgTea,
    slug: "herbal-wisdom-course"
  },
  {
    title: "Morning Yoga Flow",
    description: "Energize your body and awaken your spirit with this 7-day morning yoga series for all levels.",
    price: "$35.00",
    category: "Movement",
    image: imgYoga,
    slug: "morning-yoga-flow"
  },
  {
    title: "Advanced Crystal Grids",
    description: "Take your crystal practice to the next level by learning sacred geometry and grid layouts for manifestation.",
    price: "$95.00",
    category: "Energy Work",
    image: imgCrystals2,
    slug: "advanced-crystal-grids"
  },
  {
    title: "Tea Blending Workshop",
    description: "Master the art of blending teas for flavor and health. Includes a starter kit of organic dried herbs.",
    price: "$150.00",
    category: "Herbalism",
    image: imgTea2,
    slug: "tea-blending-workshop"
  }
];
