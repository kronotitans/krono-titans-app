import React from "react";
import { Send, Twitter, MessageCircle, Briefcase } from "lucide-react";

const Socials = () => {
  const socialLinks = [
    {
      name: "Telegram Mini App",
      icon: <Send size={24} />,
      url: "https://t.me/Krono_Titans_bot",
      label: "Telegram Mini App",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://x.com/KronoTitans",
      label: "Twitter Profile",
    },
    {
      name: "Telegram Channel",
      icon: <MessageCircle size={24} />,
      url: "https://t.me/KronoTitansHQ",
      label: "Official Telegram Channel",
    },
    {
      name: "Sponsors",
      icon: <Briefcase size={24} />,
      url: "https://t.me/KVX_Sponsors",
      label: "Sponsors & Enquiries",
    },
  ];

  return (
    <div className="sm:max-w-2xl my-12 mx-auto">
      <div className="flex justify-center items-center gap-6 p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label={social.label}
          >
            <div
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-gray-800"
              title={social.name}
            >
              <div className="text-white">{social.icon}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
