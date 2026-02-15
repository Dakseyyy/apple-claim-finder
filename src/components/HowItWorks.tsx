import { Search, FileCheck, Banknote } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Enter your details to search all government benefit programs across all 50 states.",
  },
  {
    icon: FileCheck,
    title: "Verify",
    description: "Review your matches and see what you're eligible for.",
  },
  {
    icon: Banknote,
    title: "Claim",
    description: "Submit your information and get connected with your benefits.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-display-sm md:text-display text-center mb-4">
          How it works.
        </h2>
        <p className="text-body-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Three simple steps to recover what's rightfully yours.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center p-8 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                <step.icon className="w-7 h-7 text-foreground" />
              </div>
              <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                Step {index + 1}
              </div>
              <h3 className="text-headline mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
