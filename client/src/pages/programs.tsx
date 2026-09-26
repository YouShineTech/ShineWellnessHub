import { Layout } from "@/components/layout";
import { ProgramCard } from "@/components/program-card";
import heroImage from "@assets/generated_images/serene_golden_hour_nature_landscape_for_wellness_website_hero.png";
import { allPrograms } from "@/shared/programs";

export default function Programs() {

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
