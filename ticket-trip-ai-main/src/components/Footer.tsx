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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Ticketrip</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                {t('footer.description')}
              </p>
            </div>

            {/* Privacy Link */}
            <div>
              <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
              <div className="space-y-3">
                <a href="/privacy" className="block text-muted-foreground hover:text-background transition-colors">
                  {t('navigation.privacy')}
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-background/20 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Language Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4" />
                <span>{t('footer.language')}</span>
                <button className="text-primary font-medium hover:underline">English</button>
                <span className="text-muted-foreground">|</span>
                <button className="text-muted-foreground hover:text-background transition-colors">中文</button>
              </div>
            </div>
          </div>

          <Separator className="bg-background/20 my-8" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;