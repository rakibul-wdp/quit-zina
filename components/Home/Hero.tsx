import { homeRank } from "@/public/data";
import { Container } from "@/universal";
import Link from "next/link";
import { HeroMarquee } from ".";
import { Clock } from "../Countdown";

export const Hero = () => {
  return (
    <Container>
      <div className="mt-24 flex items-center justify-between">
        <div className="w-[50%] flex items-center justify-between p-5">
          <div className="flex flex-col items-center justify-center gap-10">
            <Clock
              days={246}
              hrs={14}
              mins={25}
              secs={35}
              elapsedTime={86400 * 650}
            />
            <Link
              href="/countdown"
              className="bg-primary text-white font-semibold px-5 py-2 rounded-full"
            >
              Start
            </Link>
          </div>
          <div className="pr-3">
            {homeRank.map((rank) => (
              <div
                className={`bg-white flex flex-col items-center justify-center px-10 py-2 rounded-lg ${
                  rank.id !== 5 && "mb-3"
                } ${rank.id === 3 && "border-2 border-green-500"}`}
                key={rank.id}
              >
                <h1
                  className={`text-xl font-medium ${
                    rank.id === 3 && "text-green-500"
                  }`}
                >
                  {rank.rank}
                </h1>
                <hr className="w-full my-[2px]" />
                <p className="text-sm font-medium">{rank.reach}</p>
              </div>
            ))}
          </div>
        </div>
        <HeroMarquee />
      </div>
    </Container>
  );
};
