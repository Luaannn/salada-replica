const MolhosSection = () => {
  return (
    <section className="py-6 md:py-12 bg-olive-light">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title mb-6 md:mb-8">
          Frescor NO <b>PRATO</b> + molhos irresistíveis
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <img 
            src="/images/molho-1.webp" 
            alt="Molho 1" 
            className="w-full rounded-xl md:rounded-2xl"
          />
          <img 
            src="/images/molho-2.webp" 
            alt="Molho 2" 
            className="w-full rounded-xl md:rounded-2xl"
          />
          <img 
            src="/images/molho-3.webp" 
            alt="Molho 3" 
            className="w-full rounded-xl md:rounded-2xl col-span-2 md:col-span-1"
          />
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

export default MolhosSection;
