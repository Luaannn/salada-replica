const bonuses = [
  {
    image: "/images/bonus-1.webp",
    title: "SMOOTHIES DETOX",
    subtitle: "20 RECEITAS",
    originalPrice: "R$29,90",
  },
  {
    image: "/images/bonus-2.webp",
    title: "SHOTS MATINAIS",
    subtitle: "5 RECEITAS",
    originalPrice: "R$29,90",
  },
  {
    image: "/images/bonus-3.webp",
    title: "ÁGUAS SABORIZADAS",
    subtitle: "15 RECEITAS",
    originalPrice: "R$29,90",
  },
];

const BonusSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title mb-8">
          RECEBA AINDA<br />
          <b>+ 3 bônus exclusivos:</b>
        </h2>

        <div className="space-y-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bonus-card">
              <img 
                src={bonus.image} 
                alt={bonus.title} 
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover flex-shrink-0"
              />
              <div className="text-center md:text-left flex-1">
                <p className="text-olive-dark font-bold text-sm mb-1">BÔNUS {index + 1}:</p>
                <h3 className="text-olive-dark font-bold text-xl md:text-2xl">
                  {bonus.title}<br />
                  <span className="font-normal">{bonus.subtitle}</span>
                </h3>
                <p className="text-olive-dark text-lg mt-2">
                  <span className="line-through text-muted-foreground">{bonus.originalPrice}</span>{" "}
                  <span className="font-bold text-cta-green">HOJE É GRÁTIS!</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a 
            href="#price" 
            className="cta-button w-full max-w-md text-center"
          >
            QUERO AS RECEITAS!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
