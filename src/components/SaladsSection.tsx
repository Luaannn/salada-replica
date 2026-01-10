const salads = [
  {
    image: "/images/salad-1.webp",
    title: "REFRESHING SALAD",
    subtitle: "+ CITRUS DRESSING",
    conservation: "7 days",
    calories: "100 kcal",
  },
  {
    image: "/images/salad-2.webp",
    title: "CAPRESE SALAD",
    subtitle: "",
    conservation: "7 days",
    calories: "120 kcal",
  },
  {
    image: "/images/salad-3.webp",
    title: "CAESAR SALAD",
    subtitle: "+ ORIGINAL DRESSING",
    conservation: "7 days",
    calories: "115 kcal",
  },
  {
    image: "/images/salad-4.webp",
    title: "BIG MAC SALAD",
    subtitle: "+ SPECIAL SAUCE",
    conservation: "7 days",
    calories: "180 kcal",
  },
  {
    image: "/images/salad-5.webp",
    title: "MEDITERRANEAN SALAD",
    subtitle: "+ SWEET & SOUR DRESSING",
    conservation: "7 days",
    calories: "120 kcal",
  },
  {
    image: "/images/salad-6.webp",
    title: "TUSCAN SALAD",
    subtitle: "+ SICILIAN DRESSING",
    conservation: "7 days",
    calories: "130 kcal",
  },
  {
    image: "/images/salad-7.png",
    title: "RUSTIC SALAD",
    subtitle: "+ HONEY MUSTARD",
    conservation: "7 days",
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
        Preservation: {salad.conservation}<br />
        Calories: {salad.calories}
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
      I WANT THE RECIPES!
    </a>
  </div>
);

const SaladsSection = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title mb-6 md:mb-8">
          SOME SALADS<br />
          <b>YOU'LL LOVE:</b>
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
