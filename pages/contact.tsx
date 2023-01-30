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
      <h1 className="heading">Contact</h1>
    </Container>
  );
}
