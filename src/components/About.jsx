const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-8">
          Hi! 👋 I'm a passionate{" "}
          <span className="font-semibold text-blue-500">
            Computer Science student
          </span>{" "}
          who loves turning ideas into websites. I enjoy learning modern web
          technologies like <span className="font-semibold">React</span>,
          <span className="font-semibold"> Tailwind CSS</span>, and{" "}
          <span className="font-semibold">JavaScript</span>. I'm currently
          building real-world projects to sharpen my skills and prepare for the
          tech industry.
        </p>

        <p className="mt-6 text-lg leading-8">
          My focus is on{" "}
          <span className="font-semibold">Frontend Development</span>, but I’m
          also exploring backend technologies like Node.js and databases. I'm
          always open to learning and collaborating with other developers.
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Git",
              "GitHub",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-200 rounded-xl dark:bg-gray-700 dark:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
