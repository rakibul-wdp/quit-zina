import { Container } from "@/universal";

export const ShowPost = () => {
  return (
    <Container>
      <div className="mt-5 w-[50%] mx-auto">
        <div className="mb-3">
          <h3 className="text-lg font-medium">John Doe</h3>
          <p className="text-sm">Jan 01, 2024</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            aliquam voluptate quas temporibus illum. Debitis adipisci iusto
            fugiat iure ea culpa eius, recusandae perferendis iste, quis animi.
            Recusandae, corporis! Molestiae blanditiis delectus voluptatibus
            officia modi totam?
          </p>
        </div>
        <ul className="flex items-center gap-10 mt-5">
          <li>helpful</li>
          <li>save</li>
        </ul>
      </div>
    </Container>
  );
};
