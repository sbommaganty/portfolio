import { StaticImageData } from "next/image";

export type ProjectData = {
  name: string;
  url: string;
  description: string[];
  technologies: string[];
  enabled: boolean;
  isProfessional: boolean;
  image: StaticImageData;
};

export type ExperienceData = {
  company: {
    name: string;
    href: string;
  };
  position: string;
  location: string;
  duration: {
    from: string;
    to: string;
  };
  isWorkingNow: boolean;
  image: StaticImageData;
  description: string[];
  technologies: {
    name: string;
    href: string;
    color: string;
  }[];
};
