import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "California",
    amount: "$3,247",
    text: "I had no idea I was eligible for so many benefits. The process was incredibly simple and I started receiving assistance within 6 weeks.",
  },
  {
    name: "Michael R.",
    location: "Texas",
    amount: "$892",
    text: "Found food benefits I didn't know I was eligible for.",
  },
  {
    name: "Jennifer L.",
    location: "New York",
    amount: "$5,100",
    text: "Skeptical at first, but glad I tried. They found funds from my grandmother's estate we never knew existed.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
          ))}
        </div>
        <p className="text-center text-muted-foreground mb-16">
          Rated 4.9/5 from 127,000+ verified reviews
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-6 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground mb-4">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
                <div className="text-success font-semibold">{testimonial.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
