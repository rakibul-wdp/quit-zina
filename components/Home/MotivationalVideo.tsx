import { Container } from "@/universal";

export const MotivationalVideo = () => {
  return (
    <Container>
      <div className="mt-24 flex items-center justify-center">
        <iframe
          width="90%"
          height="600px"
          src="https://www.youtube.com/embed/M0dAK6IQsSk?si=Ta-0GA6MBZPiTM8k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
    </Container>
  );
};
