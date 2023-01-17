import Chip from "components/Chip";
import SEO from "components/SEO";
import { experienceNavigation, MY_EMAIL, projectsNavigation } from "config";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl py-12 sm:py-28 md:py-40 lg:py-64">
      <SEO />
      <div className="space-y-10 sm:space-y-14">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-2xl tracking-tighter text-gray-600 dark:text-gray-200 sm:text-2xl sm:tracking-normal">
            Hello, World! My name is
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Ariful Alam.
          </h1>
          <p className="text-3xl text-gray-500 dark:text-gray-400 sm:text-4xl">
            I love to code{" "}
            <span className="font-bold text-gray-700 dark:text-white">
              because it is an usable art.
            </span>
          </p>
        </div>
        <div className="space-y-6 text-xl tracking-tight text-gray-600 dark:text-gray-300 sm:space-y-3 sm:tracking-normal">
          <p className="italic">
            As a{" "}
            <span className="font-bold text-gray-700 dark:text-white">
              Software Engineer,
            </span>{" "}
            I constantly strive to make things that people can use, touch,
            interact, and work with. That is an amazing feeling!
          </p>
          <p className="leading-10 sm:leading-[3rem]">
            View my{" "}
            <Chip
              type="link"
              label={projectsNavigation.name}
              href={projectsNavigation.href}
            />
            {", "}
            <Chip
              type="link"
              label={experienceNavigation.name}
              href={experienceNavigation.href}
            />
            {", "} or email me at{" "}
            <Chip type="link" label={MY_EMAIL} href={"mailto:" + MY_EMAIL} />.
          </p>
        </div>
      </div>
    </div>
  );
}
