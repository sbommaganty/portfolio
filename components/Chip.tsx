import Link from "next/link";

type ChipProps = { label: string } & (
  | { type: "link"; href: string }
  | { type?: "normal"; href?: never }
);

const Chip = ({ type = "normal", label, ...rest }: ChipProps) => {
  if (type === "link" && rest.href) {
    const isInternalLink = rest.href.startsWith("/");

    return isInternalLink ? (
      <Link href={rest.href}>
        <span className="chip">{label}</span>
      </Link>
    ) : (
      <a href={rest.href} rel="noopener noreferrer">
        <span className="chip">{label}</span>
      </a>
    );
  }

  return <span className="chip">{label}</span>;
};

export default Chip;
