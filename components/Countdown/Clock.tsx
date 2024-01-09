import { ITime } from "@/interface";

export const Clock = ({ days, hrs, mins, secs, elapsedTime }: ITime) => {
  const percentage =
    elapsedTime / 1000 <= 86400
      ? elapsedTime / 1000
      : (elapsedTime / 1000) % 86400;
  const circleWidth = 200;
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 86400;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="fill-none stroke-gray-100"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="fill-none stroke-primary"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text x="50%" y="45%" dy="0.3em" textAnchor="middle">
          <tspan className="text-3xl font-bold">{days} days</tspan>
          <tspan x="50%" dy="1.8em" className="text-lg">
            {hrs}:{mins}:{secs}
          </tspan>
        </text>
      </svg>
    </div>
  );
};
