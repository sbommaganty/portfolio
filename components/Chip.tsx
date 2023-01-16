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
        <span className="rounded-lg bg-gray-100 py-2 px-3 not-italic leading-none text-gray-700">
          {label}
        </span>
      </Link>
    ) : (
      <a href={rest.href}>
        <span className="rounded-lg bg-gray-100 py-2 px-3 not-italic leading-none text-gray-700">
          {label}
        </span>
      </a>
    );
  }

  return (
    <span className="rounded-lg bg-gray-100 py-2 px-3 not-italic leading-none text-gray-700">
      {label}
    </span>
  );
};

export default Chip;
