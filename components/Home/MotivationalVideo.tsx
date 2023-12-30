import { motivationVideo } from "@/public/data";
import { Container } from "@/universal";

export const MotivationalVideo = () => {
  return (
    <Container>
      <div className="mt-24 text-2xl font-bold text-center mb-3">
        Motivational Video
      </div>

      <div className="grid grid-cols-2 gap-7">
        {motivationVideo.map((video) => (
          <iframe
            width="100%"
            height="315"
            src={video.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            key={video.id}
          ></iframe>
        ))}
      </div>
    </Container>
  );
};
