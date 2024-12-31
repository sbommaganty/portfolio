import Image from "next/image";
import avatar from "../../portfolio/public/static/avatar.jpg";
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
             I specialize in creating seamless mobile and web solutions, leveraging modern frameworks like React Native, iOS (Swift), and React.js, while also delivering backend excellence with NestJS and Django REST. During my tenure at Accellor Inc., I played a pivotal role in developing enterprise-grade applications for industries like healthcare and retail. From engineering virtual consultation platforms for patients to crafting innovative engagement tools for retailers, I have consistently delivered high-impact solutions that align with business goals and user needs. My expertise spans front-end UI/UX development, backend API integration, and optimizing system performance using tools like Redis and GraphQL. Currently pursuing a Post-Graduate Certificate in Full Stack Software Development at Lambton College, I am advancing my skills in cloud technologies, database management, and modern DevOps practices, including Terraform, Docker, and kubernetes.
          </p>
          <p className="sub-heading p">
            Currently, I am will joining as an{" "}
            <span className="font-semibold dark:text-white">
              React Native Developer Intern 
            </span>{" "}
            at{" "}
            <span className="font-semibold dark:text-white">
              BookMyHelp
            </span>
            . I have almost 2 years of experience in{" "}
            <span className="font-semibold dark:text-white">
              Software Development
            </span>{" "}
            where I&apos;ve mostly worked with Node.js, Python, React.js and{" "}
            iOS. In terms of cloud works, I&apos;ve some hands on experience
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
  <div className="w-48 h-48 rounded-md overflow-hidden bg-gray-200 flex items-center justify-center">
    <Image
      alt="Avatar"
      width={200}
      height={200}
      quality={100}
      src={avatar}
      className="object-cover"
      placeholder="blur"
    />
  </div>
</div>
</div>
    </Container>
  );
}
