import Container from "components/Container";
import SEO from "components/SEO";
import { ExperienceData } from "lib/types";
import ExperienceItem from "components/ExperienceItem";
import ACC from "public/static/offices/acc.jpeg";
import BOOK from "public/static/offices/book.jpeg";
import { technologies } from "config";

const experienceData: ExperienceData[] = [
  {
    company: {
      name: "Accellor Inc",
      href: "https://www.accellor.com/",
    },
    position: "Software Developer",
    location: "Hyderabad, India",
    duration: {
      from: "June 2021",
      to: "June 2023",
    },
    isWorkingNow: false,
    image: ACC,
    description: [
        "Engineered the development of an enterprise-grade React-Native and iOS-powered application facilitating virtual interactions between end customers and retailers in the PC hardware and software industry."
,"Served as a front-end developer for an enterprise-grade React-Native and iOS application, integrating FHIR standards to ensure effective data management and seamless exchange with HL7 FHIR servers for virtual patient-provider interactions."
,"Developed mobile applications utilizing a component-driven architecture and applying the design patterns like MVC to enhance usability, while also collaborating with UX designers using Figma to deliver exceptional user experiences."
,"Implemented efficient state management using Redux to maintain global app state, to ensure performance and responsiveness of the applications."
,"Collaborated with a four-member team to implement microservices using NestJS, developed REST APIs, and integrated GraphQL, optimizing data exchange and reducing development costs."
,"Implemented robust CRUD operations in the backend server for managing data in PostgreSQL database."
,"Introduced Redis cache to the system, achieving a remarkable 50% improvement in response time for data sent back to the client application."
],
    technologies: [
      technologies.node,
      technologies.react,
      technologies.iOS,
      technologies.jest,
      technologies.typescript,
      technologies.nestjs,
      technologies.postgresql,
      technologies.swift,
     
     ],
  },

   {
    company: {
      name: "Bookmyhelp",
      href: "https://bookmyhelp.com/",
    },
    position: "React Native Developer Co-op",
    location: "Mississauga, ON, Canada",
    duration: {
      from: "Jan 2025",
     },
    isWorkingNow: true,
    image: BOOK,
    description: [
      "n/a"
    ],
    technologies: [
      technologies.node,
      technologies.react,
     ],
  },
];

export default function Experience() {
  return (
    <Container>
      <SEO
        siteTitle="Experience"
        description=""
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
