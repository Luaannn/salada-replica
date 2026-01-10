const testimonials = [
  "/images/depo-1.webp",
  "/images/depo-2.webp",
  "/images/depo-3.webp",
  "/images/depo-4.webp",
  "/images/depo-5.webp",
  "/images/depo-6.webp",
];

const TestimonialsSection = () => {
  return (
    <section className="py-8 md:py-12 overflow-hidden">
      <div className="container max-w-4xl mx-auto">
        <p className="text-olive-dark text-lg text-center mb-6">
          <strong>Veja as mensagens</strong> que recebo quase todos os dias:
        </p>

        {/* Marquee container */}
        <div className="relative">
          <div className="marquee-container">
            <div className="marquee-track">
              {/* First set */}
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`first-${index}`} 
                  className="marquee-item"
                >
                  <img 
                    src={testimonial} 
                    alt={`Depoimento ${index + 1}`} 
                    className="w-48 md:w-56 rounded-2xl"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`second-${index}`} 
                  className="marquee-item"
                >
                  <img 
                    src={testimonial} 
                    alt={`Depoimento ${index + 1}`} 
                    className="w-48 md:w-56 rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
