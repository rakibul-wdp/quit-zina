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
          <div>
            {homeRank.map((rank) => (
              <div key={rank.id}>
                <h1>{rank.rank}</h1>
                <hr />
                <p>{rank.reach}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-500 w-[50%]">Animation right to left</div>
      </div>
    </Container>
  );
};
