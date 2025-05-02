
// import {   Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";

// import { IoBriefcaseOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";

const About = () => {
  const tools = [
    "Meta Ads Manager",
    "Shopify",
    "WooCommerce",
    "Mailchimp",
    "Google Analytics",
    "Trello",
    "Asana",
    "Canva",
    "Zoom",
    "Mailchimp",
    "Google Workspace",
    "Google Calendar",
    "IBM SPSS",
    "Capcut",
    "Inshot",
    "MS Office",
    "Google Drive",
    "Slack",
    "Zapier",
    "WordPress"
  ];

  const experiences = [
    {
      position: "eCommerce Specialist",
      company: "Digital Solutions Agency",
      period: "2020 - Present",
      description: "Managing client eCommerce projects, optimizing online stores, and implementing digital marketing strategies."
    },
    {
      position: "Social Media Manager",
      company: "Creative Marketing Co.",
      period: "2018 - 2020",
      description: "Created and executed social media campaigns for various clients across different industries."
    },
    {
      position: "Virtual Assistant",
      company: "Freelance",
      period: "2016 - 2018",
      description: "Provided administrative support to small businesses and entrepreneurs."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="navy text-white py-10">
        <div className="container">
          <div className="flex items-center justify-center flex-col mx-auto text-center">
            <img src="../../Images/duduke1.png" className="w-100" alt="" />
            <h1 className="text-4xl md:text-5xl font-bold sf mb-6">About Me</h1>
            <p className="text-xl text-gray-300">
              I'm a dedicated professional helping businesses establish and improve their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold nt sf mb-6">My Background</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With over 5 years of experience in digital marketing and eCommerce, I've helped dozens of businesses
                  improve their online presence and increase their revenue.
                </p>
                <p>
                  I specialize in creating effective eCommerce stores, managing engaging social media accounts, and
                  providing reliable virtual assistance that takes the administrative burden off your shoulders.
                </p>
                <p>
                  My approach combines technical knowledge with creative thinking to deliver solutions that
                  truly work for your specific business needs.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm navy hover:bg-teal text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
                >
                  <SlSocialLinkedin size={18} />
                  Connect on LinkedIn
                </Link>
              </div>
            </div>

            <div className="bg-softwhite lg:p-8 rounded-lg">
              <h3 className="text-2xl font-semibold nt sf mb-6">Professional Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-[#38B6FF] pl-6 relative">
                    <div className="absolute w-3 h-3 pb rounded-full -left-[7px] top-1.5"></div>
                    <h4 className="text-lg font-medium sf nt">{exp.position}</h4>
                    <p className="pc font-bold">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Expertise Section */}
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold nt mb-4">Tools & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm proficient in a wide range of tools and platforms to deliver the best results for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover-lift flex items-center gap-2">
                <FiCheckCircle size={16} className="pc" />
                <span className="text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sf font-bold text-navy mb-4">Why Clients Choose Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I pride myself on delivering exceptional service that keeps clients coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-[#38B6FF] hover-lift">
              <h3 className="text-xl font-semibold mb-3 sf nt">Personalized Approach</h3>
              <p className="text-gray-600">
                Every client receives a tailored strategy based on their specific business needs and goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-[#38B6FF] hover-lift">
              <h3 className="text-xl font-semibold mb-3 sf nt">Clear Communication</h3>
              <p className="text-gray-600">
                Regular updates and transparent communication throughout our working relationship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-[#38B6FF] hover-lift">
              <h3 className="text-xl font-semibold sf mb-3 nt">Results-Oriented</h3>
              <p className="text-gray-600">
                Focus on delivering measurable outcomes that contribute to your business growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-[#38B6FF] hover-lift">
              <h3 className="text-xl font-semibold sf mb-3 nt">Timely Delivery</h3>
              <p className="text-gray-600">
                Projects are completed on schedule, with respect for deadlines and timelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-[#38B6FF] hover-lift">
              <h3 className="text-xl font-semibold sf mb-3 nt">Technical Expertise</h3>
              <p className="text-gray-600">
                Strong technical background combined with creative problem-solving skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-[#38B6FF] hover-lift">
              <h3 className="text-xl font-semibold sf mb-3 nt">Continuous Learning</h3>
              <p className="text-gray-600">
                Always staying updated with the latest industry trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#202340] to-[#2C3062] py-16 text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold sf mb-4">Ready to Work Together?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help your business grow with my eCommerce, social media, 
              and virtual assistance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-sm nt hover:bg-teal hover:text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="bg-teal text-sm hover:bg-white pb text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
