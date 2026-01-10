const MolhosSection = () => {
  return (
    <section className="py-8 md:py-12 bg-olive-light">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title mb-8">
          Frescor NO <b>PRATO</b> + molhos irresistíveis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img 
            src="/images/molho-1.webp" 
            alt="Molho 1" 
            className="w-full rounded-2xl"
          />
          <img 
            src="/images/molho-2.webp" 
            alt="Molho 2" 
            className="w-full rounded-2xl"
          />
          <img 
            src="/images/molho-3.webp" 
            alt="Molho 3" 
            className="w-full rounded-2xl"
          />
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

export default MolhosSection;
