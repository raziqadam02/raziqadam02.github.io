"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projectImages = [
  "/images/project/datapipeline/datapipeline.png",
  "/images/project/datapipeline/datapipeline2.png",
  "/images/project/datapipeline/datapipeline3.png"
];

export default function DataPipelinePage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="relative flex h-screen overflow-hidden px-6 py-8 md:py-10">
      <Link
        href="/project"
        className="absolute left-6 top-6 z-10 font-heading text-2xl lowercase tracking-wide transition duration-300 ease-out hover:-translate-x-0.5 hover:opacity-70 hover:underline hover:underline-offset-8 md:left-8 md:top-8"
      >
        back
      </Link>

      <section className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 items-start gap-8 pt-8 md:gap-10 md:pt-10 lg:grid-cols-2 lg:gap-24 lg:pt-6">
        <figure className="mx-auto w-full max-w-md space-y-4 lg:mx-0 lg:max-w-none lg:-translate-x-14 lg:space-y-5">
          {projectImages.map((imageSrc, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(imageSrc)}
              className="group relative block w-full overflow-hidden rounded-lg border-4 border-black text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2"
              aria-label={`Open Data Pipeline screenshot ${index + 1}`}
            >
              <Image
                src={imageSrc}
                alt={`Data Pipeline screenshot ${index + 1}`}
                width={900}
                height={1200}
                className="h-32 w-full object-contain transition duration-500 ease-out group-hover:scale-[1.01] md:h-40 lg:h-44"
                priority={index === 0}
              />
            </button>
          ))}
        </figure>

        <article className="mx-auto flex w-full max-w-xl flex-col justify-start text-left lg:-mt-4">
          <section className="space-y-4">
            <h1 className="font-heading text-2xl tracking-wide md:text-3xl">DATA PIPELINE</h1>
            <p className="font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
            Built an end-to-end Fuel Price ETL pipeline to automate the process of ingesting, transforming, and storing structured datasets into a centralized database for analytics-ready consumption.
            The system focuses on data quality, consistency, and scalability across all processing stages
            </p>
          </section>

          <section className="mt-6 space-y-3 md:mt-7">
            <h2 className="font-heading text-2xl tracking-wide md:text-3xl">TEcH sTAck</h2>
            <p className="font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
            Python, Pandas, PostgreSQL, AWS RDS, Docker, SQL
            </p>
          </section>

          <section className="mt-6 space-y-3 md:mt-7">
            <h2 className="font-heading text-2xl tracking-wide md:text-3xl">KEy FeaTuREs</h2>
            <ul className="list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-foreground/80 marker:text-foreground/70 md:text-base">
              <li>Built an end-to-end ETL pipeline to process and load fuel price data into PostgreSQL (AWS RDS)</li>
              <li>Implemented data cleaning and validation using Python (Pandas) to ensure data quality and consistency</li>
              <li>Containerized the database with Docker and used SQL for structured, analytics-ready data transformation</li>
            </ul>
          </section>

          <section className="mt-6 space-y-3 md:mt-7">
            <h2 className="font-heading text-2xl tracking-wide md:text-3xl">wHaT i BuILt</h2>
            <p className="font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
            I built a complete ETL pipeline that transforms raw fuel price data into structured, analytics-ready datasets using Python, SQL, PostgreSQL (AWS RDS), and Docker.
            </p>
          </section>
        </article>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 py-10"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-lg border-4 border-black bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-3 top-2 z-10 font-heading text-3xl leading-none text-black/80 transition hover:text-black"
              aria-label="Close image preview"
            >
              ×
            </button>
            <Image
              src={activeImage}
              alt="Data Pipeline enlarged screenshot"
              width={1800}
              height={1200}
              className="h-auto max-h-[82vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
