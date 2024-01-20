import { Container } from "@/universal";

export const Motivation = () => {
  return (
    <Container>
      <div className="mt-24 flex items-center justify-between gap-5">
        <div className="p-5 w-[50%]">
          <h1 className="text-3xl leading-10 tracking-wide font-semibold mb-3">
            How people overcome and <br /> quit their addiction...!!!
          </h1>
          <p>
            People share their addiction quit journey. How they quit and how can
            other people quit. Discuss about stage of journey and experience.
            It&apos;s help and motivate others to achieve their goal.
          </p>
          <button className="mt-28 bg-primary text-white font-semibold px-5 py-2 rounded-full">
            Let&apos;s see
          </button>
        </div>
        <div className="w-[50%] border px-10 py-5 rounded-xl">
          <div className="mb-3">
            <h3 className="text-lg font-medium">John Doe</h3>
            <p className="text-sm">Jan 01, 2024</p>
          </div>
          <div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              aliquam voluptate quas temporibus illum. Debitis adipisci iusto
              fugiat iure ea culpa eius, recusandae perferendis iste, quis
              animi. Recusandae, corporis! Molestiae blanditiis delectus
              voluptatibus officia modi totam?
            </p>
          </div>
          <ul className="flex items-center gap-10 mt-5">
            <li>helpful</li>
            <li>save</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
