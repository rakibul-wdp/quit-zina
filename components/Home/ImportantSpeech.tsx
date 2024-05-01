import { importantSpeeches } from "@/public/data";
import { Container } from "@/universal";

export const ImportantSpeech = () => {
  return (
    <Container>
      <div className="mt-24 flex items-start justify-between gap-10">
        {importantSpeeches.map((speech) => (
          <div
            // className="basis-1/3 border border-primary rounded p-4 h-[520px]"
            className="basis-1/3 p-4"
            key={speech.id}
          >
            <h2 className="text-2xl font-semibold mb-3 text-center">
              {speech.title}
            </h2>
            <p className="text-justify">
              {speech.id === 1 && speech.details}
              {speech.id === 2 && speech.details.slice(0, 405)}
              {speech.id === 3 && speech.details.slice(0, 161)}
            </p>
            <br />
            <p className="text-justify">
              {speech.id === 2 && speech.details.slice(412)}
              {speech.id === 3 && speech.details.slice(168, 505)}
            </p>
            <br />
            <p className="text-justify">
              {speech.id === 3 && speech.details.slice(512)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};
