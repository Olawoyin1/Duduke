
interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    image: string;
    results?: string[];
  }
  
  const ProjectCard = ({ title, category, description, image, results = [] }: ProjectCardProps) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
        <div className="p-6">
          <span className="text-sm text-teal font-medium">{category}</span>
          <h3 className="text-xl sf font-semibold mt-1 text-navy">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          
          {results.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-navy sf mb-2">Results:</h4>
              <ul className="space-y-1">
                {results.map((result, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38B6FF]"></span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  