import React from 'react';
import { Star, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gradient-to-br from-gray-900 to-black border-t border-amber-900/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-8 h-8 text-amber-400" fill="currentColor" />
              <span className="text-2xl font-serif text-white">AURELUX</span>
            </div>
            <p className="text-gray-400 mb-4">
              Joyas de lujo que perduran en el tiempo. Diseños exclusivos para clientes excepcionales.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>+57 322 3686187</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>AURELUX@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Medellin</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            
           
          </div>
        </div>

        <div className="border-t border-amber-900/20 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Aurelux Jewelry. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;