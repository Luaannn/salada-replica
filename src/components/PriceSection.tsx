import { Check } from "lucide-react";

const includes = [
  { quantity: "+ 60", text: "RECEITAS DE SALADAS" },
  { quantity: "+", text: "RECEITAS DE MOLHOS" },
  { quantity: "+ 20", text: "RECEITAS DE SMOOTHIES" },
  { quantity: "+ 5", text: "RECEITAS DE SHOTS MATINAIS" },
  { quantity: "+ 15", text: "RECEITAS DE ÁGUAS SABORIZADAS" },
];

const PriceSection = () => {
  return (
    <section id="price" className="py-6 md:py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-cream rounded-2xl md:rounded-3xl p-5 md:p-10">
          {/* Mobile: Price first, then features | Desktop: side by side */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <ul className="space-y-2 md:space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-cta-green flex-shrink-0" />
                    <span className="text-olive-dark text-sm md:text-base">
                      <span className="font-bold">{item.quantity}</span> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-olive-dark text-xl md:text-3xl mb-2">
                De <span className="line-through text-muted-foreground">R$129,00</span>…
              </h3>
              <p className="text-olive-dark text-base md:text-lg mb-1">por 6x de R$5,66</p>
              <p className="text-olive-dark text-lg md:text-xl font-bold mb-4 md:mb-6">ou R$29,90 à vista</p>

              <a 
                href="https://conhecimentos.space/checkout" 
                className="cta-button inline-block w-full max-w-xs"
              >
                COMPRAR AGORA!
              </a>

              <p className="text-cta-green font-bold text-xs md:text-sm mt-3 md:mt-4 animate-pulse">
                **OFERTA EXPIRA HOJE**
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
