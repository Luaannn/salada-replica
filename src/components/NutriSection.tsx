const NutriSection = () => {
  return (
    <section className="py-6 md:py-12 bg-olive-light">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="section-title mb-6 md:mb-8">
          SALADS BY NUTRITIONIST<br />
          <b>AURORA PRADO</b>
        </h2>

        <div className="flex justify-center mb-6 md:mb-8">
          <img 
            src="/images/nutri.webp" 
            alt="Aurora Prado" 
            className="w-36 h-36 md:w-64 md:h-64 rounded-full object-cover border-4 border-olive-dark"
          />
        </div>

        <p className="text-olive-dark text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          My Jar Salads and Irresistible Dressings recipes have always been a hit online.
          I decided to gather the 60 best recipes in one place and share this knowledge
          with you too.
        </p>
      </div>
    </section>
  );
};

export default NutriSection;
