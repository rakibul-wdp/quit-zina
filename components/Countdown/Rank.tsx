import { homeRank } from "@/public/data";

export const Rank = () => {
  return (
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
  );
};
