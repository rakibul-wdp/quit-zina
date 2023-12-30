import { IFeatureProducts, IHomeRank, IMotivationalVideo } from "@/interface";
import { Ator } from "../assets/images";

export const homeRank: IHomeRank[] = [
  {
    id: 1,
    rank: "Conqueror",
    reach: "Reach 150 days",
  },
  {
    id: 2,
    rank: "Marshal",
    reach: "Reach 180 days",
  },
  {
    id: 3,
    rank: "Field Marshal",
    reach: "Reach 240 days",
  },
  {
    id: 4,
    rank: "Grand Marshal",
    reach: "Reach 300 days",
  },
  {
    id: 5,
    rank: "High Overlord",
    reach: "Reach 365 days",
  },
];

export const motivationVideo: IMotivationalVideo[] = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/Tn6-PIqc4UM?si=GMWxOg_huCNx6gyL",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/UBUNrFtufWo?si=vYcdhQjB_zHdm0qD",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/zQnBQ4tB3ZA?si=VK7k75tO-y4qcDfw",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/mr15Xzb1Ook?si=X8deFQ_NGMVkOjNh",
  },
];

export const featureProducts: IFeatureProducts[] = [
  {
    id: 1,
    name: "Kasturi Royal",
    brand: "example",
    price: 350,
    image: Ator,
    description:
      "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "ator",
    featured: true,
  },
  {
    id: 2,
    name: "Kasturi Royal",
    brand: "example",
    price: 350,
    image: Ator,
    description:
      "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "ator",
    featured: true,
  },
  {
    id: 3,
    name: "Kasturi Royal",
    brand: "example",
    price: 350,
    image: Ator,
    description:
      "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "ator",
    featured: true,
  },
];
