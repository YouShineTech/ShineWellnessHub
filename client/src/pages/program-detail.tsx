
import { useRoute } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allPrograms } from "@/shared/programs";
import NotFound from "@/pages/not-found";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ProgramDetail() {
    const [match, params] = useRoute("/programs/:slug");

    if (!match) {
        return <NotFound />;
    }

    const program = allPrograms.find(p => p.slug === params?.slug);

    if (!program) {
        return <NotFound />;
    }

    return (
        <Layout>
            <div className="bg-secondary/30 py-12">
                <div className="container mx-auto px-4">
                    <Link href="/programs">
                        <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary pl-0">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Programs
                        </Button>
                    </Link>
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover aspect-[4/3]"
                            />
                            <Badge className="absolute top-4 right-4 bg-white/90 text-primary px-4 py-1 text-sm">
                                {program.category}
                            </Badge>
                        </div>

                        <div className="space-y-6">
                            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                                {program.title}
                            </h1>
                            <p className="text-2xl font-semibold text-secondary-foreground">
                                {program.price}
                            </p>
                            <div className="prose prose-lg text-muted-foreground">
                                <p>{program.description}</p>
                            </div>

                            <div className="pt-6">
                                <Link href="/booking">
                                    <Button size="lg" className="w-full md:w-auto text-lg px-8">
                                        Enroll Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
