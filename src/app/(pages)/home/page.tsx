import Link from "next/link";

function HomePage() {
  return (
    <>
      <main className="animate-page overflow-x-hidden  min-h-[70vh] md:min-h-[60vh] flex justify-center flex-col py-12   ">
        <h1 className="text-3xl md:text-5xl md:tracking-wider font-extrabold ">
          I &apos; M &nbsp; SIRAJ
        </h1>
        <p className="md:leading-[2.5rem] leading-[2rem] md:my-4 my-2 text-balance text-lg text-white/80">
          A full-stack developer fueled by a deep passion for crafting
          user-friendly and efficient web applications. With 1.5 years of
          <Link
            href="/expertise"
            className="text-blue-700 duration-300 transition-all text-[1.25rem] font-semibold hover:text-white "
          >
            &nbsp; experience&nbsp;
          </Link>
          under my belt, I&apos;ve tackled a diverse range of
          <Link
            href="/projects"
            className="text-blue-700 duration-300 transition-all text-[1.25rem] font-semibold hover:text-white "
          >
            &nbsp; projects
          </Link>
          &nbsp; – from streamlined landing pages that capture attention to
          complex web platforms that power intricate functionalities. Beyond the
          technical expertise, what truly excites me is the user experience.
          While I thrive in the problem-solving world of coding, I also value a
          good mental challenge outside of it. When I&apos;m not coding, I enjoy
          Boxing & Chess.
        </p>
      </main>
    </>
  );
}

export default HomePage;
export const metadata = {
  title: "SIRAJ | Home",
  creator: "MR-SIRAJ",
  publisher: "MR-SIRAJ",
  description:
    "I am SIRAJ, a dedicated and skilled full-stack web app developer with several years of hands-on experience. My true passion lies in transforming concepts into tangible digital solutions, and I wholeheartedly embrace new challenges that come my way. I am proficient in languages such as JavaScript and Python, and I specialize in creating dynamic and responsive web applications. My goal is to continue pushing the boundaries of innovation in the ever-evolving field of web development. ",
};
