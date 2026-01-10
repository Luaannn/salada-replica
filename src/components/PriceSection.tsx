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
        <div className="salad-card overflow-hidden">
          {/* Product Image */}
          <img 
            src="/images/product.webp" 
            alt="Ebook Saladas Saudáveis" 
            className="w-full aspect-video object-cover"
          />
          
          {/* Content */}
          <div className="p-4 md:p-6">
            {/* Title */}
            <h3 className="text-olive-dark font-bold text-xl md:text-2xl text-center mb-4">
              EBOOK SALADAS SAUDÁVEIS
            </h3>

            {/* Bullets */}
            <ul className="space-y-2 mb-6">
              {includes.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cta-green flex-shrink-0" />
                  <span className="text-olive-dark text-sm">
                    <span className="font-bold">{item.quantity}</span> {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="text-center mb-4">
              <p className="text-olive-dark text-lg">
                De <span className="line-through text-muted-foreground">R$129,00</span>…
              </p>
              <p className="text-olive-dark text-sm">por 6x de R$5,66</p>
              <p className="text-olive-dark text-xl font-bold">ou R$29,90 à vista</p>
            </div>

            {/* CTA Button */}
            <a 
              href="https://conhecimentos.space/checkout" 
              className="cta-button block w-full text-center"
            >
              COMPRAR AGORA!
            </a>

            {/* Urgency */}
            <p className="text-cta-green font-bold text-xs text-center mt-4 animate-pulse">
              **OFERTA EXPIRA HOJE**
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
