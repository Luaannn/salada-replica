import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  "/images/depo-1.webp",
  "/images/depo-2.webp",
  "/images/depo-3.webp",
  "/images/depo-4.webp",
  "/images/depo-5.webp",
  "/images/depo-6.webp",
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container max-w-4xl mx-auto">
        <p className="text-olive-dark text-lg text-center mb-6">
          <strong>Veja as mensagens</strong> que recebo quase todos os dias:
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <img 
                    src={testimonial} 
                    alt={`Depoimento ${index + 1}`} 
                    className="w-full max-w-sm mx-auto rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-olive-dark/80 text-white p-2 rounded-full hover:bg-olive-dark transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-olive-dark/80 text-white p-2 rounded-full hover:bg-olive-dark transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-olive-dark" : "bg-olive-dark/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
