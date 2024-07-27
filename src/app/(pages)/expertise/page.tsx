import Expertise_Card from "@/components/Expertise_Card/Expertise_Card";
import expertiseData from "./expertise.json";
export default function ExpertisePage() {
  return (
    <main className="flex flex-col animate-page">
      <section className="my-2 flex-1">
        <h1 className="font-bold md:text-5xl text-3xl">My Expertise!</h1>
        <h2 className="leading-[2rem] tracking-wider sm:text-xl my-4 text-base">
          I am proficient in languages such as JavaScript and Python, and I
          specialize in creating dynamic and responsive web applications. My
          goal is to continue pushing the boundaries of innovation in the
          ever-evolving field of web development.
        </h2>
      </section>
      <section className="my-2 flex-1 flex flex-col">
        <h1 className="font-bold md:text-5xl text-3xl">
          Technologies I use in Daily Life :
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 py-4">
          {expertiseData?.map((data) => {
            return (
              <div key={data.title}>
                <Expertise_Card data={data} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "SIRAJ | Expertise",
  creator: "mr-zlaam",
  publisher: "mr-zlaam",

  description:
    "I am SIRAJ, a dedicated and skilled full-stack web app developer with several years of hands-on experience. My true passion lies in transforming concepts into tangible digital solutions, and I wholeheartedly embrace new challenges that come my way. I am proficient in languages such as JavaScript and Python, and I specialize in creating dynamic and responsive web applications. My goal is to continue pushing the boundaries of innovation in the ever-evolving field of web development. ",
};
