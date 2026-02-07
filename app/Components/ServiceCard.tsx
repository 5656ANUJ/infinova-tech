interface Service {
  title: string;
  description: string;
  useCases: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 lg:p-10 max-w-[550px] shadow-xl">
      <h3 className="text-xl lg:text-2xl font-semibold mb-4">
        {service.title}
      </h3>

      <p className="text-gray-200 leading-relaxed text-sm lg:text-base">
        {service.description}
      </p>

      <p className="mt-4 text-sm text-gray-300">
        <strong className="text-white">Use Cases:</strong> {service.useCases}
      </p>
    </div>
  );
}
