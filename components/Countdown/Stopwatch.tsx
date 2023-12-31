import { Rank } from "@/components/Countdown";
import { Container } from "@/universal";

export const Stopwatch = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="">
          <div className="border-8 border-green-500 rounded-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-2">246 days</h1>
            <h3 className="text-xl font-medium">07:35:23</h3>
          </div>
          <button>Restart</button>
        </div>
        <Rank />
      </div>
    </Container>
  );
};
