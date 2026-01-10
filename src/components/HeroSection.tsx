const HeroSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container max-w-4xl mx-auto flex flex-col items-center">
        <img 
          src="/images/logo.webp" 
          alt="Saladas no Pote + Molhos" 
          className="w-full max-w-xl mb-6"
        />
        <img 
          src="/images/hero.webp" 
          alt="60 Receitas para você fazer na sua casa" 
          className="w-full max-w-lg mb-8"
        />
        <a 
          href="#price" 
          className="cta-button w-full max-w-md text-center"
        >
          QUERO AS RECEITAS!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
