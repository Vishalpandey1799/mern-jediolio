const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-10 max-w-3xl text-center border border-gray-700 transition-all transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-fuchsia-400 mb-6">
          About Me
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Hey there! 👋 I'm{" "}
          <span className="text-fuchsia-400 font-semibold">Vishal Kumar</span>,
          a passionate{" "}
          <span className="text-blue-400">BCA final-year student</span> who
          loves coding and enjoys every single line of code I write. I thrive on
          creativity and innovation, always looking for new ideas to bring to
          life. My mission is to build impactful and meaningful projects that
          make a difference. 🚀
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/vishal-kumar-3835a9330/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-110"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Vishalpandey1799"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition transform hover:scale-110"
          >
            GitHub
          </a>
          <a
            href="mailto:vishalpandey1799@gmail.com"
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition transform hover:scale-110"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
