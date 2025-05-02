import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const typingWords = [
    "A Virtual Assistant",
    "A Social Media Manager",
    "An eCommerce Expert"
  ];

  return (
    <section className="bg-gradient-to-br from-[#202340] to-[#2C3062] text-white py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sf md:text-5xl font-bold leading-tight">
              <span className="text-teal">I'm Azeez Aisha</span><br />
              
              {/* Mobile view (< md) */}
              <span className="block md:hidden">
                <TypewriterEffect words={typingWords} />
              </span>

              {/* Desktop view (≥ md) */}
              <span className="hidden md:block">
                Helping Businesses <span className="pc">Grow Online</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300">
              {/* Mobile (< md) */}
              <span className="block md:hidden">
                Transforming your online presence with specialized skills and proven strategies for business growth.
              </span>

              {/* Desktop (≥ md) */}
              <span className="hidden md:block">
                Expert eCommerce, social media management, and virtual assistance services
                to take your business to the next level.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-teal text-sm  border border-gray-600  hover:bg-white hover:text-gray-800 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center"
              >
                Let's Work Together
              </Link>
              <Link
                to="/services"
                className="group border text-sm border-gray-600 text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Explore Services
                <GoArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Cards Section */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal/20 rounded-full blur-xl"></div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'eCommerce', icon: 'E', desc: 'Shopify & WooCommerce' },
                    { label: 'Social Media', icon: 'S', desc: 'Strategy & Content' },
                    { label: 'VA Services', icon: 'V', desc: 'Admin & Support' },
                    { label: 'More', icon: '+', desc: 'Custom Solutions', isPrimary: true },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-lg p-6 hover:scale-105 transition-transform duration-300 ${
                        item.isPrimary ? 'bg-[#38B6FF] text-white' : 'bg-white/10'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 ${
                          item.isPrimary ? 'bg-white/20' : 'bg-[#38B6FF]/20'
                        } rounded-full flex items-center justify-center mb-4`}
                      >
                        <span
                          className={`text-2xl sf font-bold ${
                            item.isPrimary ? 'text-white' : 'text-teal'
                          }`}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <h3 className="font-medium sf">{item.label}</h3>
                      <p
                        className={`text-sm mt-1 ${
                          item.isPrimary ? 'text-teal-100' : 'text-gray-300'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
