import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";

const EligibilityResult = () => {
  const handleClaimClick = () => {
    window.open("https://unclaimed.org", "_blank");
  };

  return (
    <div className="animate-scale-in text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/20 mb-6">
        <CheckCircle className="w-10 h-10 text-success" />
      </div>

      <h2 className="text-display-sm md:text-display mb-4">
        Great News!
      </h2>

      <p className="text-body-lg text-muted-foreground mb-8 max-w-lg mx-auto">
        Based on your profile, you're likely eligible for unclaimed funds. 
        The average claim in your category is <span className="text-foreground font-semibold">$1,847</span>.
      </p>

      <div className="glass-card p-6 mb-8 max-w-md mx-auto">
        <div className="flex items-center gap-4 text-left">
          <Shield className="w-8 h-8 text-muted-foreground flex-shrink-0" />
          <div>
            <div className="font-medium mb-1">Secure & Free Search</div>
            <div className="text-sm text-muted-foreground">
              Your information is protected. No fees until you recover your funds.
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="hero"
        size="xl"
        onClick={handleClaimClick}
        className="group"
      >
        Start Your Free Search
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>

      <p className="text-sm text-muted-foreground mt-4">
        Takes less than 2 minutes • 100% Free
      </p>
    </div>
  );
};

export default EligibilityResult;
