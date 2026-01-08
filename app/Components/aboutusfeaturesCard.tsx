
interface CardProps {
  title: string;
  description: string;
  src: string;
}

export default function AboutusfeaturesCard({
  title,
  description,
  src,
}: CardProps) {
  return (
    <div className="flex flex-col justify-center md:justify-start items-center p-5 w-80 h-auto gap-2">
      <img src={src} alt={title} className="w-50 h-50" />
      <h1 className="text-2xl font-bold">{title} </h1>
      <p className="text-lg text-justify px-4 ">{description}</p>
    </div>
  );
}
