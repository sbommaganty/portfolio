import { Fragment } from "react";
import Image from "next/image";

import { ExperienceData } from "lib/types";

interface props {
  experience: ExperienceData;
  isLastTime: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ExperienceItem = ({ experience, isLastTime }: props) => {
  return (
    <li>
      <div className="relative pb-8">
        {!isLastTime && (
          <span
            className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start space-x-3">
          <Fragment>
            <Image
              alt={experience.company.name}
              src={experience.image}
              quality={100}
              placeholder="blur"
              className="flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-white"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm">
                    <a
                      href={experience.company.href}
                      className="font-medium text-gray-900"
                    >
                      {experience.company.name}
                    </a>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    {experience.position}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm font-medium text-gray-900">
                    {experience.location}
                  </p>
                  <p className="mt-0.5 text-sm text-gray-500">
                    {`${experience.duration.from} - ${
                      experience.isWorkingNow
                        ? "Present"
                        : experience.duration.to
                    }`}
                  </p>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <p>{experience.description}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {experience.technologies.map((technology) => (
                  <Fragment key={technology.name}>
                    <a
                      href={technology.href}
                      className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                    >
                      <span className="absolute flex shrink-0 items-center justify-center">
                        <span
                          className={classNames(
                            technology.color,
                            "h-1.5 w-1.5 rounded-full"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="ml-3.5 font-medium text-gray-900">
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
