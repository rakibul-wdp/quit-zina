import { MotivationalPost } from "@/public/assets/images";
import { Container } from "@/universal";
import Image from "next/image";

export const Motivation = () => {
  return (
    <Container>
      <div className="mt-24 flex justify-between">
        <div className="p-5 bg-gray-100 w-[50%]">
          <h1 className="text-3xl font-bold">
            How people overcome and <br /> quit their addiction...!!!
          </h1>
          <button className="mt-28 bg-red-400 p-3">Let&apos;s see</button>
        </div>
        <div className="w-[50%]">
          <Image src={MotivationalPost} alt="motivation post" />
        </div>
      </div>
    </Container>
  );
};
