import Image from "next/image";

import avatar from "public/static/avatar.jpg";
import SEO from "components/SEO";
import Container from "components/Container";

export default function About() {
  return (
    <Container>
      <SEO siteTitle="About" />
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white sm:mb-8 md:text-5xl">
        About Me
      </h1>
      <Image
        alt="Ariful Alam"
        width={400}
        quality={100}
        src={avatar}
        className="rounded-md"
        placeholder="blur"
      />
    </Container>
  );
}
