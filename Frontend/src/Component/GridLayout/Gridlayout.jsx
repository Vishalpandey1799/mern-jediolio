

const GridLayout = () => {
    return (
        <div className="w-full text-center flex flex-col items-center">

            <div className="grid grid-cols-3 gap-4 mb-6">
                {[...Array(9)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-20 h-20 rounded-2xl ${i % 2 === 0
                            ? "bg-teal-400/40 animate-breathe"
                            : "bg-rose-400/40 animate-blink"
                            }`}
                    />
                ))}
            </div>


            <h2 className="text-2xl font-bold mb-4">Hey</h2>
            <p className="text-base-content/60">Write a Review</p>
        </div>
    );
};

export default GridLayout;
