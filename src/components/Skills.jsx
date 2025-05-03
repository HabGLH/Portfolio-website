import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiGithub } from "react-icons/si";

function Skills() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const skillData = [
    {
      title: "Frontend",
      skills: [
        { icon: FaHtml5, name: "HTML", level: 90 },
        { icon: FaCss3Alt, name: "CSS", level: 85 },
        { icon: FaJs, name: "JavaScript", level: 75 },
        { icon: FaReact, name: "React", level: 85 },
        { icon: SiTailwindcss, name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: FaNodeJs, name: "Node.js", level: 10 },
        { icon: SiMongodb, name: "MongoDB", level: 15 },
        { icon: SiMysql, name: "MySQL", level: 25 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: FaGitAlt, name: "Git", level: 85 },
        { icon: SiGithub, name: "GitHub", level: 70 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 bg-gray-100 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          🚀 Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillData.map(({ title, skills }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                {title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {skills.map(({ icon: Icon, name, level }, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="text-4xl text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-colors mb-3">
                      <Icon />
                    </div>

                    <span className="text-sm text-gray-700 dark:text-white">
                      {name}
                    </span>
                    <div className="w-full mt-2">
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <span className="text-xs font-semibold inline-block py-1 uppercase">
                            {level}%
                          </span>
                        </div>
                        <div className="flex mb-2 items-center justify-between">
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full">
                            <div
                              className={`bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full transition-all duration-1000 ${
                                inView ? `w-[${level}%]` : `w-0`
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
