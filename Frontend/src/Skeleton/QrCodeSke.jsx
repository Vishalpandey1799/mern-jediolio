const QrCodeSke = () => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-800 rounded-lg shadow-md max-w-sm mx-auto animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-6 w-24 bg-gray-700 rounded"></div>
        <div className="h-10 w-24 bg-gray-700 rounded"></div>
      </div>

      <div className="relative flex justify-center mt-4">
        <div className="h-[250px] w-[250px] bg-gray-700 rounded-lg"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-600 rounded-full border-2 border-gray-500 shadow-md"></div>
          <div className="mt-2 h-4 w-16 bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default QrCodeSke;
