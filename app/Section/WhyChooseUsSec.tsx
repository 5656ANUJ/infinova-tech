import WhychooseusCard from "../Components/WhychooseusCard";

export default function WhyChooseUsSec() {
  const WhychooseusData = [
    {
      title: "Saves Your Time",
      description: "We handle content while you focus on your business.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Saves Your Time",
      description: "We handle content while you focus on your business.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Saves Your Time",
      description: "We handle content while you focus on your business.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Saves Your Time",
      description: "We handle content while you focus on your business.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Saves Your Time",
      description: "We handle content while you focus on your business.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Saves Your Time",
      description: "We handle content while you focus on your business.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center  px-5 md:px-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-5 md:gap-10 mt-10">
        {WhychooseusData.map((item, index) => (
          <WhychooseusCard
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
