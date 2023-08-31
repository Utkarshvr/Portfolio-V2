import WorkCard from "@/Components/cards/WorkCard";
import works from "@/constants/work";

export default function Work() {
  return (
    <section
      id="work"
      className="py-20 md:px-9 flex flex-col items-center justify-center gap-4"
    >
      <h1 className="w-full font-bold text-2xl text-start px-4 md:px-0">Work</h1>
      {works.map((work) => (
        <WorkCard key={work.visit} work={work} />
      ))}
    </section>
  );
}
