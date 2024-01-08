import { IChildren } from "@/interface";

export const Container = ({ children, position }: IChildren) => {
  return (
    <main
      className={`max-w-7xl mx-auto px-5 mb-[69px] ${
        position === "navbar" ? "relative" : ""
      }`}
    >
      {children}
    </main>
  );
};
