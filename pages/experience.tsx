import Container from "components/Container";
import SEO from "components/SEO";
import { ExperienceData } from "lib/types";
import ExperienceItem from "components/ExperienceItem";
import ssc from "public/static/offices/ssc.webp";
import epsilon from "public/static/offices/epsilon.jpeg";
import ayoojon from "public/static/offices/ayoojon.jpeg";
import onethread from "public/static/offices/onethread.jpeg";

const experienceData: ExperienceData[] = [
  {
    company: {
      name: "SecurityScorecard",
      href: "https://securityscorecard.com/",
    },
    position: "Software Engineer",
    location: "Montreal, QC, Canada",
    duration: {
      from: "Feb 2022",
      to: "Jan 2023",
    },
    isWorkingNow: false,
    image: ssc,
    description: [
      "Build end-to-end delivery of features with Node.js.",
      "Designing and managing PostgreSQL database schemas and writing complex SQL queries.",
      "Writing unit test with Jest & Enzyme, and E2E test with Cypress.",
      "Documented API details with Swagger.",
      "Make sure responsive design for both mobile and desktop with React.js.",
      "Build customized charts from scratch with D3.",
      "Translate UI/UX design to clean, scalable, maintainable, and reusable code.",
      "Continuously deploy new features with launchdarkly.",
      "Working closely and proactively with development team to identify and implement new features.",
      "Fixed existing product's production issues.",
    ],
    technologies: [
      { name: "Node.js", href: "#", color: "bg-rose-500" },
      { name: "React.js", href: "#", color: "bg-indigo-500" },
      { name: "D3", href: "#", color: "bg-indigo-500" },
      { name: "Jest", href: "#", color: "bg-indigo-500" },
      { name: "Cypress", href: "#", color: "bg-indigo-500" },
      { name: "Swagger", href: "#", color: "bg-indigo-500" },
      { name: "PostgreSQL", href: "#", color: "bg-indigo-500" },
      { name: "MongoDB", href: "#", color: "bg-indigo-500" },
      { name: "AWS", href: "#", color: "bg-indigo-500" },
    ],
  },
  {
    company: {
      name: "Epsilon Solutions USA LLC",
      href: "https://partners.amazonaws.com/partners/0010h00001ftexcAAA/Epsilon%20Solutions%20USA",
    },
    position: "Full Stack Developer (Remote)",
    location: "Hanover, NJ, USA",
    duration: {
      from: "Oct 2020",
      to: "Jan 2022",
    },
    isWorkingNow: false,
    image: epsilon,
    description: [
      "Managing Authentication with AWS Cognito.",
      "Worked with Amplify, S3 file upload (Presigned URL) & AppSync (GraphQL).",
      "Backend development with Lambda using Node.js & Python.",
      "Worked with both SQL (PostgreSQL) and NoSQL (MongoDB & DynamoDB) databases.",
      "Implement video streaming features using AWS Elemental MediaConvert.",
      "Developed responsive web application with React.js.",
      "Build customized charts with Apache ECharts.",
      "Managed subscriptions with Stripe.",
      "Creating and managing CI/CD with GitHub Actions, CodePipeline, and CodeBuild.",
      "Mentored juniors to sharpen their skills.",
    ],
    technologies: [
      { name: "Node.js", href: "#", color: "bg-rose-500" },
      { name: "Python", href: "#", color: "bg-rose-500" },
      { name: "React.js", href: "#", color: "bg-indigo-500" },
      { name: "PostgreSQL", href: "#", color: "bg-indigo-500" },
      { name: "MongoDB", href: "#", color: "bg-indigo-500" },
      { name: "DynamoDB", href: "#", color: "bg-indigo-500" },
      { name: "Apache ECharts", href: "#", color: "bg-indigo-500" },
      { name: "AppSync", href: "#", color: "bg-indigo-500" },
      {
        name: "Elemental MediaConvert",
        href: "https://aws.amazon.com/mediaconvert/",
        color: "bg-indigo-500",
      },
      { name: "GitHub Actions", href: "#", color: "bg-indigo-500" },
      { name: "CodePipeline", href: "#", color: "bg-indigo-500" },
      { name: "CodeBuild", href: "#", color: "bg-indigo-500" },
    ],
  },
  {
    company: {
      name: "Ayoojon",
      href: "https://www.linkedin.com/company/ayoojon/",
    },
    position: "Co-Founder & Chief Technology Officer",
    location: "Dhaka, Bangladesh",
    duration: {
      from: "Apr 2020",
      to: "Oct 2021",
    },
    isWorkingNow: false,
    image: ayoojon,
    description: [
      "Conceived Serverless architecture for booking system application with Node.js which was hosted on an AWS EC2 machine.",
      "Nearby events feature with Google Map API and Geographic Document.",
      "Managed complex queries in MongoDB efficiently.",
      "Configured SES to send transactional emails.",
      "Configured CI/CD with CodePipeline, and CodeBuild.",
      "Build responsive client web application with Next.js.",
      "Build responsive vendor and admin web application with React.js.",
      "Developed customized charts with Apache ECharts.",
      "Attend board meeting with other co-founders to understand business logics and provide guidance on best practices to develop them.",
      "Mentored juniors to sharpen their skills.",
    ],
    technologies: [
      { name: "Node.js", href: "#", color: "bg-rose-500" },
      { name: "React.js", href: "#", color: "bg-indigo-500" },
      { name: "Next.js", href: "#", color: "bg-rose-500" },
      { name: "MongoDB", href: "#", color: "bg-indigo-500" },
      { name: "Apache ECharts", href: "#", color: "bg-indigo-500" },
      { name: "EC2", href: "#", color: "bg-indigo-500" },
      { name: "Lambda", href: "#", color: "bg-indigo-500" },
      { name: "S3", href: "#", color: "bg-indigo-500" },
      { name: "CloudFront", href: "#", color: "bg-indigo-500" },
      { name: "CodePipeline", href: "#", color: "bg-indigo-500" },
      { name: "CodeBuild", href: "#", color: "bg-indigo-500" },
    ],
  },
  {
    company: {
      name: "Onethread",
      href: "https://www.onethread.app/",
    },
    position: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    duration: {
      from: "Sep 2019",
      to: "Apr 2020",
    },
    isWorkingNow: false,
    image: onethread,
    description: [
      "Enterprise Connectivity Platform build with Node.js.",
      "Configured EC2 machine to run the backend server in AWS.",
      "Managed complex queries in MongoDB efficiently.",
      "Build real-time messaging features from scratch with PusherJs.",
      "Developed rooms feature with online presence, typing indication, file upload, highlighted discussion, and search facilities.",
      "Managed API documentation with Swagger.",
      "Developed CI/CD with CodePipeline, and CodeBuild.",
    ],
    technologies: [
      { name: "Node.js", href: "#", color: "bg-rose-500" },
      { name: "React.js", href: "#", color: "bg-indigo-500" },
      { name: "MongoDB", href: "#", color: "bg-indigo-500" },
      { name: "Swagger", href: "#", color: "bg-indigo-500" },
      { name: "PusherJs", href: "#", color: "bg-indigo-500" },
      { name: "EC2", href: "#", color: "bg-indigo-500" },
      { name: "S3", href: "#", color: "bg-indigo-500" },
      { name: "CloudFront", href: "#", color: "bg-indigo-500" },
      { name: "CodePipeline", href: "#", color: "bg-indigo-500" },
      { name: "CodeBuild", href: "#", color: "bg-indigo-500" },
    ],
  },
  {
    company: {
      name: "Onethread",
      href: "https://www.onethread.app/",
    },
    position: "Software Engineer Intern",
    location: "Dhaka, Bangladesh",
    duration: {
      from: "May 2019",
      to: "Aug 2019",
    },
    isWorkingNow: false,
    image: onethread,
    description: [
      "Build REST-API with Node.js server using Express.js.",
      "Writing complex queries in MongoDB.",
      "Tested API with Mocha and Chai.",
      "Managed API documentation with Swagger.",
    ],
    technologies: [
      { name: "Node.js", href: "#", color: "bg-rose-500" },
      { name: "React.js", href: "#", color: "bg-indigo-500" },
      { name: "MongoDB", href: "#", color: "bg-indigo-500" },
      { name: "Swagger", href: "#", color: "bg-indigo-500" },
      { name: "Mocha", href: "#", color: "bg-indigo-500" },
      { name: "Chai", href: "#", color: "bg-indigo-500" },
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
        <ul role="list">
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
