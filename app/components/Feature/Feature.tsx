import Icon, { type IconName } from "../Icon/Icon";

interface FeatureProps {
  icon: IconName;
  title: string;
  description: string;
}

export function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-blue-500 rounded-md p-2">
        <Icon name={icon} className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}