import Image from "next/image";

import avatar from "public/static/avatar.jpg";
import SEO from "components/SEO";
import Container from "components/Container";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { AboutPage } from "config";

export default function About() {
  return (
    <Container>
      <SEO
        siteTitle="About"
        description="I'm passionate about what I do and consider that passion to be the main engine, responsible for pushing me every day to achieve my professional and personal goals."
      />
      <h1 className="heading">About Me</h1>
      <div className="space-y-12 lg:flex lg:gap-12 lg:space-y-0">
        <div className="space-y-5 lg:space-y-6">
          <p className="sub-heading p">
            I am passionate about what I do and consider that passion to be the
            main engine, responsible for pushing me every day to achieve my
            professional and personal goals. Sharing my knowledge and learning
            at every moment. Not only in technical aspects but also, personally.
          </p>
          <p className="sub-heading p">
            Currently, I am working as{" "}
            <span className="font-semibold dark:text-white">
              Software Engineer
            </span>{" "}
            at{" "}
            <span className="font-semibold dark:text-white">
              SecurityScorecard
            </span>
            . I have almost 4 years of experience in{" "}
            <span className="font-semibold dark:text-white">
              Software Development
            </span>{" "}
            where I&apos;ve mostly worked with Node.js, Python, React.js and{" "}
            Next.js. In terms of cloud works, I&apos;ve some hands on experience
            in AWS.
          </p>
          <ul className="inline-grid grid-cols-2 grid-rows-3 gap-4">
            {AboutPage.skills.map((v) => (
              <li key={v} className="flex items-center gap-3">
                <PaperAirplaneIcon
                  className="h-4 w-4 stroke-2"
                  aria-hidden="true"
                />
                <span className="leading-4">{v}</span>
              </li>
            ))}
          </ul>
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
