import { Container } from "@/universal";

export const WritePost = () => {
  return (
    <Container>
      <div className="mt-10 w-[50%] mx-auto flex items-center justify-between border px-5 py-3">
        <input type="text" name="" id="" className="border" />
        <input type="submit" value="Post" />
      </div>
    </Container>
  );
};
