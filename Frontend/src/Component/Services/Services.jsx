const Services = () => {
    return (
        <section id="services" className="w-full py-12 px-4 md:px-10 bg-gray-100">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Services</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center flex flex-col min-h-[150px] hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-xl font-semibold text-blue-500">Instant Portfolio Creation</h2>
                    <p className="text-white mt-2 flex-grow">
                        Just enter your details, and within seconds, get a fully responsive and professional-looking portfolio ready to share!
                    </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center flex flex-col min-h-[150px] hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-xl font-semibold text-blue-500">Custom Portfolio Link</h2>
                    <p className="text-white mt-2 flex-grow">
                        Get a unique shareable link for your portfolio. Showcase your work effortlessly across platforms with a personal touch! 🔗✨
                    </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center flex flex-col min-h-[150px] hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-xl font-semibold text-blue-500">QR Code for Quick Sharing</h2>
                    <p className="text-white mt-2 flex-grow">
                        Scan & share! Your portfolio comes with a custom QR code for instant access, making networking super smooth! 📲⚡
                    </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center flex flex-col min-h-[150px] sm:col-span-2 lg:col-span-1 hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-xl font-semibold text-green-500">It's All for Free! 🎉</h2>
                    <p className="text-white mt-2 flex-grow">
                        Yes, you read it right! No hidden charges, no premium plans. Create, share, and showcase your work without spending a single penny! 💸✨
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
