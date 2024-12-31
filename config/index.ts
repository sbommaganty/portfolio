export const APP_TITLE = "Swamynathan Bommaganty";
export const APP_DESCRIPTION = "This is my portfolio website.";
export const MY_IMAGE_URL = "'../../portfolio/public/static/avatar-seo.jpeg'";
export const MY_EMAIL = "swamynathan.bommaganty@gmail.com";
export const socialLinks = {
  facebook: "",
  linkedin: "https://www.linkedin.com/in/swamynathan-bommaganty-50a722154/",
  github: "https://github.com/sbommaganty",
  twitter: "",
  instagram: "",
};
export const aboutNavigation = { name: "About", href: "/about" };
export const experienceNavigation = { name: "Experience", href: "/experience" };
export const projectsNavigation = { name: "Projects", href: "/projects" };
export const contactNavigation = { name: "Contact", href: "/contact" };

export const navigation = {
  header: [
    aboutNavigation,
    projectsNavigation,
    experienceNavigation,
    contactNavigation,
  ],
  footer: [
    aboutNavigation,
    projectsNavigation,
    experienceNavigation,
    contactNavigation,
  ],
};

export const AboutPage = {
  skills: ["Node.js", "React.js", "Python", "Next.js", "AWS", "TypeScript"],
};

export const technologies = {
  node: { name: "Node.js", href: "https://nodejs.org/" },
  react: {
    name: "React Native",
    href: "https://reactnative.dev/",
  },
  
  iOS: { name: "iOS", href: "https://developer.apple.com/tutorials/app-dev-training/" },
  jest: { name: "Jest", href: "https://jestjs.io/" },
  javascript: {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  swift: {
    name: "Swift",
    href: "https://developer.apple.com/swift/",
  },
  postgresql: {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  nestjs: {
    name: "Nest.js",
    href: "https://nestjs.com/",
  },
  dynamodb: {
    name: "DynamoDB",
    href: "https://aws.amazon.com/dynamodb/",
  },
  aws: { name: "AWS", href: "https://aws.amazon.com/" },
  python: {
    name: "Python",
    href: "https://www.python.org/",
  },
  echarts: {
    name: "Apache ECharts",
    href: "https://echarts.apache.org/",
  },
  appsync: {
    name: "AppSync",
    href: "https://aws.amazon.com/appsync/",
  },
  elementalMediaConvert: {
    name: "Elemental MediaConvert",
    href: "https://aws.amazon.com/mediaconvert/",
  },
  githubActions: {
    name: "GitHub Actions",
    href: "https://github.com/features/actions",
  },
  codePipeline: {
    name: "CodePipeline",
    href: "https://aws.amazon.com/codepipeline/",
  },
  codeBuild: {
    name: "CodeBuild",
    href: "https://aws.amazon.com/codebuild/",
  },
  next: { name: "Next.js", href: "https://nextjs.org/" },
  ec2: {
    name: "EC2",
    href: "https://aws.amazon.com/ec2/",
  },
  lambda: {
    name: "Lambda",
    href: "https://aws.amazon.com/lambda/",
  },
  s3: {
    name: "S3",
    href: "https://aws.amazon.com/s3/",
  },
  cloudFront: {
    name: "CloudFront",
    href: "https://aws.amazon.com/cloudfront/",
  },
  pusher: {
    name: "PusherJs",
    href: "https://pusher.com/channels",
  },
  mocha: {
    name: "Mocha",
    href: "https://mochajs.org/",
  },
  chai: {
    name: "Chai",
    href: "https://www.chaijs.com/",
  },
  typescript: {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
};

export const gtag = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
