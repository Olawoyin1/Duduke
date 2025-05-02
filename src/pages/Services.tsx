
import { Calendar, ClipboardList, FileText, Settings, Search, BarChart, FileImage, RefreshCcw, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

import {
  // LuArrowRight,
  LuShoppingCart,
  LuInstagram,
  // LuBriefcase,
  // LuClipboardList,
  LuMessageSquare,
} from "react-icons/lu";

import { IoBriefcaseOutline } from "react-icons/io5";
// import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const ecommerceServices = [
    {
      title: "Store Setup & Design",
      description: "Complete eCommerce store setup with optimized design",
      icon: LuShoppingCart,
      features: [
        "Shopify or WooCommerce store creation",
        "Theme selection and customization",
        "Mobile-responsive design",
        "Payment gateway integration"
      ]
    },
    {
      title: "Product Listings",
      description: "Professional product listings that convert",
      icon: ClipboardList,
      features: [
        "Product data entry and organization",
        "SEO-friendly product descriptions",
        "High-quality image optimization",
        "Product variant management"
      ]
    },
    {
      title: "Store Optimization",
      description: "Enhance your store's performance and conversion rate",
      icon: Settings,
      features: [
        "Site speed optimization",
        "Checkout process streamlining",
        "Cross-selling and upselling setup",
        "Abandoned cart recovery implementation"
      ]
    },
    {
      title: "SEO & Marketing",
      description: "Drive more qualified traffic to your online store",
      icon: Search,
      features: [
        "Keyword research and implementation",
        "Meta descriptions and product tags",
        "Google Shopping integration",
        "Schema markup for better visibility"
      ]
    }
  ];

  const socialMediaServices = [
    {
      title: "Content Creation",
      description: "Engaging content tailored for your audience",
      icon: LuInstagram,
      features: [
        "Custom graphics and visual content",
        "Caption writing and hashtag research",
        "Content calendar creation",
        "Brand voice development"
      ]
    },
    {
      title: "Community Management",
      description: "Active engagement with your audience",
      icon: LuMessageSquare,
      features: [
        "Comment and message monitoring",
        "Audience interaction and engagement",
        "Community growth strategies",
        "Reputation management"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance and optimize your strategy",
      icon: BarChart,
      features: [
        "Performance metrics tracking",
        "Monthly analytics reports",
        "Competitor analysis",
        "Strategy adjustment recommendations"
      ]
    },
    {
      title: "Social Media Design",
      description: "Eye-catching visuals for your social platforms",
      icon: FileImage,
      features: [
        "Profile and cover photo design",
        "Post template creation",
        "Story highlights covers",
        "Brand-consistent visuals"
      ]
    }
  ];

  const vaServices = [
    {
      title: "Email Management",
      description: "Organized and efficient inbox handling",
      icon: FileText,
      features: [
        "Email organization and filtering",
        "Response drafting and sending",
        "Follow-up management",
        "Newsletter creation and distribution"
      ]
    },
    {
      title: "Scheduling & Admin",
      description: "Keep your business running smoothly",
      icon: Calendar,
      features: [
        "Calendar management",
        "Meeting scheduling",
        "Document preparation",
        "Data entry and organization"
      ]
    },
    {
      title: "Project Management",
      description: "Streamlined workflow and project tracking",
      icon: RefreshCcw,
      features: [
        "Project setup and organization",
        "Task assignment and tracking",
        "Deadline management",
        "Progress reporting"
      ]
    },
    {
      title: "Business Growth Support",
      description: "Strategic assistance to scale your business",
      icon: TrendingUp,
      features: [
        "Market research and analysis",
        "Competitor monitoring",
        "Business process documentation",
        "SOP creation and implementation"
      ]
    }
  ];

  const serviceCategories = [
    {
      title: "eCommerce Services",
      description: "Build and optimize your online store to increase sales and improve customer experience.",
      services: ecommerceServices
    },
    {
      title: "Social Media Management",
      description: "Grow your brand presence and engage with your audience effectively across social platforms.",
      services: socialMediaServices
    },
    {
      title: "Virtual Assistant Services",
      description: "Get administrative support to focus on growing your business while I handle the details.",
      services: vaServices
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl sf font-bold mb-6">My Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive solutions to help your business thrive online
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold nt mb-4">What I Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I provide a range of services to help businesses establish and grow their online presence.
              Each service is tailored to meet your specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg text-center hover-lift">
              <div className="w-16 h-16 bg-[#202340]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuShoppingCart className="nt" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 sf nt">eCommerce</h3>
              <p className="text-gray-600">
                Build and optimize your online store to increase sales and improve customer experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center hover-lift">
              <div className="w-16 h-16 bg-[#202340]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuInstagram className="nt" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 sf nt">Social Media</h3>
              <p className="text-gray-600">
                Grow your brand presence and engage with your audience effectively across social platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center hover-lift">
              <div className="w-16 h-16 bg-[#202340]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IoBriefcaseOutline className="nt" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 sf nt">Virtual Assistance</h3>
              <p className="text-gray-600">
                Get administrative support to focus on growing your business while I handle the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      {serviceCategories.map((category, index) => (
        <section 
          key={index} 
          className={`py-10 ${index % 2 === 1 ? '' : 'bg-white'}`}
        >
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sf nt mb-4">{category.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <ServiceCard key={serviceIndex} {...service} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-10 bg-softwhite">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sf nt mb-4">My Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to ensure your project is completed efficiently and effectively.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block h-1 pb absolute top-24 left-0 right-0 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
              <div className="bg-white p-6 rounded-lg shadow text-center hover-lift">
                <div className="w-12 h-12 pb rounded-full flex items-center justify-center mx-auto mb-4 text-white sf font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2 sf nt">Consultation</h3>
                <p className="text-gray-600">
                  Initial meeting to understand your business needs and goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow text-center hover-lift">
                <div className="w-12 h-12 pb rounded-full flex items-center justify-center mx-auto mb-4 text-white sf font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2 sf nt">Strategy</h3>
                <p className="text-gray-600">
                  Developing a tailored plan to achieve your specific objectives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow text-center hover-lift">
                <div className="w-12 h-12 pb rounded-full flex items-center justify-center mx-auto mb-4 text-white sf font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2 sf nt">Implementation</h3>
                <p className="text-gray-600">
                  Executing the plan with regular updates and communication.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow text-center hover-lift">
                <div className="w-12 h-12 pb rounded-full flex items-center justify-center mx-auto mb-4 text-white sf font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2 sf nt">Evaluation</h3>
                <p className="text-gray-600">
                  Analyzing results and refining strategies for continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="navy py-16 text-white">
        <div className="container">
          <div className="pb/10 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold sf mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how I can help your business grow online.
            </p>
            <Link
              to="/contact"
              className="pb hover:bg-white hover:nt text-white text-sm font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Contact Me Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
