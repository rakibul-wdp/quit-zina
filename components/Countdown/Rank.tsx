import { homeRank } from "@/public/data";

export const Rank = () => {
  return (
    <div className="">
      {homeRank.map((rank) => (
        <div
          className={`bg-white flex flex-col items-center justify-center px-20 py-2 rounded-lg ${
            rank.id !== 5 && "mb-3"
          } ${rank.id === 3 && "border-2 border-green-500"}`}
          key={rank.id}
        >
          <h1
            className={`text-2xl font-semibold ${
              rank.id === 3 && "text-green-500"
            }`}
          >
            {rank.rank}
          </h1>
          <hr className="w-full my-[2px]" />
          <p className="text-lg font-medium">{rank.reach}</p>
        </div>
      ))}
    </div>
  );
};
