import Image from "next/image";

import avatar from "public/static/avatar.jpg";
import SEO from "components/SEO";

export default function About() {
  return (
    <>
      <SEO siteTitle="About – Lee Robinson" />
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          About Me
        </h1>
        <h2 className="mb-4 text-xl font-bold tracking-tight text-black md:text-3xl">
          Ariful Alam
        </h2>
        <div className="">
          <Image
            alt="Ariful Alam"
            width={400}
            quality={100}
            src={avatar}
            className="rounded-md"
          />
        </div>
      </div>
    </>
  );
}
