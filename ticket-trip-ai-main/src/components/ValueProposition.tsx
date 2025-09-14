import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Globe, Shield, Zap, Users, Clock } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Search",
      description: "Natural language queries understand your travel intent instantly",
      color: "text-accent"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Seamless experience in Chinese & English for Asian travelers",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive travel information in seconds, not hours",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "No Commitment",
      description: "Explore freely without pressure to book anything",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Travel Community",
      description: "Join 10,000+ Asian travelers exploring Europe",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Skip endless searching across multiple websites",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Problem Statement */}
          <div className="mb-8">
            <h3 className="text-lg text-muted-foreground mb-4">The Problem</h3>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Finding Europe travel information is{" "}
              <span className="text-destructive">scattered, slow, and overwhelming</span>
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h3 className="text-lg text-primary mb-4">Our Solution</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ticket Trip's AI command box lets Asian travelers{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                instantly explore destinations, trains, and attractions
              </span>{" "}
              in Europe
            </h2>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="travel-card p-6 text-center group">
              <div className="mb-4">
                <benefit.icon className={`w-12 h-12 mx-auto ${benefit.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Core Differentiators */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">What Makes Us Different</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)]">
              <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold mb-2">AI understands natural language queries</h4>
                <p className="text-muted-foreground">Ask questions like you would to a travel expert, not just keywords</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-background rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)]">
              <div className="w-2 h-2 rounded-full bg-secondary mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold mb-2">Mobile-first, GDPR-compliant design</h4>
                <p className="text-muted-foreground">Secure, compliant, and optimized for your smartphone</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-background rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)]">
              <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold mb-2">Optimized for Asian travelers exploring Europe</h4>
                <p className="text-muted-foreground">Cultural context and preferences built into every recommendation</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Experience the Difference
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;