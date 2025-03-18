const LinkSkeleton = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-800 rounded-lg shadow-lg max-w-sm mx-auto animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="h-5 w-32 bg-gray-700 rounded"></div>
        <div className="h-10 w-10 bg-gray-700 rounded-lg"></div>
      </div>

      <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded-lg">
        <div className="h-5 w-40 bg-gray-600 rounded"></div>
        <div className="h-4 w-10 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export default LinkSkeleton;
