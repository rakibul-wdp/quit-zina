import { Clock, Rank } from "@/components/Countdown";
import useStopwatch from "@/hooks/useStopwatch";
import { Container } from "@/universal";

export const Stopwatch = () => {
  const { days, hrs, mins, secs, progressTime, start, restart } =
    useStopwatch();

  return (
    <Container>
      <div className="w-[10%] mx-auto">
        <div className="flex items-center gap-5">
          <p>{days}</p>
          <p>{hrs}</p>
          <p>{mins}</p>
          <p>{secs}</p>
        </div>
        <div className="flex items-center gap-5">
          <button onClick={start}>Start</button>
          <button onClick={restart}>Restart</button>
        </div>
      </div>

      <div className="mt-14 flex items-center justify-between">
        <Clock
          days={days}
          hrs={hrs}
          mins={mins}
          secs={secs}
          elapsedTime={progressTime}
        />
        <Rank />
      </div>
    </Container>
  );
};
