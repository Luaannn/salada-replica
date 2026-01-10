const bonuses = [
  {
    image: "/images/bonus-1.webp",
    title: "DETOX SMOOTHIES",
    subtitle: "20 RECIPES",
    originalPrice: "$9.90",
  },
  {
    image: "/images/bonus-2.webp",
    title: "MORNING SHOTS",
    subtitle: "5 RECIPES",
    originalPrice: "$9.90",
  },
  {
    image: "/images/bonus-3.webp",
    title: "INFUSED WATERS",
    subtitle: "15 RECIPES",
    originalPrice: "$9.90",
  },
];

const BonusCard = ({ bonus, index }: { bonus: typeof bonuses[0]; index: number }) => (
  <div className="salad-card">
    <img 
      src={bonus.image} 
      alt={bonus.title} 
      className="w-full aspect-[4/5] object-cover"
    />
    <div className="p-3 md:p-4 text-center">
      <p className="text-olive-dark font-bold text-xs mb-1">BONUS {index + 1}:</p>
      <h3 className="text-olive-dark font-bold text-base md:text-lg leading-tight">
        {bonus.title}
        <br />
        <span className="font-normal text-sm md:text-base">{bonus.subtitle}</span>
      </h3>
      <p className="text-muted-foreground text-xs md:text-sm mt-2">
        <span className="line-through">{bonus.originalPrice}</span>{" "}
        <span className="font-bold text-cta-green">FREE TODAY!</span>
      </p>
    </div>
  </div>
);

const BonusSection = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title mb-6 md:mb-8">
          ALSO RECEIVE<br />
          <b>+ 3 exclusive bonuses:</b>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {bonuses.map((bonus, index) => (
            <BonusCard key={index} bonus={bonus} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-6 md:mt-8">
          <a 
            href="#price" 
            className="cta-button w-full max-w-md text-center"
          >
            I WANT THE RECIPES!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
