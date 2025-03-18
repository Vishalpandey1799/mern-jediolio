import { FaGithub, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

const DemoProfile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-80 bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
        <div className="p-6 text-center bg-gradient-to-r from-purple-600 to-pink-500">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Developer Profile"
            className="w-32 h-32 rounded-full border-4 border-white mx-auto shadow-lg transition-transform transform hover:scale-105"
          />
          <h1 className="text-white text-2xl font-bold mt-4">Alex Morgan</h1>
          <span className="text-white bg-black bg-opacity-20 px-4 py-1 rounded-full text-sm font-medium inline-block mt-2">
            Software Engineer
          </span>
        </div>
        <div className="p-6 text-center">
          <p className="text-gray-600 mb-4 text-sm">
            Passionate developer with expertise in full-stack development.
            Creating elegant solutions to complex problems.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <style>
              {`
                @keyframes shine {
                  0% { background-position: -200px; }
                  100% { background-position: 200px; }
                }
              `}
            </style>
            {["JavaScript", "React", "Node.js", "Python", "UI/UX"].map(
              (skill) => (
                <span
                  key={skill}
                  className="relative px-3 py-1 rounded-full text-xs text-white overflow-hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.2) 70%)",
                    backgroundSize: "200% 100%",
                    animation: "shine 2.5s infinite linear",
                    backgroundColor: "#6B46C1",
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#"
              className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-lg transition-transform transform hover:-translate-y-1"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-white text-lg transition-transform transform hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full text-white text-lg transition-transform transform hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-lg transition-transform transform hover:-translate-y-1"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoProfile;
