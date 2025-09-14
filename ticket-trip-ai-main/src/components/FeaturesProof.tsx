import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, MapPin, Train, Heart } from "lucide-react";

const FeaturesProof = () => {
  const features = [
    {
      icon: MapPin,
      title: "AI Command Box",
      description: "Free-text search for destinations, transport, duration, and budget",
      demo: "Try: 'Romantic weekend in Prague under €500'"
    },
    {
      icon: Heart,
      title: "Lead Capture",
      description: "Optional email/phone form for updates and trip notifications",
      demo: "Save your searches and get personalized updates"
    },
    {
      icon: Train,
      title: "Language Toggle", 
      description: "Switch seamlessly between Chinese & English interfaces",
      demo: "中文 ⇄ English in one click"
    }
  ];

  const testimonials = [
    {
      name: "Li Wei",
      location: "Shanghai, China",
      text: "Ticket Trip's AI search made planning my Europe trip easy and fast! Found train routes I never knew existed.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Kim Min-jun",
      location: "Seoul, Korea", 
      text: "Finally, a travel tool that understands what Asian travelers need. The language support is perfect.",
      rating: 5,
      avatar: "KM"
    },
    {
      name: "Tanaka Yuki",
      location: "Tokyo, Japan",
      text: "Used it to plan a 5-city Europe trip. The AI suggestions were spot-on and saved me hours of research.",
      rating: 5,
      avatar: "TY"
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Solo Travelers",
      description: "Perfect for independent explorers planning their first Europe adventure",
      example: "Find safe neighborhoods and solo-friendly attractions"
    },
    {
      icon: Heart,
      title: "Families",
      description: "Discover family-friendly attractions and train routes across Europe",
      example: "Kid-friendly museums and train routes with easy connections"
    },
    {
      icon: MapPin,
      title: "Group Trips",
      description: "Coordinate multi-city itineraries for friend groups and couples",
      example: "City-hopping itineraries that work for different budgets"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Features Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key Features Built for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Smart Travel Planning
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every feature designed to make Europe travel planning effortless for Asian travelers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="travel-card p-6 text-center">
                <div className="mb-4">
                  <feature.icon className="w-10 h-10 mx-auto text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">{feature.demo}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Perfect For Every Type of Traveler</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <useCase.icon className="w-12 h-12 mx-auto text-secondary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{useCase.title}</h4>
                <p className="text-muted-foreground mb-3">{useCase.description}</p>
                <div className="bg-secondary/10 rounded-lg p-3">
                  <p className="text-sm text-secondary font-medium">{useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Loved by Travelers Across Asia</h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-secondary" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-muted-foreground">from 2,847 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="travel-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-secondary" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </Card>
            ))}
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-[var(--radius-lg)] p-8 text-center">
            <Badge variant="secondary" className="mb-4">Success Story</Badge>
            <h4 className="text-xl font-semibold mb-4">
              A Korean traveler used Ticket Trip to explore train options for a 5-city Europe trip
            </h4>
            <p className="text-muted-foreground mb-6">
              Received personalized email updates with the best travel info, seasonal tips, and exclusive discounts. 
              Saved over 15 hours of research time and discovered hidden gems in each city.
            </p>
            <Button variant="outline">Read Full Story</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProof;