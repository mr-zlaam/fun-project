import { Metadata } from "next";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Project_Card from "@/components/Project_Card/Project_Card";
import projectdata from "./project.json";
function ProjectPage() {
  return (
    <>
      <main className="flex flex-col animate-page">
        <h1 className="md:text-4xl text-3xl text-center font-bold">
          Some Projects
        </h1>
        <h2 className="w-fit mx-auto flex my-4 gap-2 items-center pointer ">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1WjNv4PsACYUfT3WpZHbuVWJUfc0uIBru/view?usp=drive_link"
          >
            <ArrowDown />
          </Link>
          <Link href={"/pdf"} className="hover:underline text-xl font-semibold">
            Resume
          </Link>
        </h2>
        <section>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 py-5">
            {projectdata.map((projectData) => {
              return (
                <div key={projectData.id}>
                  <Project_Card projectData={projectData} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default ProjectPage;
export const metadata: Metadata = {
  title: "SIRAJ | Projects",
  creator: "mr-siraj",
  publisher: "mr-siraj",
  description:
    "I am SIRAJ, a dedicated and skilled full-stack web app developer with several years of hands-on experience. My true passion lies in transforming concepts into tangible digital solutions, and I wholeheartedly embrace new challenges that come my way. I am proficient in languages such as JavaScript and Python, and I specialize in creating dynamic and responsive web applications. My goal is to continue pushing the boundaries of innovation in the ever-evolving field of web development. ",
};
