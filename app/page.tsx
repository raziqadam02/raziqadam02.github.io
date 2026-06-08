import { Mail, type LucideProps } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

function GithubIcon({ className, strokeWidth = 2, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={props["aria-hidden"]}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.42-2.5-1-3.5.92-.84 2-1.7 2-3.5 0 0-1-.5-3 1.5A9.5 9.5 0 0 0 12 5c-1.5 0-3 .5-4.5 1.5-2-2-3-1.5-3-1.5.5 1.8 1.08 2.66 2 3.5-.58 1-.98 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className, strokeWidth = 2, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={props["aria-hidden"]}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactLinks: {
  label: string;
  href: string;
  icon: ComponentType<LucideProps>;
  external: boolean;
}[] = [
  {
    label: "raziqadamyus@gmail.com",
    href: "mailto:raziqadamyus@gmail,com",
    icon: Mail,
    external: false,
  },
  {
    label: "raziqadam02",
    href: "https://github.com/raziqadam02",
    icon: GithubIcon,
    external: true,
  },
  {
    label: "Raziq Adam",
    href: "https://www.linkedin.com/in/raziq-adam-115637367/",
    icon: LinkedinIcon,
    external: true,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12">
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-heading text-5xl leading-[0.95] tracking-wide md:text-7xl">
          pOrTfOLio
        </h1>

        <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
          RAZIQ ADAM
        </p>

        <nav className="mt-12 flex items-center justify-center gap-10 md:gap-14">
          <Link
            href="/about"
            className="font-heading text-3xl lowercase tracking-wide transition duration-300 ease-out hover:scale-105 hover:underline hover:underline-offset-8"
          >
            ABouT
          </Link>
          <Link
            href="/project"
            className="font-heading text-3xl lowercase tracking-wide transition duration-300 ease-out hover:scale-105 hover:underline hover:underline-offset-8"
          >
            PrOjecTS
          </Link>
        </nav>
      </section>

      <nav
        aria-label="Contact"
        className="mt-20 flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-3 pb-4 md:mt-24 md:gap-x-14"
      >
        {contactLinks.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 font-heading text-lg lowercase tracking-wide transition duration-300 ease-out hover:opacity-70 hover:underline hover:underline-offset-8 md:text-xl"
          >
            <Icon className="h-[1em] w-[1em] shrink-0" strokeWidth={1.75} aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>
    </main>
  );
}