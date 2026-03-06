import React from 'react';
import nails1 from '../assets/nails1.png';
import nails2 from '../assets/nails2.png';
import nails3 from '../assets/nails3.png';
import nails4 from '../assets/nails4.png';
import nails5 from '../assets/nails5.png';
import nails6 from '../assets/nails6.png';

const Galeria = () => {
  const imagenes = [nails1, nails2, nails3, nails4, nails5, nails6];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-3">Galería de Diseños</h3>
          <p className="text-gray-600 text-lg">Inspírate con nuestras creaciones únicas</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {imagenes.map((src, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={src}
                alt={`Diseño de uñas ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;