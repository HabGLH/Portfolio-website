function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-950 text-center"
    >
      {/* Headline / Title */}
      <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
        Get in Touch
      </h2>

      {/* Short Description */}
      <p className="text-lg text-black dark:text-gray-300 mb-6">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      {/* Contact Form */}
      <form className="max-w-lg mx-auto space-y-4 text-black">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Your Name"
            autoComplete="name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="youremail@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Send 📧
        </button>
      </form>

      {/* Direct Email */}
      <p className="mt-8 text-lg text-black dark:text-gray-300">
        Or email me directly at{" "}
        <a
          href="mailto:bdu1601645@bdu.edu.et"
          className="text-blue-600 font-semibold hover:underline dark:text-blue-400"
        >
          bdu1601645@bdu.edu.et
        </a>
      </p>

      {/* Social Links */}
      <div className="mt-6 space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-950 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-950 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-950 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        >
          Twitter
        </a>
      </div>

      {/* Location (Optional) */}
      <p className="mt-6 text-sm text-gray-900 dark:text-gray-300">
        Bahir Dar, Amhara, Ethiopia
      </p>

      {/* Phone Number (Optional) */}
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        📞{" "}
        <a
          href="tel:+251919622323"
          className="text-blue-600 dark:text-blue-400"
        >
          +251-919-622-323
        </a>
      </p>
    </section>
  );
}

export default Contact;
