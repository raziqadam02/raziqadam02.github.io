import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "DaTa WaReHousE",
    href: "/project/datawarehouse",
    imageSrc: "/images/project/datawarehouse/datawarehouse.png",
    imageAlt: "Data Warehouse project preview",
  },
  {
    name: "DaTa PipeLINe",
    href: "/project/datapipeline",
    imageSrc: "/images/project/datapipeline/datapipeline.png",
    imageAlt: "Data Pipeline project preview",
  },
  {
    name: "ArcHIve SySTem",
    href: "/project/archive-system",
    imageSrc: "/images/project/archivesystem/archivesystem.png",
    imageAlt: "Archive System project preview",
  },
  {
    name: "LibrArY ReGIStrAtion SySTem",
    href: "/project/library-registration",
    imageSrc: "/images/project/libraryregistration/libraryregistration.png",
    imageAlt: "Library Registration System project preview",
  },
];

export default function ProjectPage() {
  return (
    <main className="relative flex min-h-screen px-6 py-12 md:py-14">
      <Link
        href="/"
        className="absolute left-6 top-6 z-10 font-heading text-2xl lowercase tracking-wide transition duration-300 ease-out hover:-translate-x-0.5 hover:opacity-70 hover:underline hover:underline-offset-8 md:left-8 md:top-8"
      >
        back
      </Link>

      <section className="mx-auto flex w-full max-w-6xl items-center pt-14 md:pt-16">
        <div className="grid w-full grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-12">
          {projects.map((project) => (
            <article key={project.href} className="mx-auto w-full max-w-xl text-center">
              <Link href={project.href} className="group block">
                <div className="relative overflow-hidden rounded-lg border-4 border-black">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={1200}
                    height={800}
                    className="h-40 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02] md:h-44"
                  />
                </div>
              </Link>
              <h2 className="mt-4 font-heading text-2xl tracking-wide md:mt-5 md:text-3xl">
                {project.name}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
