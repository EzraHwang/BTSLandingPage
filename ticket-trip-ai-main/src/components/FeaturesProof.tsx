import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, MapPin, Train, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeaturesProof = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: MapPin,
      titleKey: "keyFeatures.aiCommand.title",
      descriptionKey: "keyFeatures.aiCommand.description",
      demoKey: "keyFeatures.aiCommand.example"
    },
    {
      icon: Heart,
      titleKey: "keyFeatures.leadCapture.title",
      descriptionKey: "keyFeatures.leadCapture.description",
      demoKey: "keyFeatures.leadCapture.subtitle"
    },
    {
      icon: Train,
      titleKey: "keyFeatures.languageToggle.title",
      descriptionKey: "keyFeatures.languageToggle.description",
      demoKey: "keyFeatures.languageToggle.example"
    }
  ];

  const testimonials = t('testimonials.users', { returnObjects: true }) as Array<{
    name: string;
    location: string;
    initials: string;
    review: string;
  }>;

  const useCases = [
    {
      icon: Users,
      titleKey: "keyFeatures.solo.title",
      descriptionKey: "keyFeatures.solo.description",
      exampleKey: "keyFeatures.solo.subtitle"
    },
    {
      icon: Heart,
      titleKey: "keyFeatures.families.title",
      descriptionKey: "keyFeatures.families.description",
      exampleKey: "keyFeatures.families.subtitle"
    },
    {
      icon: MapPin,
      titleKey: "keyFeatures.groups.title",
      descriptionKey: "keyFeatures.groups.description",
      exampleKey: "keyFeatures.groups.subtitle"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Features Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('keyFeatures.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('keyFeatures.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="travel-card p-6 text-center">
                <div className="mb-4">
                  <feature.icon className="w-10 h-10 mx-auto text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground mb-4">{t(feature.descriptionKey)}</p>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">{t(feature.demoKey)}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">{t('keyFeatures.perfectFor')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <useCase.icon className="w-12 h-12 mx-auto text-secondary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{t(useCase.titleKey)}</h4>
                <p className="text-muted-foreground mb-3">{t(useCase.descriptionKey)}</p>
                <div className="bg-secondary/10 rounded-lg p-3">
                  <p className="text-sm text-secondary font-medium">{t(useCase.exampleKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">{t('testimonials.title')}</h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-secondary" />
                ))}
              </div>
              <span className="text-lg font-semibold">{t('testimonials.rating')}</span>
              <span className="text-muted-foreground">{t('testimonials.reviews')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="travel-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {testimonial.initials}
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
                <p className="text-muted-foreground leading-relaxed">{testimonial.review}</p>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesProof;