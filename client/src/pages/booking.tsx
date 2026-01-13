import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react";
import textureImage from "@assets/generated_images/bright_warming_sunshine_wellness_background_with_natural_elements.png";

export default function Booking() {
  return (
    <Layout>
      <div className="relative min-h-[90vh] flex items-center py-20">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0">
           <img src={textureImage} alt="Texture" className="w-full h-full object-cover opacity-10" />
           <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-orange-50/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm uppercase">Begin Your Journey</span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#5D4037] mt-4 mb-6">Book Your Consultation</h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Take the first step towards restored vitality and clarity. In this complimentary 20-minute discovery call, we will:
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Discuss your current health & wellness goals",
                  "Explore which program fits your unique constitution",
                  "Identify immediate shifts you can make today",
                  "Answer any questions about our methodology"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-[#5D4037]/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2 text-[#5D4037] font-bold">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Availability</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We generally book 2-3 weeks in advance. Please secure your spot early.
                </p>
              </div>
            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-3">
              <Card className="border-none shadow-2xl bg-white rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-[#5D4037] mb-2">Schedule Your Session</h2>
                    <p className="text-muted-foreground">Fill out the form below and we'll contact you to confirm a time.</p>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-bold text-[#5D4037]">First Name</label>
                        <Input id="first-name" placeholder="Jane" className="bg-orange-50/30 border-orange-100 focus:border-primary h-12" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-bold text-[#5D4037]">Last Name</label>
                        <Input id="last-name" placeholder="Doe" className="bg-orange-50/30 border-orange-100 focus:border-primary h-12" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-[#5D4037]">Email Address</label>
                        <Input id="email" type="email" placeholder="jane@example.com" className="bg-orange-50/30 border-orange-100 focus:border-primary h-12" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-[#5D4037]">Phone Number</label>
                        <Input id="phone" type="tel" placeholder="(555) 000-0000" className="bg-orange-50/30 border-orange-100 focus:border-primary h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="program" className="text-sm font-bold text-[#5D4037]">Interested Program</label>
                      <Select>
                        <SelectTrigger className="bg-orange-50/30 border-orange-100 focus:border-primary h-12">
                          <SelectValue placeholder="Select a program..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beyond-cleanse">Beyond Cleanse (Entrepreneurs)</SelectItem>
                          <SelectItem value="perinatal">Shine Through Perinatal Journey</SelectItem>
                          <SelectItem value="general">General Health Consultation</SelectItem>
                          <SelectItem value="unsure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="goals" className="text-sm font-bold text-[#5D4037]">Main Health Goals</label>
                      <Textarea 
                        id="goals" 
                        placeholder="Briefly describe what you're looking to achieve..." 
                        className="min-h-[120px] bg-orange-50/30 border-orange-100 focus:border-primary resize-none" 
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold rounded-xl shadow-lg mt-4">
                      Request Appointment <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      By submitting this form, you agree to receive email communications from You Shine Health & Wellness.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
