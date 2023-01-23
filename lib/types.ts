import { StaticImageData } from "next/image";

export type ProjectData = {
  name: string;
  url: string;
  description: string[];
  technologies: string[];
  enabled: boolean;
  image: StaticImageData;
};
