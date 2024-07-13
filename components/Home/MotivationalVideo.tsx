"use client";

import { MotivationalVideoThumbnail } from "@/public/assets/images";
import { Container } from "@/universal";
import Image from "next/image";
import { useState } from "react";

export const MotivationalVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Container>
      <div className="mt-24 flex items-center justify-center">
        {showVideo ? (
          <iframe
            width="90%"
            height="600px"
            src="https://www.youtube.com/embed/M0dAK6IQsSk?si=Ta-0GA6MBZPiTM8k&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        ) : (
          <div onClick={() => setShowVideo(true)} style={{ cursor: "pointer" }}>
            <Image
              src={MotivationalVideoThumbnail}
              alt="Thumbnail"
              width={500}
              height={600}
              className="w-full"
            />
          </div>
        )}
      </div>
    </Container>
  );
};
