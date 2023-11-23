import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center bg-[url('/main-bg.webp')]">
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[20] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              NEXT.JS
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Nisi eiusmod aute deserunt dolore incididunt velit. Consequat veniam
            dolore ex magna cupidatat id ad adipisicing veniam sunt. Sint culpa
            occaecat et ipsum. Qui est tempor sit deserunt id duis tempor
            exercitation do.
          </p>
          <div className="gap-5 hidden md:flex">
            <Link
              href="/skills"
              className="group relative rounded-[20px] bg-gradient-to-br from-blue-900 to-purple-600 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
              Learn More
            </Link>

            <Link
              href="/projects"
              className="group relative rounded-[20px] border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
              My Projects
            </Link>
            <Link
              href="/contact"
              className="group relative rounded-[20px] border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-10 z-[20] right-5 flex-col md:hidden gap-4">
        <Link
          href="/skills"
          className="group relative rounded-[20px] bg-gradient-to-br from-blue-900 to-purple-600 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
          Learn More
        </Link>

        <Link
          href="/projects"
          className="group relative rounded-[20px] border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
          My Projects
        </Link>

        <Link
          href="/contact"
          className="group relative rounded-[20px] border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
          Contact Me
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          width={300}
          height={300}
          className="absolute top-24"
        />
        <Image src="/cliff.webp" alt="cliff" width={400} height={400} />
      </div>
      <div className="absolute bottom-0 z-[5] h-auto w-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
