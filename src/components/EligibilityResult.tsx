import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";
import { useSearchParams } from "react-router-dom";

// ⚠️ TIKTOK CONFIG
const TIKTOK_ACCESS_TOKEN = "c26bf69670385a40d4d94a670f43f3f41685ee24"; 
const TIKTOK_PIXEL_ID = "D68THLBC77U8T6BOQD40";

const EligibilityResult = () => {
  const [searchParams] = useSearchParams();
  
  // 1. Get the ttclid from the TikTok URL
  const ttclid = searchParams.get("ttclid");

  // 2. Construct the Affiliate Link
  const baseUrl = "https://trkio.org/aff_c?offer_id=2833&aff_id=158638";
  const affiliateLink = ttclid 
    ? `${baseUrl}&aff_sub=${ttclid}&ttclid=${ttclid}` 
    : baseUrl;

  // 3. TikTok API Call Logic
  const handleClaimClick = async () => {
    const eventPayload = {
      event_source: "web",
      event_source_id: TIKTOK_PIXEL_ID, 
      data: [
        {
          event: "ViewContent",
          event_time: Math.floor(Date.now() / 1000),
          event_id: crypto.randomUUID(), 
          user: {
            ttclid: ttclid || null 
          }
        }
      ]
    };

    try {
      await fetch("https://business-api.tiktok.com/open_api/v1.3/event/track/", {
        method: "POST",
        headers: {
          "Access-Token": TIKTOK_ACCESS_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventPayload),
      });
      console.log("TikTok event sent successfully");
    } catch (error) {
      console.error("Failed to send TikTok event", error);
    }
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
        The average claim in your category is <span className="text-foreground font-semibold">$103.48</span>.
      </p>

      <div className="glass-card p-6 mb-8 max-w-md mx-auto">
        <div className="flex items-center gap-4 text-left">
          <Shield className="w-8 h-8 text-muted-foreground flex-shrink-0" />
          <div>
            <div className="font-medium mb-1">Secure & Free Search</div>
            <div className="text-sm text-muted-foreground">
              Your information is protected. Bank level security.
            </div>
          </div>
        </div>
      </div>

      <a 
        href={affiliateLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={handleClaimClick}
      >
        <Button
          variant="hero"
          size="xl"
          className="group"
        >
          Start Your Free Search
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </a>

      <p className="text-sm text-muted-foreground mt-4">
        Takes less than 2 minutes • 100% Free
      </p>
    </div>
  );
};

export default EligibilityResult;