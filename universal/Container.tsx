import { IChildren } from "@/interface";

export const Container = ({ children }: IChildren) => {
  return (
    <main className="px-10 sm:px-20 md:px-24 lg:px-14 max-w-xl">
      {children}
    </main>
  );
};
