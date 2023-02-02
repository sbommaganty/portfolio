import React from "react";
import Image from "next/image";
import {
  CpuChipIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

import { ProjectData } from "lib/types";

interface props {
  project: ProjectData;
}

const ProjectCard = ({ project }: props) => {
  return (
    <div className="relative flex">
      {/* medium <= screen */}
      <a
        title={project.name}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden w-full overflow-hidden rounded-lg border dark:border-gray-700 md:ml-24 md:block lg:ml-56"
      >
        <div className="aspect-h-11 aspect-w-16 blur hover:blur-none">
          <Image
            alt={project.name}
            src={project.image}
            quality={100}
            placeholder="blur"
            className="h-full w-full"
          />
        </div>
      </a>
      {/* small screen */}
      <div className="absolute inset-0 overflow-hidden rounded-lg md:hidden">
        <Image
          alt={project.name}
          src={project.image}
          quality={100}
          placeholder="blur"
          className="h-full w-full object-cover blur-lg"
        />
      </div>
      <div className="z-10 m-auto max-h-max w-full space-y-4 rounded-lg bg-gray-900/80 px-4 py-6 md:absolute md:inset-y-0 md:w-96 md:px-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold leading-5 text-white">
            {project.name}
          </h2>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <span className="sr-only">{project.name}</span>
            <ArrowTopRightOnSquareIcon className="h-6 w-6" aria-hidden={true} />
          </a>
        </div>
        <div className="space-y-2">
          {project.description.map((v, i) => (
            <div key={i} className="flex space-x-2">
              <CpuChipIcon className="h-5 w-5 text-white" aria-hidden="true" />
              <p className="flex-1 leading-tight tracking-wide text-white">
                {v}
              </p>
            </div>
          ))}
        </div>
        <div className="-m-1 flex flex-wrap gap-1">
          {project.technologies.map((v, i) => (
            <span
              key={i}
              className="m-1 font-mono text-sm font-semibold leading-none text-gray-200"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
