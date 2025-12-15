import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Cadena Cruz Verde",
    image: "https://laguacajoyeros.com/cdn/shop/files/joyasparahombreenoro18k50.webp?v=1761173687&width=3840",
  },
  {
    id: 2,
    name: "Anillo oro Caballo ",
    image: "https://laguacajoyeros.com/cdn/shop/files/ANILLOSHOMBRE18K570.jpg?v=1726087502&width=832",
  },
  {
    id: 5,
    name: "Cadena Tejido Trébol Negro 45cm",
    image: "https://laguacajoyeros.com/cdn/shop/files/DSC_8171.webp?v=1764173004&width=832",
  }
];

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(251, 191, 36) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          <p className="text-amber-400 text-sm md:text-base tracking-widest uppercase mb-4">
            Exclusividad y Elegancia
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Joyas que Definen
            <br />
            <span className="text-amber-400">Tu Estilo</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Descubre nuestra exclusiva colección de joyas artesanales,
            diseñadas para momentos extraordinarios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#coleccion"
              className="group bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Ver Colección
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
           
          </div>
        </div>

        {/* Featured Images */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="relative group overflow-hidden rounded-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-serif">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;