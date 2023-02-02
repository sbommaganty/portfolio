import Container from "components/Container";
import SEO from "components/SEO";
import ssc from "public/static/offices/ssc.webp";
import { ExperienceData } from "lib/types";
import ExperienceItem from "components/ExperienceItem";

const experienceData: ExperienceData[] = [
  {
    company: { name: "SecurityScorecard", href: "#" },
    position: "Software Engineer",
    location: "Montreal, Quebec, Canada",
    duration: {
      from: "Feb 2022",
      to: "Jan 2023",
    },
    isWorkingNow: true,
    image: ssc,
    description: [
      "Track cybersecurity ratings, find and resolve critical security risk.",
      "Re-build risk-control platform for insurance squad.",
      "Create insurance-analytic API with internal data store and CUBE.",
      "Write test cases for both backend (Jest) and frontend (Jest & Cypress).",
      "Implement client-side features with React.js followed by Figma UI/UX.",
    ],
    technologies: [
      { name: "Node.js", href: "#", color: "bg-rose-500" },
      { name: "React.js", href: "#", color: "bg-indigo-500" },
      { name: "PostgreSQL", href: "#", color: "bg-indigo-500" },
      { name: "Jest", href: "#", color: "bg-indigo-500" },
      { name: "Cypress", href: "#", color: "bg-indigo-500" },
      { name: "AWS", href: "#", color: "bg-indigo-500" },
    ],
  },
  {
    company: { name: "SecurityScorecard", href: "#" },
    position: "Software Engineer",
    location: "Montreal, Quebec, Canada",
    duration: {
      from: "Feb 2022",
      to: "Jan 2023",
    },
    isWorkingNow: false,
    image: ssc,
    description: [
      "Track cybersecurity ratings, find and resolve critical security risk.",
      "Re-build risk-control platform for insurance squad.",
      "Create insurance-analytic API with internal data store and CUBE.",
      "Write test cases for both backend (Jest) and frontend (Jest & Cypress).",
      "Implement client-side features with React.js followed by Figma UI/UX.",
    ],
    technologies: [
      { name: "Node.js", href: "#", color: "bg-rose-500" },
      { name: "React.js", href: "#", color: "bg-indigo-500" },
      { name: "PostgreSQL", href: "#", color: "bg-indigo-500" },
      { name: "Jest", href: "#", color: "bg-indigo-500" },
      { name: "Cypress", href: "#", color: "bg-indigo-500" },
      { name: "AWS", href: "#", color: "bg-indigo-500" },
    ],
  },
];

export default function Experience() {
  return (
    <Container>
      <SEO
        siteTitle="Experience"
        description="I have 4 years of experience in Software Development, mostly with Node.js, Python, React.js and Next.js. In terms of cloud work, I've some hands-on experience in AWS."
      />
      <h1 className="heading">Experience</h1>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {experienceData.map((experience, idx) => (
            <ExperienceItem
              key={idx}
              experience={experience}
              isLastTime={idx === experienceData.length - 1}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
}
