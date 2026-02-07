interface ServiceTabsProps {
  active: string;
  setActive: (key: string) => void;
}

export default function ServiceTabs({ active, setActive }: ServiceTabsProps) {
  return (
    <div className="flex lg:flex-col gap-4 justify-center lg:justify-start ">
      {["ai", "workflow"].map((key) => (
        <button
          key={key}
          onClick={() => setActive(key)}
          className={`relative px-6 py-3 rounded-xl text-lg font-medium backdrop-blur transition 
            ${
              active === key
                ? "bg-white/15 text-white "
                : "bg-white/5 text-gray-300"
            }`}
        >
          {key === "ai" ? "AI Chatbot" : "Workflow Automation"}

          {active === key && (
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-b-xl " />
          )}
        </button>
      ))}
    </div>
  );
}
