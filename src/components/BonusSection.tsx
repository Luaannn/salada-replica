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
    <section className="py-6 md:py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title mb-6 md:mb-8">
          RECEBA AINDA<br />
          <b>+ 3 bônus exclusivos:</b>
        </h2>

        <div className="space-y-4 md:space-y-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bonus-card">
              <img 
                src={bonus.image} 
                alt={bonus.title} 
                className="w-28 h-28 md:w-40 md:h-40 rounded-xl md:rounded-2xl object-cover flex-shrink-0"
              />
              <div className="text-center flex-1">
                <p className="text-olive-dark font-bold text-xs md:text-sm mb-1">BÔNUS {index + 1}:</p>
                <h3 className="text-olive-dark font-bold text-lg md:text-2xl leading-tight">
                  {bonus.title}<br />
                  <span className="font-normal text-base md:text-xl">{bonus.subtitle}</span>
                </h3>
                <p className="text-olive-dark text-sm md:text-lg mt-2">
                  <span className="line-through text-muted-foreground">{bonus.originalPrice}</span>{" "}
                  <span className="font-bold text-cta-green">HOJE É GRÁTIS!</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 md:mt-8">
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
