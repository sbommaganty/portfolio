import Link from "next/link";
import SEO from "components/SEO";
import { projectsNavigation, worksNavigation } from "config";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
      <SEO />
      <div className="space-y-3">
        <p className="text-xl text-gray-600 dark:text-gray-300 sm:text-2xl sm:tracking-wide">
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
      <div className="mt-8 flex gap-x-4 sm:justify-center">
        <Link
          href={projectsNavigation.href}
          className="group inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 dark:bg-white dark:text-indigo-600 dark:ring-white dark:hover:bg-indigo-700 dark:hover:text-white dark:hover:ring-indigo-700"
        >
          {projectsNavigation.name}{" "}
          <span
            className="text-indigo-200 dark:text-indigo-600 dark:group-hover:text-white"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </Link>
        <Link
          href={worksNavigation.href}
          className="group inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-300 hover:ring-gray-400 dark:text-gray-300 dark:ring-gray-300 dark:hover:text-white dark:hover:ring-white"
        >
          {worksNavigation.name}{" "}
          <span
            className="text-gray-900 dark:text-gray-300 dark:group-hover:text-white"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
