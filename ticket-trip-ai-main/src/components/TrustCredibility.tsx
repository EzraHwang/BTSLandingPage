import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, TrendingUp, Globe, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustCredibility = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Users,
      numberKey: "trust.stats.travelers",
      labelKey: "trust.stats.travelersDesc",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      numberKey: "trust.stats.useful",
      labelKey: "trust.stats.usefulDesc",
      color: "text-success"
    },
    {
      icon: Globe,
      numberKey: "trust.stats.countries",
      labelKey: "trust.stats.countriesDesc",
      color: "text-secondary"
    },
    {
      icon: Award,
      numberKey: "trust.stats.rating",
      labelKey: "trust.stats.ratingDesc",
      color: "text-accent"
    }
  ];

  const partnerships = [
    {
      nameKey: "trust.partners.eurail.name",
      typeKey: "trust.partners.eurail.status",
      descriptionKey: "trust.partners.eurail.description"
    },
    {
      nameKey: "trust.partners.etc.name",
      typeKey: "trust.partners.etc.status",
      descriptionKey: "trust.partners.etc.description"
    },
    {
      nameKey: "trust.partners.traveltech.name",
      typeKey: "trust.partners.traveltech.status",
      descriptionKey: "trust.partners.traveltech.description"
    },
    {
      nameKey: "trust.partners.gdpr.name",
      typeKey: "trust.partners.gdpr.status",
      descriptionKey: "trust.partners.gdpr.description"
    }
  ];

  const compliance = [
    {
      icon: Shield,
      titleKey: "trust.securityFeatures.gdpr.title",
      descriptionKey: "trust.securityFeatures.gdpr.description"
    },
    {
      icon: CheckCircle,
      titleKey: "trust.securityFeatures.secure.title",
      descriptionKey: "trust.securityFeatures.secure.description"
    },
    {
      icon: Award,
      titleKey: "trust.securityFeatures.certified.title",
      descriptionKey: "trust.securityFeatures.certified.description"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('trust.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('trust.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="travel-card p-6 text-center">
                <stat.icon className={`w-10 h-10 mx-auto ${stat.color} mb-4`} />
                <div className="text-3xl font-bold mb-2">{t(stat.numberKey)}</div>
                <p className="text-sm text-muted-foreground">{t(stat.labelKey)}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnerships & Recognition */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">{t('trust.partnerships')}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-[var(--radius)] shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{t(partner.nameKey)}</h4>
                    <Badge variant="outline" className="text-xs">{t(partner.typeKey)}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{t(partner.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">{t('trust.security')}</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-semibold mb-2">{t(item.titleKey)}</h4>
                <p className="text-sm text-muted-foreground">{t(item.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustCredibility;