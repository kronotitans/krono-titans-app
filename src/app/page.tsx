import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg animate-pulse"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Krono Titans
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#roadmap"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Roadmap
              </a>
              <a
                href="https://whitepaper.kronotitans.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Whitepaper
              </a>
              <a
                href="#socials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Socials
              </a>
            </nav>

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              Invest in KTN Now
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <Hero />
        <Roadmap />
        <Socials />
      </main>
    </div>
  );
}
