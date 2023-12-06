import Container from "components/Container";
import SEO from "components/SEO";
import { ExperienceData } from "lib/types";
import ExperienceItem from "components/ExperienceItem";
import fairstone from "public/static/offices/fairstone.jpeg";
import ssc from "public/static/offices/ssc.webp";
import epsilon from "public/static/offices/epsilon.jpeg";
import ayoojon from "public/static/offices/ayoojon.jpeg";
import onethread from "public/static/offices/onethread.jpeg";
import { technologies } from "config";

const experienceData: ExperienceData[] = [
  {
    company: {
      name: "Fairstone Bank",
      href: "https://www.fairstone.ca/",
    },
    position: "Sr. Full Stack Developer",
    location: "Montreal, QC, Canada",
    duration: {
      from: "Apr 2023",
    },
    isWorkingNow: true,
    image: fairstone,
    description: [
      "Received the Fairstone Ovation Award at Fairstone Bank for consistently exceeding expectations and delivering exceptional performance.",
      "Led and directed cross-functional teams on two major projects, steering the development process from inception to successful deployment.",
      "Successfully migrated legacy projects to Typescript, improving code maintainability and reducing potential bugs.",
      "Debugged legacy code to optimize performance with updated libraries and styling standards, resulting in faster load times and improved user experience.",
      "Designed and implemented serverless solutions using Lambda functions and CDK, resulting in significant cost savings and improved scalability.",
      "Leveraged Material-UI and Typescript to build reusable components, leading to faster development times and a more consistent user experience.",
      "Wrote unit tests using Jest and React Testing Library to ensure the reliability and stability of code changes.",
      "Conducted thorough code reviews, ensuring adherence to code quality best practices and identifying opportunities for improvement.",
      "Mentored and coached junior developers, fostering a collaborative and growth-oriented environment, resulting in increased team productivity and skill development.",
    ],
    technologies: [
      technologies.node,
      technologies.react,
      technologies.typescript,
      technologies.jest,
      technologies.aws,
    ],
  },
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
      technologies.node,
      technologies.react,
      technologies.d3,
      technologies.jest,
      technologies.cypress,
      technologies.swagger,
      technologies.postgresql,
      technologies.mongodb,
      technologies.aws,
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
      technologies.node,
      technologies.python,
      technologies.react,
      technologies.postgresql,
      technologies.mongodb,
      technologies.dynamodb,
      technologies.echarts,
      technologies.appsync,
      technologies.elementalMediaConvert,
      technologies.githubActions,
      technologies.codePipeline,
      technologies.codeBuild,
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
      technologies.node,
      technologies.react,
      technologies.next,
      technologies.mongodb,
      technologies.echarts,
      technologies.ec2,
      technologies.lambda,
      technologies.s3,
      technologies.cloudFront,
      technologies.codePipeline,
      technologies.codeBuild,
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
      technologies.node,
      technologies.react,
      technologies.mongodb,
      technologies.swagger,
      technologies.pusher,
      technologies.ec2,
      technologies.s3,
      technologies.cloudFront,
      technologies.codePipeline,
      technologies.codeBuild,
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
      technologies.node,
      technologies.react,
      technologies.mongodb,
      technologies.swagger,
      technologies.mocha,
      technologies.chai,
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
