import React from "react";
import Image from "next/image";
import { ProjectData } from "lib/types";

interface props {
  project: ProjectData;
}

const ProjectCard = ({ project }: props) => {
  return (
    <div className="relative">
      <h2>{project.name}</h2>
      <div className="relative overflow-hidden rounded-lg border">
        <Image
          alt={project.name}
          src={project.image}
          quality={100}
          placeholder="blur"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
