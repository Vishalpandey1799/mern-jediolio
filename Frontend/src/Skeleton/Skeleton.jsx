const Skeleton = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-80 bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden animate-pulse">
        <div className="p-6 text-center bg-gradient-to-r from-blue-600 to-cyan-400">
          <div className="w-32 h-32 rounded-full border-4 border-white mx-auto bg-gray-300 dark:bg-gray-700"></div>
          <h1 className="text-white text-2xl font-bold mt-4 bg-gray-300 dark:bg-gray-700 h-6 w-48 mx-auto"></h1>
          <span className="text-white bg-black bg-opacity-20 px-4 py-1 rounded-full text-sm font-medium inline-block mt-2  dark:bg-gray-700 h-5 w-24 mx-auto"></span>
        </div>
        <div className="p-6 text-center">
          <p className="text-gray-600 mb-4 text-sm bg-gray-300 dark:bg-gray-700 h-6 w-48 mx-auto"></p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 h-6 w-24 rounded-full animate-pulse"
              ></div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 w-10 h-10 rounded-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
