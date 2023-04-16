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

export type ExperienceData =
  | {
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
      isWorkingNow: false;
      image: StaticImageData;
      description: string[];
      technologies: {
        name: string;
        href: string;
      }[];
    }
  | {
      company: {
        name: string;
        href: string;
      };
      position: string;
      location: string;
      duration: {
        from: string;
      };
      isWorkingNow: true;
      image: StaticImageData;
      description: string[];
      technologies: {
        name: string;
        href: string;
      }[];
    };
