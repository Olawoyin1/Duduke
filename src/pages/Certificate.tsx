
import { Award, BookOpen, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Certifications = () => {
  const certifications = [
    {
      title: "Virtual Assistance",
      issuer: "ALX AFRICA",
      icon: Briefcase,
      description: "Comprehensive training in virtual assistance, including client management, effective communication, and administrative skills.",
      year: "2023",
      image: "../../Images/cert1.jpeg"
    },
    {
      title: "Social Media Manager Certificate",
      issuer: "HubSpot Academy",
      icon: BookOpen,
      description: "Advanced social media management course covering content strategy, analytics, platform optimization, and audience engagement.",
      year: "2022",
      image: "../../Images/cert2.jpeg"
    },
    {
      title: "Volunteering as Social Media Manager",
      issuer: "UNICEF & T-TAI",
      icon: Award,
      description: "Hands-on experience managing social media campaigns for humanitarian causes, creating engaging content that drives awareness and action.",
      year: "2022",
      image: "../../Images/cert3.jpeg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h1>
            <p className="text-xl text-gray-300">
              Professional credentials that validate my expertise and commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold nt mb-4">My Professional Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I continuously invest in my professional development to ensure I can provide the most up-to-date and effective services for my clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                <div className="relative h-53 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} certification`}
                    className="w-full h-full  transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="pb p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold sf text-white">{cert.title}</h3>
                    <cert.icon className="text-white" size={24} />
                  </div>
                  <p className="text-white/80 mt-1">{cert.issuer}</p>
                  <div className="mt-2 sf inline-block bg-white/20 text-white text-sm font-medium px-2 py-1 rounded">
                    {cert.year}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 md:p-10 rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold nt sf mb-3">Continuous Learning</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                In addition to these formal certifications, I regularly participate in workshops, webinars, and industry conferences to stay current with best practices and emerging trends.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                to="/contact" 
                className="navy hover:bg-[#38B6FF] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center gap-2"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
