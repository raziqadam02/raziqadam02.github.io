import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative flex h-screen overflow-hidden px-6 py-8 md:py-10">
      <Link
        href="/"
        className="absolute left-6 top-6 z-10 font-heading text-2xl lowercase tracking-wide transition duration-300 ease-out hover:-translate-x-0.5 hover:opacity-70 hover:underline hover:underline-offset-8 md:left-8 md:top-8"
      >
        back
      </Link>
      <section className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 items-start gap-8 pt-8 md:gap-10 md:pt-10 lg:grid-cols-2 lg:gap-24 lg:pt-6">
        <figure className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:-translate-x-30">
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src="/images/about/profile1.png"
              alt="me"
              width={900}
              height={1200}
              className="h-auto w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
              priority
            />
          </div>
        </figure>

        <article className="mx-auto flex w-full max-w-xl flex-col justify-start text-left lg:-mt-6 lg:pt-0">
          <section className="space-y-4">
            <h2 className="font-heading text-2xl tracking-wide md:text-3xl">ABouT mE</h2>
            <p className="font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
              I enjoy building systems that turn raw information into something more useful and
              meaningful. My interests revolve around data, automation, analytics, and creating
              digital experiences that feel structured, simple, and purposeful.
            </p>
            <p className="font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
              Currently, I spend most of my time exploring data engineering, dashboards, system
              design, and modern web technologies while continuously building projects that help me
              learn by doing.
            </p>
          </section>

          <section className="mt-5 space-y-4 md:mt-6">
            <h2 className="font-heading text-2xl tracking-wide md:text-3xl">WHat I WoRk wiTH</h2>
            <p className="font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
              I mainly work with Python, SQL, Snowflake, Power BI, Tableau, and data warehouse
              concepts to build analytics workflows and data-driven systems. Recently, I&apos;ve
              also been exploring Next.js, TypeScript, and Tailwind CSS to create more thoughtful
              and interactive digital experiences.
            </p>
          </section>

          <section className="mt-5 space-y-4 md:mt-6">
            <h2 className="font-heading text-2xl tracking-wide md:text-3xl">
              EXpeRiEnceS
            </h2>
            <p className="font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
              During my internship, I supported document organization and automation initiatives by
              working with Python scripting and internal data workflows. Alongside that, I build
              hands-on projects focused on ETL pipelines, analytics dashboards, automation, and
              data warehouse development to strengthen both technical and problem-solving skills.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
