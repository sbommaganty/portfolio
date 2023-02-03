import { Fragment } from "react";
import Image from "next/image";

import { ExperienceData } from "lib/types";

interface props {
  experience: ExperienceData;
  isLastTime: boolean;
}

const ExperienceItem = ({ experience, isLastTime }: props) => {
  return (
    <li className="pb-8 last:pb-0">
      <div className="relative">
        {!isLastTime && (
          <span
            className="absolute top-10 left-5 ml-px h-full w-0.5 bg-gray-700 dark:bg-white"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start space-x-3">
          <Fragment>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title={experience.company.name}
              href={experience.company.href}
              className="overflow-hidden rounded-md border-2 border-gray-700 dark:border-white"
            >
              <Image
                alt={experience.company.name}
                src={experience.image}
                placeholder="blur"
                className="h-10 w-10"
              />
            </a>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                <div>
                  <div className="text-base">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title={experience.company.name}
                      href={experience.company.href}
                      className="font-semibold text-gray-900 hover:underline dark:text-white"
                    >
                      {experience.company.name}
                    </a>
                  </div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 sm:mt-0.5">
                    {experience.position}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end">
                  <p className="text-sm text-gray-900 dark:text-gray-200">
                    {experience.location}
                  </p>
                  <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                    {`${experience.duration.from} - ${
                      experience.isWorkingNow
                        ? "Present"
                        : experience.duration.to
                    }`}
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                {experience.description.map((v, i) => (
                  <div key={i} className="flex space-x-2 text-sm">
                    <span className="flex h-4 shrink-0 items-center justify-center">
                      <span
                        className="h-0.5 w-1.5 rounded-full bg-gray-700 dark:bg-gray-200"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="flex-1 leading-4 tracking-wide text-gray-900 dark:text-gray-200">
                      {v}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-1">
                {experience.technologies.map((technology) => (
                  <Fragment key={technology.name}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title={technology.name}
                      href={technology.href}
                      className="relative inline-flex items-center rounded-full border border-gray-700 px-2 py-0.5 text-sm dark:border-gray-200"
                    >
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-200 sm:text-sm">
                        {technology.name}
                      </span>
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
