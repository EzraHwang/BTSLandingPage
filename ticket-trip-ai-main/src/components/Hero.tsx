import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-travel-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-travel-pattern overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered Europe travel search interface with European landmarks"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-secondary/10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="glass rounded-lg p-4 text-center">
          <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Paris</p>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass rounded-lg p-4 text-center">
          <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">AI Search</p>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Signal */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
              Trusted by 10,000+ Asian travelers
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            Ticket Trip: AI Travel Search for Europe
          </h1>

          {/* Subheadline */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Explore destinations, train options, and attractions instantly – no booking needed.
          </h2>

          {/* AI Search Box */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="glass rounded-[var(--radius-lg)] p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">AI Travel Assistant</span>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Ask me anything: 'Best train route from Paris to Rome for families'"
                    className="pl-12 h-14 text-lg border-0 bg-background/50 focus:bg-background"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs text-muted-foreground">Try:</span>
                  <button className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors">
                    Europe train passes
                  </button>
                  <button className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full hover:bg-secondary/20 transition-colors">
                    Budget itinerary Berlin
                  </button>
                  <button className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                    Family attractions Paris
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Start AI Travel Search
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Watch Demo
            </Button>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Available in:</span>
            <button className="text-primary font-medium hover:underline">English</button>
            <span className="text-border">|</span>
            <button className="hover:text-primary transition-colors">中文</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;