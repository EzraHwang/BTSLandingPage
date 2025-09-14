import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Download, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Mail,
  Gift
} from "lucide-react";

const EngagementSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  const faqs = [
    {
      question: "How does AI travel search work?",
      answer: "Our AI understands natural language queries and instantly searches through thousands of destinations, transport options, and attractions to give you personalized recommendations based on your preferences, budget, and travel style."
    },
    {
      question: "Is it free to explore Europe destinations?",
      answer: "Yes! Our AI search is completely free to use. You can explore destinations, check train routes, and discover attractions without any cost. Optional email updates help you save your searches and get travel tips."
    },
    {
      question: "Can I switch languages anytime?",
      answer: "Absolutely! Toggle between Chinese and English instantly with one click. All search results, recommendations, and interface elements adapt to your chosen language."
    },
    {
      question: "How is my data stored?",
      answer: "We're GDPR compliant and use end-to-end encryption. Your search history and personal information are securely stored and never shared with third parties. You control your data and can delete it anytime."
    },
    {
      question: "Do you actually book tickets?",
      answer: "No, we're a search and discovery platform. We help you explore options and provide information, but don't handle bookings. This reduces pressure and lets you take your time making decisions."
    }
  ];

  const quizOptions = [
    { title: "Art & Culture", description: "Museums, galleries, historical sites", cities: "Paris, Rome, Vienna" },
    { title: "Nature & Adventure", description: "Mountains, hiking, outdoor activities", cities: "Swiss Alps, Norwegian Fjords" },
    { title: "Food & Nightlife", description: "Local cuisine, bars, entertainment", cities: "Barcelona, Berlin, Prague" },
    { title: "Budget Explorer", description: "Affordable options, hostels, free activities", cities: "Budapest, Krakow, Lisbon" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Interactive Quiz */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Which Europe City{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Suits Your Travel Style?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Take our quick quiz to get personalized city recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quizOptions.map((option, index) => (
              <Card key={index} className="travel-card p-6 cursor-pointer hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Recommended:</Badge>
                  <span className="text-sm text-primary font-medium">{option.cities}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Lead Magnet */}
        <div className="max-w-2xl mx-auto mb-20">
          <Card className="p-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <div className="mb-6">
              <Gift className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Free Europe Travel Guide
              </h3>
              <p className="text-muted-foreground">
                Get our exclusive "Top 10 European Train Journeys for 2025" PDF guide with insider tips and hidden routes
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button variant="secondary" className="whitespace-nowrap">
                <Download className="w-4 h-4 mr-2" />
                Get Free Guide
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. GDPR compliant.
            </p>
          </Card>
        </div>

        {/* AI Chat Widget Promotion */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-[var(--radius-lg)] p-8 border border-accent/20">
            <MessageCircle className="w-12 h-12 mx-auto text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need Help Planning?</h3>
            <p className="text-muted-foreground mb-6">
              Our AI Travel Assistant is available 24/7 to answer questions and help you plan your perfect Europe trip
            </p>
            <Button variant="ai" size="lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Chat with AI Assistant
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-muted-foreground">
              Everything you need to know about planning your Europe trip with AI
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <h4 className="font-semibold">{faq.question}</h4>
                  </div>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-8">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;