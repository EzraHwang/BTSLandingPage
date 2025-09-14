import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, TrendingUp, Globe, CheckCircle } from "lucide-react";

const TrustCredibility = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Asian travelers trust us",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "99%",
      label: "Users found searches useful",
      color: "text-success"
    },
    {
      icon: Globe,
      number: "27",
      label: "European countries covered",
      color: "text-secondary"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Average user rating",
      color: "text-accent"
    }
  ];

  const partnerships = [
    {
      name: "Eurail",
      type: "Official Partner",
      description: "Authorized European train pass distributor"
    },
    {
      name: "European Tourism Commission",
      type: "Member",
      description: "Promoting sustainable travel across Europe"
    },
    {
      name: "TravelTech Asia",
      type: "Featured",
      description: "Recognized innovation in travel technology"
    },
    {
      name: "GDPR Certified",
      type: "Compliance",
      description: "Full European data protection compliance"
    }
  ];

  const compliance = [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "European data protection standards"
    },
    {
      icon: CheckCircle,
      title: "Secure Data",
      description: "End-to-end encryption for all user data"
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "Travel industry safety certifications"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Travelers{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Across Asia
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied travelers who've discovered Europe with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="travel-card p-6 text-center">
                <stat.icon className={`w-10 h-10 mx-auto ${stat.color} mb-4`} />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnerships & Recognition */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Industry Partnerships & Recognition</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-[var(--radius)] shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{partner.name}</h4>
                    <Badge variant="outline" className="text-xs">{partner.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Security & Compliance</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Meet the Team</h3>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-[var(--radius-lg)] p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">TT</span>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold">Ticket Trip Team</h4>
                <p className="text-muted-foreground">Travel experts bridging Asia and Europe</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines deep expertise in Asian travel preferences with extensive knowledge of European destinations. 
              We've personally traveled these routes and understand the unique needs of Asian travelers exploring Europe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredibility;