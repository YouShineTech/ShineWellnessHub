import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import textureImage from "@assets/generated_images/soft_watercolor_organic_texture_background.png";

export default function Contact() {
  return (
    <Layout>
      <div className="relative min-h-[80vh] flex items-center py-20">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-20">
           <img src={textureImage} alt="Texture" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Get In Touch</span>
              <h1 className="font-serif text-5xl font-bold text-foreground mb-6">Let's Collaborate</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Are you an alternative medicine practitioner or healer? I'd love to hear from you. 
                Let's explore how we can collaborate to bring more light and healing into the world.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Me</h3>
                  <p className="text-primary">hello@youshine.wellness</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Connect on Social</h3>
                  <p className="text-muted-foreground">@youshine.wellness</p>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                      <Input id="first-name" placeholder="Jane" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                      <Input id="last-name" placeholder="Doe" className="bg-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="jane@example.com" className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Collaboration Inquiry" className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Tell me about yourself and your ideas..." className="min-h-[120px] bg-white" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
}
