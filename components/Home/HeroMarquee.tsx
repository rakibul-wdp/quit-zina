import { marquee } from "@/public/data";

export const HeroMarquee = () => {
  return (
    <div className="marquee w-[50%] h-[200px] overflow-hidden relative mx-auto">
      <div className="marquee--inner block w-[200%] absolute">
        <div className="float-left w-[50%]">
          {marquee.slice(0, 23).map((change) => (
            <div
              className="w-[35%] bg-gray-400 text-center rounded inline-block p-5 mx-2 float-left transition-all duration-200 ease-out hover:scale-110 hover:opacity-50 hover:cursor-pointer"
              key={change.id}
            >
              <div>{change.time}</div>
              <h2>
                {change.title}-{change.id}
              </h2>
              <p>{change.details}</p>
            </div>
          ))}
        </div>
        <div className="float-left w-[50%]">
          {marquee.slice(-23).map((change) => (
            <div
              className="w-[35%] bg-gray-400 text-center rounded inline-block p-5 mx-2 float-left transition-all duration-200 ease-out hover:scale-110 hover:opacity-50 hover:cursor-pointer"
              key={change.id}
            >
              <div>{change.time}</div>
              <h2>
                {change.title}-{change.id}
              </h2>
              <p>{change.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
