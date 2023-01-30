import Link from "next/link";
import SEO from "components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        siteTitle="404"
        description="I'm guessing you spelled something wrong. Can you double check that URL?"
      />
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          451 – Unavailable For Legal Reasons
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. I&apos;m guessing you spelled something wrong. Can
          you double check that URL?
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
        >
          Return Home{" "}
          <span className="text-indigo-200" aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
    </>
  );
}
