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

export interface IImportantSpeeches {
  id: number;
  title: string;
  details: string;
}

export interface IFAQs {
  id: number;
  question: string;
  answer: string;
}

export interface IMarquee {
  id: number;
  time: string;
  title: string;
  details: string;
}
