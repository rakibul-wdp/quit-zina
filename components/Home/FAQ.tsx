import { FAQs } from "@/public/data";
import { Container } from "@/universal";

export const FAQ = () => {
  return (
    <Container>
      <div className="mt-24 flex items-center justify-between">
        <h1 className="text-3xl font-bold basis-1/3">
          Frequently Ask Questions...!!!
        </h1>
        <div className="basis-2/3 flex flex-col items-center justify-between gap-5">
          {FAQs.map((faq) => (
            <div key={faq.id}>
              <h3 className="text-2xl font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
