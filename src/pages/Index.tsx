import { useState } from "react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { ArrowDown, ChevronDown } from "lucide-react";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const scrollToQuiz = () => {
    setShowQuiz(true);
    setTimeout(() => {
      document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">ClaimFinder</div>
          <Button variant="outline" size="sm" onClick={scrollToQuiz}>
            Check Eligibility
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground uppercase tracking-widest text-sm mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            Billions in unclaimed assets waiting
          </p>
          
          <h1 className="text-display-sm md:text-display mb-6 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Find your
            <br />
            unclaimed money.
          </h1>
          
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Every year, billions of dollars go unclaimed. Old bank accounts, forgotten 
            insurance policies, uncashed checks—they could be yours.
          </p>

          <div className="animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl" onClick={scrollToQuiz} className="group">
              Check If You're Owed Money
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="$2.7B+" label="Recovered" delay={0} />
            <StatCard value="4.8M+" label="People Helped" delay={100} />
            <StatCard value="$1,847" label="Avg. Claim" delay={200} />
            <StatCard value="98%" label="Success Rate" delay={300} />
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="py-24 px-6 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          {showQuiz ? (
            <EligibilityQuiz />
          ) : (
            <div className="text-center animate-fade-up">
              <h2 className="text-display-sm md:text-display mb-4">
                Are you eligible?
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                Answer 3 quick questions to find out if you have unclaimed money waiting.
              </p>
              <Button variant="hero" size="lg" onClick={() => setShowQuiz(true)}>
                Start Free Check
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Takes less than 60 seconds
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-sm md:text-display mb-4">
            Don't leave money<br />on the table.
          </h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join over 4 million Americans who have already recovered their unclaimed funds.
          </p>
          <Button variant="hero" size="xl" onClick={scrollToQuiz}>
            Check Your Eligibility Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
