
// import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="navy sf text-white py-10">
      <div className="container text-center">
        

        <div className="sf text-2xl font-extrabold">AZEEZ ADUKE</div>
        
        <div>
            <div className="flex justify-center space-x-4 my-4">
              <a href="#" className="text-gray-300 hover:text-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
