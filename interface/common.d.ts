import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface INavLinks {
  id: number;
  title: string;
  path: string;
}
