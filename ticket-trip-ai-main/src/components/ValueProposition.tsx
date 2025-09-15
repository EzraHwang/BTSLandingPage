import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Globe, Shield, Zap, Users, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ValueProposition = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Brain,
      titleKey: "features.aiSearch.title",
      descriptionKey: "features.aiSearch.description",
      color: "text-accent"
    },
    {
      icon: Globe,
      titleKey: "features.multilingual.title",
      descriptionKey: "features.multilingual.description",
      color: "text-primary"
    },
    {
      icon: Zap,
      titleKey: "features.instant.title",
      descriptionKey: "features.instant.description",
      color: "text-secondary"
    },
    {
      icon: Shield,
      titleKey: "features.noCommitment.title",
      descriptionKey: "features.noCommitment.description",
      color: "text-success"
    },
    {
      icon: Users,
      titleKey: "features.community.title",
      descriptionKey: "features.community.description",
      color: "text-primary"
    },
    {
      icon: Clock,
      titleKey: "features.saveTime.title",
      descriptionKey: "features.saveTime.description",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Problem Statement */}
          <div className="mb-8">
            <h3 className="text-lg text-muted-foreground mb-4">{t('problem.title')}</h3>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              {t('problem.description')}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h3 className="text-lg text-primary mb-4">{t('solution.title')}</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('solution.description')}
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
              <h3 className="text-xl font-semibold mb-3">{t(benefit.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(benefit.descriptionKey)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;