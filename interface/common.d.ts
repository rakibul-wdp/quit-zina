import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
  position?: string;
}

export interface INavLinks {
  id: number;
  title: string;
  path: string;
}
