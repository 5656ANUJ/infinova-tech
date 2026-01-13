import AIAutoCard from "../Components/AIAutoCard";

export default function WhyAi() {
  const data = [
    {
      title: "Increase Productivity",
      description:
        "Automate repetitive tasks and free up your team to focus on strategic initiatives.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Increase Productivity",
      description:
        "Automate repetitive tasks and free up your team to focus on strategic initiatives.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Increase Productivity",
      description:
        "Automate repetitive tasks and free up your team to focus on strategic initiatives.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-5 md:px-10 mt-5 md:mt-10">
      <h1 className="text-[#FFF] font-sora text-2xl md:text-3xl lg:text-4xl font-semibold capitalize leading-normal text-center">
        Why Choose Al Automation?
      </h1>
      <p className="text-white text-center font-mclaren text-sm md:text-md lg:text-xl font-normal leading-[150%]">
        Leverage the power of Al to transform your business operations and
        achieve remarkable outcomes.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mt-5 md:mt-10 px-5 md:px-10">
        {data.map((item, index) => (
          <AIAutoCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
