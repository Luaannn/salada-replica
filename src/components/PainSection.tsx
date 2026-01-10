import { Check } from "lucide-react";

const pains = [
  "Too lazy to wash and chop salad every day.",
  "Throws away salad before getting to use it.",
  "Skips eating salad some days of the week.",
  "Tired of just lettuce and tomato.",
  "Already eats healthy, but fails on salads.",
];

const PainSection = () => {
  return (
    <section className="py-6 md:py-12 bg-olive-light">
      <div className="container max-w-4xl mx-auto px-4">
        <h3 className="text-olive-dark text-lg md:text-xl text-center mb-4 md:mb-6">
          DOES THIS HAPPEN <b>TO YOU?</b>
        </h3>

        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 max-w-lg mx-auto">
          {pains.map((pain, index) => (
            <li key={index} className="flex items-start gap-2 md:gap-3">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-cta-green flex-shrink-0 mt-0.5 md:mt-1" />
              <span className="text-olive-dark text-sm md:text-base">{pain}</span>
            </li>
          ))}
        </ul>

        <h2 className="section-title mb-4 md:mb-6">
          Then you need this:
        </h2>

        <h3 className="text-olive-dark text-lg md:text-2xl font-bold text-center mb-6 md:mb-8">
          JAR SALADS + IRRESISTIBLE<br />
          DRESSINGS
        </h3>

        <div className="flex justify-center">
          <img 
            src="/images/product.webp" 
            alt="Complete product" 
            className="w-full max-w-sm md:max-w-md rounded-xl md:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PainSection;
