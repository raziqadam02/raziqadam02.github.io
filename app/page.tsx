import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
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
    </main>
  );
}