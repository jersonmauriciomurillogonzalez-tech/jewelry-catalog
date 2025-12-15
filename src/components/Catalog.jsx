import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Collar Diamante Eterno",
    price: 3500,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTE-jRFZ79hjHaJ65AE8vr__qqoXtLjnuw3cojMIf5geku3dxYVokATWL4RUgBiFQU9xmmV3DkkwTUfhccSAwEmurKu9yp2",
    category: "Collares",
    featured: false
  },
  {
    id: 2,
    name: "Anillo oro",
    price: 3500,
    image: "https://elitejoyeria.com.co/cdn/shop/files/24793c71-83a0-4b25-90c8-f8807ff5e420.jpg?v=1759942672&width={width}",
    category: "Anillos",
    featured: false
  },
  {
    id: 3,
    name: "Pendientes Esmeralda",
    price: 5000,
    image: "https://cdn-media.glamira.com/media/product/newgeneration/view/2/sku/eargle-e/diamond/emerald_AAA/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg",
    category: "Pendientes",
    featured: false
  },
  {
    id: 4,
    name: "Pulsera Oro ",
    price: 4000,
    image: "https://elitejoyeria.com.co/cdn/shop/files/WhatsAppImage2025-07-30at3.44.59PM.jpg?v=1753971780&width={width}",
    category: "Pulseras",
    featured: false
  },
  {
    id: 5,
    name: "Collar corto de oro ",
    price: 3100,
    image: "https://cloud-media.tous.com/medias/sys_master/images/he7/he5/14412167151646/515Wx515H_product_1004435000_2-20250507160206/515Wx515H-product-1004435000-2-20250507160206.jpg",
    category: "Exclusivos",
    featured: false
  },
  {
    id: 6,
    name: "Pulsera Tréboles Blancos 18cm",
    price: 3200,
    image: "https://laguacajoyeros.com/cdn/shop/files/DSC_8366.webp?v=1764276082&width=832",
    category: "Broches",
    featured: false
  }
];

const Catalog = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'Collares', 'Anillos', 'Pendientes', 'Pulseras', 'Exclusivos'];
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section id="coleccion" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm tracking-widest uppercase mb-2">Nuestra Colección</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Piezas Exclusivas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada joya es una obra de arte única, elaborada con los materiales más finos
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === cat 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 border border-amber-900/20'
              }`}
            >
              {cat === 'all' ? 'Todas' : cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;