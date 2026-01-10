import { Check } from "lucide-react";

const pains = [
  "Preguiça de lavar e cortar salada todo dia.",
  "Joga salada fora antes de conseguir usar.",
  "Deixa de comer salada alguns dias da semana.",
  "Cansou de alface e tomate.",
  "Já come saudável, mas falha na salada.",
];

const PainSection = () => {
  return (
    <section className="py-8 md:py-12 bg-olive-light">
      <div className="container max-w-4xl mx-auto">
        <h3 className="text-olive-dark text-xl text-center mb-6">
          ISSO ACONTECE <b>COM VOCÊ?</b>
        </h3>

        <ul className="space-y-3 mb-8 max-w-lg mx-auto">
          {pains.map((pain, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-cta-green flex-shrink-0 mt-1" />
              <span className="text-olive-dark">{pain}</span>
            </li>
          ))}
        </ul>

        <h2 className="section-title mb-6">
          Então você precisa disso:
        </h2>

        <h3 className="text-olive-dark text-xl md:text-2xl font-bold text-center mb-8">
          SALADAS NO POTE + MOLHOS<br />
          IRRESISTÍVEIS
        </h3>

        <div className="flex justify-center">
          <img 
            src="/images/product.webp" 
            alt="Produto completo" 
            className="w-full max-w-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PainSection;
