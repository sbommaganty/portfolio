import Link from "next/link";

interface props {
  label: string;
  href?: string;
  showLink?: boolean;
}

const Chip = ({ label, href, showLink = false }: props) => {
  const isInternalLink = href?.startsWith("/");

  if (showLink && href) {
    return isInternalLink ? (
      <Link href={href}>
        <span className="rounded-lg bg-gray-100 py-2 px-3 not-italic leading-none text-gray-700">
          {label}
        </span>
      </Link>
    ) : (
      <a href={href}>
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
