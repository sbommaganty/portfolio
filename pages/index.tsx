import Link from "next/link";
import SEO from "components/SEO";
import { projectsNavigation, worksNavigation } from "config";

export default function Home() {
  return (
    <div>
      <SEO />
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
          Ariful Alam
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
          Hello, I&apos;m Ariful Alam.
        </p>
        <div className="mt-8 flex gap-x-4 sm:justify-center">
          <Link
            href={projectsNavigation.href}
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            {projectsNavigation.name}{" "}
            <span className="text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </Link>
          <Link
            href={worksNavigation.name}
            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            {worksNavigation.name}{" "}
            <span className="text-gray-400" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
