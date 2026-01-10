const salads = [
  {
    image: "/images/salad-1.webp",
    title: "SALADA REFRESCANTE",
    subtitle: "+ MOLHO CÍTRICO",
    conservation: "7 dias",
    calories: "100 kcal",
  },
  {
    image: "/images/salad-2.webp",
    title: "SALADA CAPRESE",
    subtitle: "",
    conservation: "7 dias",
    calories: "120 kcal",
  },
  {
    image: "/images/salad-3.webp",
    title: "SALADA CAESAR",
    subtitle: "+ MOLHO ORIGINAL",
    conservation: "7 dias",
    calories: "115 kcal",
  },
  {
    image: "/images/salad-4.webp",
    title: "SALADA BIG MAC",
    subtitle: "+ MOLHO ESPECIAL",
    conservation: "7 dias",
    calories: "180 kcal",
  },
  {
    image: "/images/salad-5.webp",
    title: "SALADA MEDITERRÂNEA",
    subtitle: "+ MOLHO AGRIDOCE",
    conservation: "7 dias",
    calories: "120 kcal",
  },
  {
    image: "/images/salad-6.webp",
    title: "SALADA TOSCANA",
    subtitle: "+ MOLHO SICILIANO",
    conservation: "7 dias",
    calories: "130 kcal",
  },
  {
    image: "/images/salad-7.png",
    title: "SALADA RÚSTICA",
    subtitle: "+ MOSTARDA E MEL",
    conservation: "7 dias",
    calories: "160 kcal",
  },
];

const SaladCard = ({ salad }: { salad: typeof salads[0] }) => (
  <div className="salad-card">
    <img 
      src={salad.image} 
      alt={salad.title} 
      className="w-full aspect-[4/5] object-cover"
    />
    <div className="p-3 md:p-4 text-center">
      <h3 className="text-olive-dark font-bold text-base md:text-lg leading-tight">
        {salad.title}
        {salad.subtitle && <><br /><span className="font-normal text-sm md:text-base">{salad.subtitle}</span></>}
      </h3>
      <p className="text-muted-foreground text-xs md:text-sm mt-2">
        Conservação: {salad.conservation}<br />
        Calorias: {salad.calories}
      </p>
    </div>
  </div>
);

const CTAButton = () => (
  <div className="flex justify-center my-6 md:my-8">
    <a 
      href="#price" 
      className="cta-button w-full max-w-md text-center"
    >
      QUERO AS RECEITAS!
    </a>
  </div>
);

const SaladsSection = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title mb-6 md:mb-8">
          ALGUMAS SALADAS<br />
          <b>QUE IRÁ PRENDER:</b>
        </h2>

        {/* Mobile: 1 column, Desktop: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {salads.slice(0, 3).map((salad, index) => (
            <SaladCard key={index} salad={salad} />
          ))}
        </div>

        <CTAButton />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {salads.slice(3, 6).map((salad, index) => (
            <SaladCard key={index} salad={salad} />
          ))}
        </div>

        <CTAButton />

        {/* Last salad - centered */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/3">
            <SaladCard salad={salads[6]} />
          </div>
        </div>

        <CTAButton />
      </div>
    </section>
  );
};

export default SaladsSection;
