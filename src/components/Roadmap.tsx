const roadmapData = [
  {
    month: "February 2025",
    tasks: ["Launch basic game", "Introduce mining updates and earnable tasks"],
  },
  {
    month: "March 2025",
    tasks: ["Launch referral system, level ratings, and daily rewards"],
  },
  {
    month: "April 2025",
    tasks: [
      "Special cards and combo systems",
      "Announce TON blockchain integration",
    ],
  },
  {
    month: "May 2025",
    tasks: [
      "Develop on-chain infrastructure",
      "Implement in-game wallets",
      "Introduce Web3 pre-listing quests",
    ],
  },
  {
    month: "June 2025",
    tasks: [
      "Release characters and skins",
      "MVP for third-party game integration",
      "Tech for the largest-ever Airdrop",
    ],
  },
  {
    month: "July 2025",
    tasks: ["Launch achievements and gaming platform"],
  },
  {
    month: "August 2025",
    tasks: [
      "Interlude season launch",
      "Implement tech for the largest Airdrop",
      "TGE and Airdrop distribution",
      "$KTN Listing",
    ],
  },
  {
    month: "September 2025",
    tasks: [
      "Cosmic Clash Season 2 launch",
      "Expand game library",
      "Integrate external payment systems",
    ],
  },
  {
    month: "October 2025",
    tasks: [
      "PWA for payment service integration",
      "Release games from external developers",
      "NFT mechanics in Season 2",
    ],
  },
  {
    month: "November 2025",
    tasks: [
      "Integrate ad network into store products",
      "Launch clans with integrated mechanics",
    ],
  },
  {
    month: "December 2025",
    tasks: [
      "Release two major titles with full token integration",
      "Introduce RMT (Real Money Trading)",
    ],
  },
  {
    month: "January 2026",
    tasks: [
      "Competitive clan championship for Cosmic Clash 2.0",
      "Expand partner games with advanced development",
    ],
  },
  {
    month: "February 2026",
    tasks: [
      "Second-phase Airdrop",
      "UGC (User-Generated Content) tools",
      "Launch internal NFT marketplace",
    ],
  },
  {
    month: "Spring 2026",
    tasks: ["Move beyond PWA; integrate with desktop games"],
  },
];

const Milestone = ({ data }: { data: { month: string; tasks: string[] } }) => {
  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 bg-gradient-to-b from-slate-700/80 to-slate-800/90 backdrop-blur-sm rounded-2xl max-w-[1000px] border border-zinc-700/50">
      <h1 className="font-bold text-3xl mb-4">{data.month}</h1>
      <ul className="flex flex-col gap-1">
        {data.tasks.map((t) => {
          return (
            <li key={t} className="flex items-start">
              <span className="mr-2 text-blue-400">•</span>
              <span>{t}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div id="roadmap">
      <h1 className="font-bold text-6xl text-center mt-10 mb-6">Roadmap</h1>
      <div className="flex flex-col max-w-[1000px] mx-auto gap-3 p-4">
        {roadmapData.map((m) => {
          return <Milestone key={m.month} data={m} />;
        })}
      </div>
    </div>
  );
};

export default Roadmap;
