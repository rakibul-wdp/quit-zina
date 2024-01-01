import { Container } from "@/universal";

export const History = () => {
  return (
    <Container>
      <div className="mt-24 mb-3 text-2xl font-semibold text-center">
        History
      </div>
      <div className="flex items-center justify-between border rounded-lg px-5 py-3">
        <h4>Stressful day</h4>
        <h4>15 days</h4>
        <h4>07 Feb 2020 18:54 --&gt; 23 Feb 2020 15:35</h4>
      </div>
    </Container>
  );
};
