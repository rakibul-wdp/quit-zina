import { importantSpeeches } from "@/public/data";
import { Container } from "@/universal";

export const ImportantSpeech = () => {
  return (
    <Container>
      <div className="mt-24 flex items-start justify-between gap-10">
        {importantSpeeches.map((speech) => (
          <div className="basis-1/3" key={speech.id}>
            <h2 className="text-2xl font-semibold mb-3 text-center">
              {speech.title}
            </h2>
            <p className="text-justify">{speech.details}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
