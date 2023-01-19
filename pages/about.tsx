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
      <div className="space-y-12 lg:flex lg:gap-12 lg:space-y-0">
        <div className="space-y-4 lg:space-y-6">
          <p className="p-about">
            I believe that attitude makes aptitude. I commit myself one hundred
            percent to each project in which I have to participate. Sharing my
            knowledge and learning at every moment. Not only in technical
            aspects but also, personally.
          </p>
          <p className="p-about">
            I am passionate about what I do and consider that passion to be the
            main engine, responsible for pushing me every day to achieve my
            professional and personal goals.
          </p>
          <p className="p-about">
            I&apos;ve almost 4 years of experience in{" "}
            <span className="p-about-important">Software Development</span>{" "}
            where I&apos;ve mostly worked with{" "}
            <span className="p-about-important">Node.js</span>,{" "}
            <span className="p-about-important">Python</span>,{" "}
            <span className="p-about-important">React.js</span> and{" "}
            <span className="p-about-important">Next.js</span>. In terms of
            cloud works, I&apos;ve some hands on experience in{" "}
            <span className="p-about-important">AWS</span>.
          </p>
        </div>
        <div className="flex justify-center lg:flex-none">
          <Image
            alt="Ariful Alam"
            width={400}
            quality={100}
            src={avatar}
            className="w-64 rounded-md sm:w-72 lg:w-96"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
}
