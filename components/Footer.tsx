import Link from "next/link";
import { navigation, socialLinks } from "config";

interface socialProps {
  className: string;
  "aria-hidden": boolean;
}

const social = [
  {
    name: "LinkedIn",
    href: socialLinks.linkedin,
    icon: (props: socialProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: socialLinks.github,
    icon: (props: socialProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: socialLinks.facebook,
    icon: (props: socialProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-3 7h-1.924C13.461 7 13 7.252 13 7.889V9h3l-.238 3H13v8h-3v-8H8V9h2V7.077C10 5.055 11.064 4 13.461 4H16v3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: socialLinks.instagram,
    icon: (props: socialProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: socialLinks.twitter,
    icon: (props: socialProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765a9.286 9.286 0 0 1-5.032-1.475 6.605 6.605 0 0 0 4.86-1.359 3.285 3.285 0 0 1-3.066-2.28 3.3 3.3 0 0 0 1.482-.056c-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411A3.289 3.289 0 0 1 5.612 6.6a9.32 9.32 0 0 0 6.766 3.43 3.286 3.286 0 0 1 5.594-2.993 6.583 6.583 0 0 0 2.086-.796 3.296 3.296 0 0 1-1.443 1.816A6.578 6.578 0 0 0 20.5 7.54a6.66 6.66 0 0 1-1.639 1.697z" />
      </svg>
    ),
  },
  // {
  //   name: "Youtube",
  //   href: socialLinks.twitter,
  //   icon: (props: socialProps) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path d="m10 9.333 5.333 2.662L10 14.667V9.333zM24 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0C4.326 6.3 4.02 7.87 4 12c.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0C19.674 17.7 19.98 16.13 20 12z" />
  //     </svg>
  //   ),
  // },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl space-y-4 overflow-hidden p-6 sm:space-y-5">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        {navigation.footer.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <Link
              href={item.href}
              className="text-base text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="flex justify-center space-x-6">
        {social.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden={true} />
          </a>
        ))}
      </div>
    </footer>
  );
}
