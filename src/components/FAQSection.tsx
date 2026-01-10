import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I receive my recipes?",
    answer: "As soon as your payment is confirmed, you get immediate access via WhatsApp and email with all 60 salad recipes, irresistible dressings, and all bonuses. Everything is available for you to download and start using right away. No waiting, no hassle. Any questions, just contact us at: contact@nutriliacastro.site and we'll help you quickly."
  },
  {
    question: "Does the course have a guarantee?",
    answer: "Yes! You have a 7-day unconditional guarantee to test the recipes. If you don't like it for any reason, just request a refund and we'll return 100% of the amount invested. Simple as that."
  },
  {
    question: "Do I need special jars?",
    answer: "No need! Any jar you already have at home works perfectly. It can be plastic, glass, large or small. The important thing is that it closes well to keep the salad fresh. No need to spend extra money on equipment."
  },
  {
    question: "Do the recipes include dressings?",
    answer: "Absolutely! All 60 recipes come with specific and delicious dressings. They are homemade dressings, easy to make and that completely transform the flavor of the salad. You'll never need to buy those expensive store-bought dressings full of preservatives again."
  },
  {
    question: "How long does the jar salad last in the fridge?",
    answer: "When assembled correctly following the layering method I teach, the salad lasts 5 to 7 days fresh in the refrigerator. This means you prepare everything on Sunday and have healthy lunch or dinner ready all week. Zero waste, zero daily work."
  },
  {
    question: "Can I prepare salads all at once on the weekend for the whole week?",
    answer: "Yes, that's exactly the method I teach! Most people prepare their salads for the entire week on Saturday or Sunday in about 30 minutes. It's much more practical than having to chop, wash and assemble salad every day. You save time, energy and never run out of healthy options during busy times."
  },
  {
    question: "Can I sell jar salads? How much can I charge?",
    answer: "Yes you can! Many students use the recipes to sell and generate extra income. Depending on your region and ingredients, jar salads are sold between $5 and $12 per jar (sometimes even more, depending on size and add-ons). It's a smart way to turn knowledge into profit."
  },
  {
    question: "Are the recipes easy to make?",
    answer: "Super easy! All recipes have clear instructions and simple step-by-step guides. You don't need to be an expert in the kitchen. If you know how to chop, mix and season, you can do it. The recipes were designed precisely for those who have a busy routine and don't want complications."
  },
  {
    question: "Are the ingredients easy to find?",
    answer: "Yes! All recipes use simple and accessible ingredients that you can find at any supermarket or grocery store. No exotic or expensive ingredients you've never heard of. Real food, with real ingredients."
  },
  {
    question: "Do I need a scale or specific utensils?",
    answer: "You don't need any of that. You only need: Jars (the ones you already have at home), Spoons, A knife and A cutting board."
  },
];

const FAQSection = () => {
  return (
    <section className="py-6 md:py-12 bg-olive-light">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          <div className="h-px bg-olive-dark flex-1 max-w-16 md:max-w-32" />
          <h1 className="text-olive-dark text-lg md:text-3xl font-bold text-center whitespace-nowrap">
            FREQUENTLY ASKED QUESTIONS
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
