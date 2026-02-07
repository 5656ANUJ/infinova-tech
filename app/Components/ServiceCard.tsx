interface ServiceCardProps {
  title: string;
  description: string;
  useCases?: string;
  image?: string;
  isLeft?: boolean;
}

export default function ServiceCard({
  title,
  description,
  useCases,
  image,
}: ServiceCardProps) {
  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 lg:p-10 max-w-[550px] shadow-xl">
      {image && (
        <div className="mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      <h3 className="text-xl lg:text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-gray-200 leading-relaxed text-sm lg:text-base">
        {description}
      </p>

      {useCases && (
        <p className="mt-4 text-sm text-gray-300">
          <strong className="text-white">Use Cases:</strong> {useCases}
        </p>
      )}
    </div>
  );
}
