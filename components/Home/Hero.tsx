import { homeRank } from "@/public/data";
import { Container } from "@/universal";

export const Hero = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="bg-gray-300 w-[50%] flex items-center justify-between p-5">
          <div className="border-8 border-green-500 rounded-full w-[50%] h-72 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-2">246 days</h1>
            <h3 className="text-xl font-medium">07:35:23</h3>
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
        <div className="bg-gray-500 w-[50%] flex justify-start overflow-hidden">
          <h1 className="marquee">hello world One</h1>
        </div>
      </div>
    </Container>
  );
};
