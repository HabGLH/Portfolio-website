function Hero() {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col items-center justify-center bg-white text-gray-900 dark:bg-gray-950 dark:text-white px-4"
    >
      <p className="text-lg">Hi, I'm</p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-2">
        Habtamu
      </h1>
      <h2 className="text-2xl md:text-4xl text-blue-600 dark:text-blue-400 mb-4">
        Frontend Developer
      </h2>
      <p className="text-center max-w-xl text-lg">
        I build beautiful and responsive websites using React, Tailwind CSS, and
        modern web technologies.
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Hero;
