"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const certificates = [
  {
    name: "SNowFlaKE DaTA EnGInEERing",
    imageSrc: "/images/certificates/snowflake.png",
    imageAlt: "Snowflake Data Engineering certificate",
  },
  {
    name: "FORtINet CyBerSECuriTY",
    imageSrc: "/images/certificates/fortinet.png",
    imageAlt: "Fortinet Network Security Certified Associate certificate",
  },
  {
    name: "PyTHon",
    imageSrc: "/images/certificates/python.png",
    imageAlt: "Python certificate",
  },
  {
    name: "GOOgLe AnaLYTicS",
    imageSrc: "/images/certificates/google.png",
    imageAlt: "Google Analytics Individual Qualification certificate",
  },
];

export default function CertificatesPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
          {certificates.map((certificate) => (
            <article key={certificate.imageSrc} className="mx-auto w-full max-w-xl text-center">
              <button
                type="button"
                onClick={() => setActiveImage(certificate.imageSrc)}
                className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2"
                aria-label={`Open ${certificate.name} certificate`}
              >
                <div className="relative overflow-hidden rounded-lg border-4 border-black">
                  <Image
                    src={certificate.imageSrc}
                    alt={certificate.imageAlt}
                    width={1200}
                    height={800}
                    className="h-40 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02] md:h-44"
                  />
                </div>
              </button>
              <h2 className="mt-4 font-heading text-2xl leading-snug tracking-wide md:mt-5 md:text-3xl">
                {certificate.name}
              </h2>
            </article>
          ))}
        </div>
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
              aria-label="Close certificate preview"
            >
              ×
            </button>
            <Image
              src={activeImage}
              alt="Certificate enlarged preview"
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
