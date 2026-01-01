import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuizOption {
  label: string;
  value: string;
}

interface QuizStepProps {
  question: string;
  options: QuizOption[];
  onSelect: (value: string) => void;
  currentStep: number;
  totalSteps: number;
}

const QuizStep = ({ question, options, onSelect, currentStep, totalSteps }: QuizStepProps) => {
  return (
    <div className="animate-fade-up">
      {/* Progress indicator */}
      <div className="flex gap-2 mb-8 justify-center">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 w-12 rounded-full transition-all duration-300",
              i <= currentStep ? "bg-foreground" : "bg-muted"
            )}
          />
        ))}
      </div>

      <h3 className="text-headline text-center mb-8">{question}</h3>

      <div className="grid gap-4 max-w-md mx-auto">
        {options.map((option) => (
          <Button
            key={option.value}
            variant="glass"
            size="lg"
            onClick={() => onSelect(option.value)}
            className="w-full justify-center text-base hover:scale-[1.02] transition-transform"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuizStep;
