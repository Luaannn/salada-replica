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

const SaladsSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title mb-8">
          ALGUMAS SALADAS<br />
          <b>QUE IRÁ PRENDER:</b>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salads.slice(0, 3).map((salad, index) => (
            <div key={index} className="salad-card">
              <img 
                src={salad.image} 
                alt={salad.title} 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-olive-dark font-bold text-lg">
                  {salad.title}
                  {salad.subtitle && <><br />{salad.subtitle}</>}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Conservação: {salad.conservation}<br />
                  Calorias: {salad.calories}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-8">
          <a 
            href="#price" 
            className="cta-button w-full max-w-md text-center"
          >
            QUERO AS RECEITAS!
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salads.slice(3).map((salad, index) => (
            <div key={index} className="salad-card">
              <img 
                src={salad.image} 
                alt={salad.title} 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-olive-dark font-bold text-lg">
                  {salad.title}
                  {salad.subtitle && <><br />{salad.subtitle}</>}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Conservação: {salad.conservation}<br />
                  Calorias: {salad.calories}
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

export default SaladsSection;
