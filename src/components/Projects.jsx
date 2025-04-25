const projects = [
  {
    title: "Portfolio Website",
    image: "Project view - Copy.jpeg",
    description: "Responsive personal website using React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Vite"],
    live: "https://yourportfolio.com",
    code: "https://github.com/yourname/portfolio",
  },
  {
    title: "To-Do App",
    image: "/projects/todo.png",
    description: "Simple To-Do app with local storage & filtering features.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://todo-demo.com",
    code: "https://github.com/yourname/todo-app",
  },
  {
    title: "Blog Platform (Coming Soon)",
    image: "Noise.jpeg",
    description: "A full-stack blog with user auth and markdown support.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 text-xs mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-white/20 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.live !== "#" && (
                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.live}
                      target="_blank"
                      className="underline text-blue-300"
                    >
                      Live
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="underline text-blue-300"
                    >
                      Code
                    </a>
                  </div>
                )}
                {project.live === "#" && (
                  <p className="text-sm italic text-gray-300">Coming Soon</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
