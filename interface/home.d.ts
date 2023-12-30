import { StaticImageData } from "next/image";

export interface IHomeRank {
  id: number;
  rank: string;
  reach: string;
}

export interface IMotivationalVideo {
  id: number;
  url: string;
}

export interface IFeatureProducts {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: StaticImageData;
  description: string;
  category: string;
  featured: boolean;
}
