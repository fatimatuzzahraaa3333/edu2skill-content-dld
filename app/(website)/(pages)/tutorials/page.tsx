import TutorialCard from "../../components/ui/TutorialCard";
import { getAllTutorials } from "../../lib/tutorials/tutorials";

export const metadata = {
  title: "Tuturials | edu2skill",
  description: "Tutorials on web development and modern technologies",
};

export default function TutorialPage() {
  const tutorials = getAllTutorials();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className=" mb-14">
          <h1 className="text-4xl font-bold mb-4 text-center">Tutorials</h1>
          <div className="text-gray-600 max-w-2xl mx-auto text-justify mt-5">
          <p>
            Unlock the world of knowledge with our comprehensive tutorials designed by edu2skill platform to enhance your computer science, IT, and software engineering skills. Whether you&apos;r a beginner or an advanced learner, our step-by-step guides will help you master key concepts with ease.
          </p>
          <p className="mt-3">Explore a wide range of tutorials, including:</p>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tutorials.map((t) => (
            <TutorialCard key={t.slug} tutorial={t} />
          ))}
        </div>

      </div>
    </section>
  );
}
