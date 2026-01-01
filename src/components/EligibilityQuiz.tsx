import { useState } from "react";
import QuizStep from "./QuizStep";
import EligibilityResult from "./EligibilityResult";
import { Loader2 } from "lucide-react";

const quizSteps = [
  {
    question: "How long have you lived in the United States?",
    options: [
      { label: "Less than 5 years", value: "less-5" },
      { label: "5-10 years", value: "5-10" },
      { label: "10+ years", value: "10-plus" },
    ],
  },
  {
    question: "Have you ever moved to a different state?",
    options: [
      { label: "Yes, once or twice", value: "once-twice" },
      { label: "Yes, multiple times", value: "multiple" },
      { label: "No, I've stayed in one state", value: "never" },
    ],
  },
  {
    question: "Do you have any forgotten accounts or assets?",
    options: [
      { label: "I'm not sure", value: "unsure" },
      { label: "Possibly, yes", value: "possibly" },
      { label: "I don't think so", value: "no" },
    ],
  },
];

const EligibilityQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (value: string) => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Show loading state then result
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsComplete(true);
      }, 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center animate-fade-up">
        <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-muted-foreground" />
        <p className="text-body-lg text-muted-foreground">
          Checking your eligibility...
        </p>
      </div>
    );
  }

  if (isComplete) {
    return <EligibilityResult />;
  }

  return (
    <QuizStep
      question={quizSteps[currentStep].question}
      options={quizSteps[currentStep].options}
      onSelect={handleSelect}
      currentStep={currentStep}
      totalSteps={quizSteps.length}
    />
  );
};

export default EligibilityQuiz;
