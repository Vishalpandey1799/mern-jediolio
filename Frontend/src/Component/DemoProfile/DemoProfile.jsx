const DemoProfile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-80 bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
        <div className="p-6 text-center bg-gradient-to-r from-blue-600 to-cyan-400">
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
            {["JavaScript", "React", "Node.js", "Python", "UI/UX"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700 hover:bg-blue-600 hover:text-white transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            {[
              { href: "#", color: "bg-blue-500", icon: "🐦" },
              { href: "#", color: "bg-gray-800", icon: "🐙" },
              { href: "#", color: "bg-blue-700", icon: "🔗" },
              { href: "#", color: "bg-pink-500", icon: "🎨" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`${social.color} w-10 h-10 flex items-center justify-center rounded-full text-white text-lg transition-transform transform hover:-translate-y-1`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoProfile;
