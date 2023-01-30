import Container from "components/Container";
import SEO from "components/SEO";
import { MY_EMAIL } from "config";

export default function Contact() {
  return (
    <Container>
      <SEO
        siteTitle="Contact"
        description={`My inbox is always open. Feel free to email me at ${MY_EMAIL}.`}
      />
      <div className="mx-auto max-w-2xl">
        <h1 className="heading capitalize md:text-center">Get in touch</h1>
        <p className="p mx-auto mt-6 text-justify text-xl leading-normal md:text-center">
          Currently, I&apos;m looking for any new opportunities. My inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <div className="mt-10 flex justify-center">
          <a
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-50 dark:text-black dark:ring-offset-black dark:hover:bg-white dark:focus:ring-white"
            href={"mailto:" + MY_EMAIL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hello
          </a>
        </div>
      </div>
    </Container>
  );
}
