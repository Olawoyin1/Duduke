
import { useEffect, useState } from 'react';
import { AiOutlineMessage } from "react-icons/ai";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="https://wa.me/9078359881" // Replace with actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-[#38B6FF] p-3 rounded-full text-white shadow-lg hover-lift hover:bg-navy transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <AiOutlineMessage size={24} />
    </a>
  );
};

export default WhatsAppButton;
