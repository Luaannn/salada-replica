import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo minhas receitas?",
    answer: "Assim que o pagamento for confirmado, você recebe acesso imediato pelo WhatsApp e por e-mail com todas as 60 receitas de saladas, os molhos irresistíveis e todos os bônus. Tudo disponível para você baixar e começar a usar no mesmo instante. Sem espera, sem burocracia. Qualquer dúvida, é só entrar em contato pelo e-mail: contato@nutriliacastro.site que a gente te ajuda rapidinho."
  },
  {
    question: "O curso tem garantia?",
    answer: "Sim! Você tem 7 dias de garantia incondicional para testar as receitas. Se não gostar por qualquer motivo, é só pedir o reembolso e devolvemos 100% do valor investido. Simples assim."
  },
  {
    question: "Preciso de potes especiais?",
    answer: "Não precisa! Qualquer pote que você já tem em casa funciona perfeitamente. Pode ser de plástico, de vidro, grande ou pequeno. O importante é que feche bem para manter a salada fresca. Nada de gastar dinheiro extra com equipamento."
  },
  {
    question: "As receitas incluem os molhos?",
    answer: "Com certeza! Todas as 60 receitas já vêm com molhos específicos e deliciosos. São molhos caseiros, fáceis de fazer e que transformam completamente o sabor da salada. Você nunca mais vai precisar comprar aqueles molhos industrializados caros e cheios de conservantes."
  },
  {
    question: "Quanto tempo dura a salada no pote na geladeira?",
    answer: "Quando montada corretamente seguindo o método das camadas que eu ensino, a salada dura de 5 a 7 dias fresquinha na geladeira. Isso significa que você prepara tudo no domingo e tem almoço ou jantar saudável pronto a semana toda. Zero desperdício, zero trabalho diário."
  },
  {
    question: "Posso montar a salada toda de uma vez no fim de semana para a semana inteira?",
    answer: "Sim, esse é exatamente o método que eu ensino! A maioria das mulheres prepara no sábado ou domingo as saladas da semana inteira em cerca de 30 minutos. É muito mais prático do que ter que picar, lavar e montar salada todo dia. Você ganha tempo, economiza energia e nunca fica sem opção saudável na correria."
  },
  {
    question: "Posso vender saladas no pote? quanto posso cobrar?",
    answer: "Pode sim! Muitas alunas usam as receitas para vender e gerar renda extra. Dependendo da sua região e dos ingredientes, saladas no pote são vendidas entre R$ 11 e R$ 16 por pote (às vezes até mais, dependendo do tamanho e incrementos). É uma forma inteligente de transformar conhecimento em lucro."
  },
  {
    question: "As receitas são fáceis de fazer?",
    answer: "Super fáceis! Todas as receitas têm instruções claras e passo a passo simples. Não precisa ser expert na cozinha. Se você sabe picar, misturar e temperar, você consegue fazer. As receitas foram pensadas justamente para quem tem rotina corrida e não quer complicação."
  },
  {
    question: "Os ingredientes são fáceis de encontrar?",
    answer: "Sim! Todas as receitas usam ingredientes simples e acessíveis que você encontra em qualquer supermercado, feira ou sacolão. Nada de ingredientes exóticos ou caros que você nunca ouviu falar. Comida de verdade, com ingredientes de verdade."
  },
  {
    question: "Preciso ter balança ou utensílios específicos?",
    answer: "Não precisa de nada disso. Você só precisa de: Potes (os que você já tem em casa), Colheres, Uma faca e Uma tábua de corte."
  },
];

const FAQSection = () => {
  return (
    <section className="py-6 md:py-12 bg-olive-light">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          <div className="h-px bg-olive-dark flex-1 max-w-16 md:max-w-32" />
          <h1 className="text-olive-dark text-lg md:text-3xl font-bold text-center whitespace-nowrap">
            DÚVIDAS FREQUENTES
          </h1>
          <div className="h-px bg-olive-dark flex-1 max-w-16 md:max-w-32" />
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-cream rounded-xl md:rounded-2xl px-4 md:px-6 border-none"
            >
              <AccordionTrigger className="text-olive-dark text-left font-medium hover:no-underline py-3 md:py-4 text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-3 md:pb-4 text-xs md:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
