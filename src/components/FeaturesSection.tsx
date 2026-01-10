import { Smile, PlusCircle, Clock, ClipboardList } from "lucide-react";

const features = [
  { icon: Smile, text: "Works with any jar" },
  { icon: PlusCircle, text: "60 delicious salads" },
  { icon: PlusCircle, text: "Irresistible dressings" },
  { icon: Smile, text: "The secret of layering" },
  { icon: PlusCircle, text: "7-day preservation" },
  { icon: Clock, text: "Ready in 30 minutes" },
  { icon: ClipboardList, text: "Step-by-step preparation" },
];

const FeaturesSection = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-olive-light rounded-2xl md:rounded-3xl p-5 md:p-10 relative">
          <div className="absolute -left-3 md:-left-4 top-4 bottom-4 w-3 md:w-4 bg-olive-dark rounded-l-xl md:rounded-l-2xl hidden md:block" />
          
          <h2 className="section-title mb-6 md:mb-8">
            WHAT YOU<br />
            <b>WILL FIND:</b>
          </h2>

          <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 md:gap-3">
                <feature.icon className="feature-icon flex-shrink-0" />
                <span className="text-olive-dark text-sm md:text-lg">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mb-6 md:mb-8">
            <img 
              src="/images/features.webp" 
              alt="Jar Salads" 
              className="w-full max-w-xs md:max-w-sm rounded-xl md:rounded-2xl"
            />
          </div>

          <a 
            href="#price" 
            className="cta-button w-full max-w-md mx-auto block text-center"
          >
            I WANT THE RECIPES!
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
