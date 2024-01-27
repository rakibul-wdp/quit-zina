import { IChildren } from "@/interface";

export const Container = ({ children }: IChildren) => {
  return <main className="max-w-7xl mx-auto px-5">{children}</main>;
};
