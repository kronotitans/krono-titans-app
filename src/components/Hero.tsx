import ContractCard from "./ContractCard";

const Hero = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="relative">
        <div className="text-center space-y-8 py-20">
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Secure. Futuristic. Limitless.
            </span>
          </h1>

          <p className="font-semibold text-2xl text-gray-400 max-w-2xl mx-auto">
            Get Ready for the Future of Gaming
          </p>

          <ContractCard address="UQBuURAhP4rhEjNqLD94ox_py47osrXZW_SWY3Yp6-wzaFJf" />

          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
              Invest in KTN Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
