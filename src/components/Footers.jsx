export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Footer Content */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Let's Connect</h3>
          <p className="text-lg">
            Thank you for visiting my portfolio. Feel free to reach out to me
            for collaborations or inquiries!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            Twitter
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Habtamu Genet. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
