
import { useState } from "react";
import {    Send, Loader2 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";


const Contact = () => {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // toast({
      //   title: "Message sent!",
      //   description: "Thanks for reaching out. I'll get back to you soon.",
      // });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="navy text-white py-20">
        <div className="container-narrow px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="sf text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Let's discuss how I can help you achieve your business goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-10 bg-softwhite">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow text-center hover-lift">
              <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GoMail className="nt" size={24} />
              </div>
              <h3 className="text-lg font-semibold sf mb-2 nt">Email</h3>
              <a 
                href="mailto:hello@portfolio.com" 
                className="text-sm hover:nt transition-colors"
              >
                azeezaduke222@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center hover-lift">
              <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BsTelephone className="nt" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 sf nt">Phone</h3>
              <a 
                href="tel:+1234567890" 
                className="text-sm hover:nt transition-colors"
              >
                +(234) 907-835-9881
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center hover-lift">
              <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SlLocationPin className="nt" size={24} />
              </div>
              <h3 className="text-lg font-semibold sf mb-2 nt">Location</h3>
              <p className="text-gray-600">Osun State, Nigeria</p>
            </div>
          </div>

          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold nt mb-4">Connect With Me</h2>
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="bg-white p-3 rounded-full shadow-md hover:bg-teal hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="bg-white p-3 rounded-full shadow-md hover:bg-teal hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="bg-white p-3 rounded-full shadow-md hover:bg-teal hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="#" 
                className="bg-white p-3 rounded-full shadow-md hover:bg-teal hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold nt sf mb-6">Send Me a Message</h2>
              <p className="text-gray-600 mb-6">
                Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal  outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-[#38B6FF]-2  outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="eCommerce Services">eCommerce Services</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Virtual Assistance">Virtual Assistance</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-teal  outline-none transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 navy hover:bg-teal text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 w-full ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="navy rounded-lg overflow-hidden shadow-xl">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 sf">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 pc">What services do you offer?</h4>
                    <p className="text-gray-300">
                      I specialize in eCommerce solutions, social media management, and virtual assistance services tailored to your specific needs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 pc">How much do your services cost?</h4>
                    <p className="text-gray-300">
                      Pricing varies based on project scope and requirements. Contact me for a customized quote.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 pc">What is your turnaround time?</h4>
                    <p className="text-gray-300">
                      Turnaround time depends on the complexity of the project. I'll provide a timeline during our initial consultation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 pc">Do you offer ongoing support?</h4>
                    <p className="text-gray-300">
                      Yes, I offer various support packages to help maintain and grow your online presence after the initial project is complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
