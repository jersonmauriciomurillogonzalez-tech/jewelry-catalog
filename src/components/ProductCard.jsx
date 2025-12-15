import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-amber-900/20 hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20">
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {product.featured && (
          <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <p className="text-amber-400 text-xs uppercase tracking-wider mb-2">{product.category}</p>
        <h3 className="text-white text-xl font-serif mb-3">{product.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-amber-400">
            ${product.price.toLocaleString()}
          </span>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4" fill="currentColor" />
            ))}
          </div>
        </div>
        
        <button className="w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
          <ShoppingBag className="w-5 h-5" />
         <a href="https://w.app/aurelux">
  <span>Consultar Disponibilidad</span>
</a>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;