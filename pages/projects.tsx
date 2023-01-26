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

const projectData: ProjectData[] = [
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
      "Responsive web design with React.js.",
    ],
    technologies: ["Node.js", "Python", "React.js", "DynamoDB", "AWS"],
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
      "Responsive web design with React.js.",
    ],
    technologies: ["Node.js", "Python", "React.js", "PostgreSQL", "AWS"],
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
    enabled: true,
    image: justasklucy,
  },
  {
    name: "The PLMC",
    url: "https:/www.securityscorecard.com",
    description: [
      "Music Royalty Company who gather digital royalty for singers and producers.",
      "Collects royalty from Spotify.",
    ],
    technologies: ["Java Spring", "React.js", "MongoDB", "AWS"],
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
    ],
    technologies: ["Node.js", "React.js", "Next.js", "MongoDB", "AWS"],
    enabled: false,
    image: onethread,
  },
  {
    name: "TiGrow [Now: Onethread]",
    url: "https://www.onethread.app",
    description: [
      "API development using Node.js with MongoDB.",
      "Build the real-time messaging features with PusherJs.",
      "Responsive web design with React.js.",
    ],
    technologies: ["Node.js", "React.js", "MongoDB", "AWS"],
    enabled: true,
    image: onethread,
  },
];

export default function Projects() {
  return (
    <Container>
      <SEO siteTitle="Projects" />
      <h1 className="heading">Projects</h1>
      <p className="sub-heading p">
        There are two types of projects. Some of them are both{" "}
        <span className="font-semibold">Professional</span> and{" "}
        <span className="font-semibold">Personal</span> projects.
      </p>
      <div className="mt-10 w-full space-y-16">
        {projectData
          .filter((v) => v.enabled)
          .map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
      </div>
    </Container>
  );
}
