
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;    
  description: string;
  icon: IconType | LucideIcon;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, features }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover-lift">
      <div className="bg-[#202340] p-4">
        <div className="flex items-center gap-2">
            <div className="bg-[#38B6FF]/20 flex items-center justify-center rounded-full h-12 text-white min-w-12">
                <Icon className="text-teal" size={24} />
            </div>
            <div className='flex flex-col'>

            <h3 className="text-md sf font-semibold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
            </div>
        </div>
            
        <div>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38B6FF]"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
