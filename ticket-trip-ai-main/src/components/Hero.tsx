import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, MapPin, Smartphone, Download, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import heroImage from "@/assets/hero-travel-ai.jpg";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleDownloadApp = () => {
    const apkUrl = "https://github.com/garyyang01/KTV-BTS/releases/download/v0.9.1/Tricketrip.apk";
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'Ticketrip.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setIsSearchMode(true);

    try {
      const response = await fetch('https://ezzn8n.zeabur.app/webhook/AiSearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Prompt: searchQuery
        }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.text();
      setSearchResult(data);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResult('Sorry, something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleNewSearch = () => {
    setIsSearchMode(false);
    setSearchQuery("");
    setSearchResult("");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-travel-pattern overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/landingPageVideo.mp4" type="video/mp4" />
          {/* Fallback to image if video fails */}
          <img
            src={heroImage}
            alt="AI-powered Europe travel search interface with European landmarks"
            className="w-full h-full object-cover opacity-20"
          />
        </video>
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
              {t('hero.trustedBy')}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            Ticketrip
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
            AI Travel Ticket Booking
          </h2>

          {/* Subheadline */}
          <h3 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </h3>

          {/* AI Search Box */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="glass rounded-[var(--radius-lg)] p-6 border border-white/20">
                {!isSearchMode ? (
                  <>
                    {/* Input Mode */}
                    <div className="relative">
                      {isLoading ? (
                        <Loader2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground animate-spin" />
                      ) : (
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      )}
                      <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={t('hero.searchPlaceholder')}
                        className="pl-12 pr-20 h-14 text-lg border-0 bg-background/50 focus:bg-background"
                        disabled={isLoading}
                      />
                      <Button
                        onClick={handleSearch}
                        disabled={isLoading || !searchQuery.trim()}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10"
                        size="sm"
                      >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Search'}
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs text-muted-foreground">{t('hero.tryLabel')}</span>
                      <button
                        onClick={() => setSearchQuery(t('hero.tryOptions.passes'))}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {t('hero.tryOptions.passes')}
                      </button>
                      <button
                        onClick={() => setSearchQuery(t('hero.tryOptions.budget'))}
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full hover:bg-secondary/20 transition-colors"
                      >
                        {t('hero.tryOptions.budget')}
                      </button>
                      <button
                        onClick={() => setSearchQuery(t('hero.tryOptions.family'))}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors"
                      >
                        {t('hero.tryOptions.family')}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Result Mode */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">Your Search:</h4>
                        <Button
                          onClick={handleNewSearch}
                          variant="outline"
                          size="sm"
                          className="h-8"
                        >
                          New Search
                        </Button>
                      </div>
                      <div className="bg-muted/20 rounded-lg p-3">
                        <p className="text-sm text-muted-foreground">{searchQuery}</p>
                      </div>
                      <div className="bg-background/80 rounded-lg p-4 max-h-60 overflow-y-auto">
                        <h5 className="font-medium text-foreground mb-2">AI Response:</h5>
                        <div className="text-sm text-foreground whitespace-pre-wrap">
                          {searchResult}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="min-w-[200px]"
              onClick={() => document.querySelector('input')?.focus()}
            >
              <Search className="w-4 h-4 mr-2" />
              {t('hero.startSearch')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="min-w-[200px] bg-white/90 text-foreground border-white hover:bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl"
              onClick={handleDownloadApp}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              {t('hero.downloadApp')}
            </Button>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{t('hero.availableIn')}</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`font-medium hover:underline ${i18n.language === 'en' ? 'text-primary' : 'hover:text-primary transition-colors'}`}
            >
              {t('hero.languages.en')}
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => changeLanguage('zh')}
              className={`font-medium hover:underline ${i18n.language === 'zh' ? 'text-primary' : 'hover:text-primary transition-colors'}`}
            >
              {t('hero.languages.zh')}
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => changeLanguage('vi')}
              className={`font-medium hover:underline ${i18n.language === 'vi' ? 'text-primary' : 'hover:text-primary transition-colors'}`}
            >
              {t('hero.languages.vi')}
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => changeLanguage('ko')}
              className={`font-medium hover:underline ${i18n.language === 'ko' ? 'text-primary' : 'hover:text-primary transition-colors'}`}
            >
              {t('hero.languages.ko')}
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => changeLanguage('fil')}
              className={`font-medium hover:underline ${i18n.language === 'fil' ? 'text-primary' : 'hover:text-primary transition-colors'}`}
            >
              {t('hero.languages.fil')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;