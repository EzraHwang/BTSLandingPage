import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Globe,
  Sparkles
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Europe with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Asian travelers who've discovered their perfect Europe trip with our AI-powered search
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="min-w-[200px] bg-white text-primary hover:bg-white/90">
              <Sparkles className="w-4 h-4 mr-2" />
              Start AI Search Now
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white/10">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with AI Assistant
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Ticket Trip</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                AI-powered Europe travel search designed for Asian travelers. 
                Explore destinations, train options, and attractions instantly – no booking pressure.
              </p>
              
              {/* Newsletter Signup */}
              <div className="max-w-md">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Your email address"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                  />
                  <Button variant="secondary" size="sm">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Get travel tips and destination updates. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  AI Travel Search
                </a>
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  How It Works
                </a>
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  Travel Blog
                </a>
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  Success Stories
                </a>
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-muted-foreground hover:text-background transition-colors">
                  GDPR Compliance
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-background/20 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact Options */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@tickettrip.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Live Chat Available</span>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4" />
                <span>Language:</span>
                <button className="text-primary font-medium hover:underline">English</button>
                <span className="text-muted-foreground">|</span>
                <button className="text-muted-foreground hover:text-background transition-colors">中文</button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <Separator className="bg-background/20 my-8" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Ticket Trip. All rights reserved. Built for Asian travelers exploring Europe.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;