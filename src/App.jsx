import React from 'react';
import Galeria from './components/Galeria';
import CalendarioReserva from './components/CalendarioReserva';

export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold text-pink-600">Amora Nails</h1>
            </div>
            <nav className="hidden md:flex space-x-12">
              <a href="#services" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Servicios</a>
              <a href="#booking" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Reservar</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Belleza y Elegancia en tus Manos
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestros servicios de manicura profesional con diseños únicos y cuidado personalizado.
          </p>
          <a href="#booking" className="inline-block bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
            Reserva tu Cita
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h3>
            <p className="text-gray-600 text-lg">Cuidado profesional con atención personalizada</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-pink-600 mb-4">Manicura Clásica</h4>
              <p className="text-gray-600 leading-relaxed">Cuidado básico con esmaltado tradicional de alta calidad.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-pink-600 mb-4">Manicura Francesa</h4>
              <p className="text-gray-600 leading-relaxed">Estilo elegante con puntas blancas naturales y sofisticadas.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-pink-600 mb-4">Diseños Artísticos</h4>
              <p className="text-gray-600 leading-relaxed">Creaciones personalizadas y únicas según tus preferencias.</p>
            </div>
          </div>
        </div>
      </section>

      <Galeria />

      <CalendarioReserva />

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-4xl font-bold mb-4">Amora Nails</h4>
          <p className="mb-6 text-gray-300 text-lg">Tu belleza, nuestra pasión.</p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">Contacto: info@amora-nails.com | Tel: +123 456 7890</p>
            <p className="text-gray-500 text-sm mt-4">© 2024 Amora Nails. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

