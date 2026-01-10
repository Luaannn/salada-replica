const NutriSection = () => {
  return (
    <section className="py-8 md:py-12 bg-olive-light">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-8">
          SALADAS DA NUTRI<br />
          <b>AURORA PRADO</b>
        </h2>

        <div className="flex justify-center mb-8">
          <img 
            src="/images/nutri.webp" 
            alt="Aurora Prado" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-olive-dark"
          />
        </div>

        <p className="text-olive-dark text-lg max-w-2xl mx-auto">
          Minhas receitas de Saladas no Pote e Molhos Irresistíveis sempre fizeram sucesso na internet.
          Resolvi reunir as 60 melhores receitas em um único lugar e compartilhar esse conhecimento
          com você também.
        </p>
      </div>
    </section>
  );
};

export default NutriSection;
