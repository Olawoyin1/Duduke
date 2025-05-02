
// import { ArrowRight, ShoppingCart, Instagram, Briefcase, Calendar, ClipboardList, MessageSquare } from "lucide-react";
import {
  LuArrowRight,
  LuShoppingCart,
  LuInstagram,
  // LuBriefcase,
  // LuClipboardList,
  LuMessageSquare,
} from "react-icons/lu";

import { IoBriefcaseOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";


const Home = () => {
  const services = [
    {
      title: "eCommerce Expertise",
      description: "Build and optimize your online store",
      icon: LuShoppingCart,
      features: [
        "Shopify & WooCommerce store setup",
        "Product listings & optimization",
        "SEO for better visibility",
        "Payment gateway integration"
      ]
    },
    {
      title: "Social Media Management",
      description: "Engage your audience effectively",
      icon: LuInstagram,
      features: [
        "Content creation & scheduling",
        "Community engagement",
        "Paid advertising campaigns",
        "Analytics & reporting"
      ]
    },
    {
      title: "Virtual Assistant Services",
      description: "Support for your daily operations",
      icon: IoBriefcaseOutline,
      features: [
        "Email management",
        "Calendar & scheduling",
        "Administrative tasks",
        "Data entry & organization"
      ]
    }
  ];

  const projects = [
    {
      title: "Boutique Clothing Store",
      category: "eCommerce",
      description: "Complete Shopify store setup with custom theme and product catalog.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80",
      results: ["50% increase in conversion rate", "Improved user experience", "Mobile optimization"]
    },
    {
      title: "Wellness Brand Campaign",
      category: "Social Media",
      description: "3-month social media strategy with content creation and paid advertising.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=80",
      results: ["2x follower growth", "30% engagement increase", "15% rise in direct sales"]
    }
  ];

  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-10 bg-softwhite">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sf font-bold text-navy mb-4">Why You Should Work With Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I help businesses establish and improve their online presence with specialized services
              in eCommerce, social media, and virtual assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow hover-lift">
              <div className="w-14 h-14 bg-[#f1f1f16c] rounded-full flex items-center justify-center mb-4">
                <IoCalendarClearOutline className="text-navy" size={24} />
              </div>
              <h3 className="text-xl sf font-semibold mb-2 text-navy">Reliable Support</h3>
              <p className="text-gray-600">
                Consistent, dependable service with quick response times and clear communication.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow hover-lift">
              <div className="w-14 h-14 bg-[#f1f1f16c] rounded-full flex items-center justify-center mb-4">
                <GrUserExpert className="text-navy" size={24} />
              </div>
              <h3 className="text-xl sf font-semibold mb-2 text-navy">Industry Expertise</h3>
              <p className="text-gray-600">
                Years of experience working with various businesses across multiple industries.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow hover-lift">
              <div className="w-14 h-14 bg-[#f1f1f16c] rounded-full flex items-center justify-center mb-4">
                <LuMessageSquare className="text-navy" size={24} />
              </div>
              <h3 className="text-xl sf font-semibold mb-2 text-navy">Results-Driven</h3>
              <p className="text-gray-600">
                Focused on delivering measurable outcomes that help grow your business.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium hover:text-navy transition-colors">
              Learn more about me
              <LuArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">My Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to help your business thrive in the digital landscape.
              Each service is tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="bg-[#202340] text-sm hover:bg-teal text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center gap-2"
            >
              View All Services
              <LuArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-10 bg-softwhite">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of my recent work helping clients achieve their business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex text-sm items-center gap-2 text-teal font-medium hover:text-navy transition-colors">
              View all projects
              <LuArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[#202340] py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-[#38B6FF]/20 to-[#202340]/0 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white sf mb-4">Ready to Grow Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to take your online presence to the next level with 
              tailored solutions for your unique needs.
            </p>
            <Link
              to="/contact"
              className="bg-[#38B6FF] hover:bg-white hover:text-[#202340] text-sm text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Get in Touch Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
