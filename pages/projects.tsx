import Container from "components/Container";
import ProjectCard from "components/ProjectCard";
import SEO from "components/SEO";
import { ProjectData } from "lib/types";
import split from "public/static/projects/split.png";
import iq from "public/static/projects/court.png";

const projectData: ProjectData[] = [
  {
    name: "Split and Share - An Expense sharing application",
    url: "https://github.com/sbommaganty/splitandshare",
    description: [
 "Developed a responsive expense-sharing web application using React.js and used Tailwind CSS to ensure cross-browser compatibility across multiple devices and browsers."

,"Leveraged Django’s MVT architecture to build SOA based microservices that handled user management and expense tracking."

,"Used SQLAlchemy for secure and efficient database management, mitigating SQL injection risks. Designed models and integrated serialization/deserialization processes, improving data accuracy and system scalability."

,"Utilized NumPy and Pandas for financial analysis to compute user debts, amounts owed, and total group expenses, enhancing application accuracy."
,"Implemented a CI/CD pipeline using GitHub Actions to automate the build, test, and deployment of a React application to an AWS EC2 instance."
,"Deployed the app on AWS EC2 with Nginx for serving static files and PM2 for managing the application lifecycle."
,"Secured deployment using SSH and GitHub Secrets for safe transfer of sensitive data, ensuring automated and error-free deployments."
     
],
    technologies: ["React.js", "React.js", "Tailwind CSS", "Material-UI", "Django REST Framework", 
        "GithubActions",
      "AWS EC2",

    ],
    isProfessional: true,
    enabled: true,
    image: split,
  },
  {
    name: "Court AI",
    url: "https://github.com/johnnykfeng/court-ai",
    description: [
"Developed a scalable Flask-based REST API to automate legal case analysis by generating detailed case reports from client-provided data and documents.",
"Integrated OpenAI's GPT-4 via LangChain to dynamically construct prompts, enabling the generation of precise search queries and comprehensive case reports.",
"Designed and implemented a Pinecone vector database for retrieving relevant legal content using similarity search, powered by OpenAI's text-embedding-ada-002 model.",
"Built modular functionality to: Extract case details and supporting documents from API requests. Generate embeddings for legal queries and retrieve relevant content from the Pinecone index. Compile retrieved data and user-provided information into structured, high-quality case reports."
,"Enabled seamless API integration with React-based front-end applications by configuring CORS policies."
,"Enhanced system reliability by implementing robust error-handling mechanisms and ensuring consistent API performance."
,"Delivered an intelligent legal document processing and reporting system, significantly optimizing manual workflows and improving decision-making efficiency."
     ],
    technologies: ["Node.js", "React.js", "Flask", "Python", "OpenAI (GPT-4)", "Pinecone", "LangChain", "Dotenv", "REST API", "Prompt Engineering"],
    isProfessional: true,
    enabled: true,
    image: iq,
  },
];

export default function Projects() {
  return (
    <Container>
      <SEO
        siteTitle="Projects"
        description=""
      />
      <h1 className="heading">Projects</h1>
      
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
