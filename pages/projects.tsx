import Container from "components/Container";
import ProjectCard from "components/ProjectCard";
import SEO from "components/SEO";
import { ProjectData } from "lib/types";
import ssc from "public/static/projects/ssc.png";
import typhoon from "public/static/projects/typhoon.png";
import epl from "public/static/projects/epl.png";
import jantt from "public/static/projects/jantt.png";
import justasklucy from "public/static/projects/justasklucy.png";
import plmc from "public/static/projects/plmc.png";
import onethread from "public/static/projects/onethread.png";
import dfa from "public/static/projects/dfa.png";
import iq from "public/static/projects/iq.png";

const projectData: ProjectData[] = [
  {
    name: "Digital Financing Application",
    url: "https://web.fairstone.ca/bestbuy",
    description: [
      "Designed intricate APIs and AWS Step Functions for a robust, serverless orchestration service in the backend system.",
      "Guided and supervised a team of developers, serving as the lead on the project.",
      "Spearheaded the end-to-end migration and development of the platform.",
      "Leveraged React.js and TypeScript to execute the development of the web application.",
      "Ensured seamless error tracking and user event monitoring on both frontend and backend systems through TrackJS.",
      "Write test cases for both backend (Jest) and frontend (Jest & React Testing Library).",
      "Mentored and coached junior developers, fostering a collaborative and growth-oriented environment.",
    ],
    technologies: ["Node.js", "React.js", "Jest", "DynamoDB", "AWS"],
    isProfessional: true,
    enabled: true,
    image: dfa,
  },
  {
    name: "Instant Quotes",
    url: "https://apply.fairstone.ca/",
    description: [
      "Spearheaded the end-to-end migration and development of the platform.",
      "Leveraged React.js and TypeScript to execute the development of the web application.",
      "Constructed project infrastructure with Node.js, TypeScript, and AWS services (Lambda, DynamoDB) for scalable, seamless functionality.",
      "Ensured seamless error tracking and user event monitoring on both frontend and backend systems through TrackJS.",
      "Write test cases for both backend (Jest) and frontend (Jest & React Testing Library).",
      "Mentored and coached junior developers, fostering a collaborative and growth-oriented environment.",
    ],
    technologies: ["Node.js", "React.js", "Jest", "DynamoDB", "AWS"],
    isProfessional: true,
    enabled: true,
    image: iq,
  },
  {
    name: "SecurityScorecard",
    url: "https:/www.securityscorecard.com",
    description: [
      "Track cybersecurity ratings, find and resolve critical security risk.",
      "Re-build risk-control platform for insurance squad.",
      "Create insurance-analytic API with internal data store and CUBE.",
      "Write test cases for both backend (Jest) and frontend (Jest & Cypress).",
      "Implement client-side features with React.js followed by Figma UI/UX.",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "PostgreSQL",
      "Jest",
      "Cypress",
      "AWS",
    ],
    isProfessional: true,
    enabled: true,
    image: ssc,
  },
  {
    name: "Typhoon",
    url: "https://typhoonondemand.com",
    description: [
      "Typhoon makes it easy to upload and share your film with the world.",
      "Virtual theater, streaming analytics and personal filmmaker portal.",
      "API development using Node.js & Python with DynamoDB.",
      "Managed user subscriptions with Stripe.",
      "Implement client‐side features with React.js followed by Figma UI/UX.",
    ],
    technologies: ["Node.js", "Python", "React.js", "DynamoDB", "AWS"],
    isProfessional: true,
    enabled: true,
    image: typhoon,
  },
  {
    name: "EPL Innovative Solutions",
    url: "https://eplcares.io",
    description: [
      "EPL is a medical service provider followed by AWS HIPPA compliance.",
      "API development using Python & Node.js with PostgreSQL.",
      "Responsive web design with Next.js.",
    ],
    technologies: [
      "Node.js",
      "Python",
      "React.js",
      "PostgreSQL",
      "Textract",
      "Cognito",
      "AWS",
    ],
    isProfessional: true,
    enabled: true,
    image: epl,
  },
  {
    name: "Jantt",
    url: "https://www.jantt.com",
    description: [
      "Jantt services are designed so that business owners will not have to perform any accounting functions or hire internal staff.",
      "API development using Python & Node.js with PostgreSQL.",
      "Data source integration with QuickBooks, and Gusto.",
      "Managed user subscriptions with Stripe.",
      "Responsive web design with React.js.",
    ],
    technologies: ["Node.js", "Python", "React.js", "PostgreSQL", "AWS"],
    isProfessional: true,
    enabled: true,
    image: jantt,
  },
  {
    name: "JustAskLucy",
    url: "https://www.justasklucy.com",
    description: [
      "A tool to help client to create new ideas for your toughest challenges.",
      "API development using Python with PostgreSQL.",
      "Responsive web design with React.js.",
    ],
    technologies: ["Python", "React.js", "PostgreSQL", "AWS"],
    isProfessional: true,
    enabled: true,
    image: justasklucy,
  },
  {
    name: "The PLMC",
    url: "https:/www.securityscorecard.com",
    description: [
      "Music Royalty Company gathers digital royalty for singers and producers.",
      "Collects royalty from Spotify.",
      "Build backend server with Java Sprint.",
      "Integrated Spotify to track artist's records.",
      "Writing efficient queries in MongoDB.",
      "Developed responsive web application with React.js.",
    ],
    technologies: ["Java Spring", "React.js", "MongoDB", "AWS"],
    isProfessional: true,
    enabled: true,
    image: plmc,
  },
  {
    name: "Ayoojon",
    url: "http://www.ayoojon.com",
    description: [
      "Build services with booking management.",
      "Build nearby events feature with Google Map API & Geographic Document.",
      "API development using Node.js with MongoDB.",
      "Responsive web design with Next.js.",
      "Developed responsive web application with React.js & Next.js.",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "Next.js",
      "MongoDB",
      "Google Map API",
      "AWS",
    ],
    isProfessional: true,
    enabled: false,
    image: onethread,
  },
  {
    name: "Onethread",
    url: "https://www.onethread.app",
    description: [
      "API development using Node.js with MongoDB.",
      "Build the real-time messaging features with PusherJs.",
      "Responsive web design with React.js.",
    ],
    technologies: ["Node.js", "React.js", "MongoDB", "AWS"],
    isProfessional: true,
    enabled: true,
    image: onethread,
  },
  {
    name: "Masjid Finder",
    url: "",
    description: [
      "CRUD operations with Node.js REST-API & managed complex queries in MongoDB efficiently.",
      "Find nearby masjid features with Google Map API and Geographic Document.",
      "Developed responsive web application with React web platform.",
    ],
    technologies: ["Node.js", "React.js", "MongoDB"],
    isProfessional: false,
    enabled: true,
    image: onethread,
  },
];

export default function Projects() {
  return (
    <Container>
      <SEO
        siteTitle="Projects"
        description="I believe that attitude makes aptitude. I commit myself one hundred percent to each project in which I have to participate."
      />
      <h1 className="heading">Projects</h1>
      <p className="sub-heading p">
        I believe that attitude makes aptitude. I commit myself one hundred
        percent to each project in which I have to participate.
      </p>
      {/* <p className="sub-heading p">
        There are two types of projects. Some of them are both{" "}
        <span className="font-semibold">Professional</span> and{" "}
        <span className="font-semibold">Personal</span> projects.
      </p> */}
      <div className="mt-10 w-full space-y-8 md:mt-16 md:space-y-20">
        {projectData
          .filter((v) => v.enabled && v.isProfessional)
          .map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
      </div>
    </Container>
  );
}
