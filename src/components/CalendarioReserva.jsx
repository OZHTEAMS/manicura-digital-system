import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarioReserva = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    fecha: null,
    hora: null
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha: date });
  };

  const handleTimeChange = (time) => {
    setFormData({ ...formData, hora: time });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo, telefono, fecha, hora } = formData;

    if (!nombre || !correo || !telefono || !fecha || !hora) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);

    // Simular pequeña espera antes de enviar
    setTimeout(() => {
      // Formatear fecha y hora
      const fechaFormateada = fecha.toLocaleDateString('es-ES');
      const horaFormateada = hora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

      // Mensaje para WhatsApp
      const mensaje = `Hola, quiero reservar una cita en Amora Nails.\n\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nFecha: ${fechaFormateada}\nHora: ${horaFormateada}`;

      // Número de teléfono del dueño (placeholder, cambiar según necesidad)
      const numeroWhatsApp = '+1234567890'; // Reemplaza con el número real

      // Generar enlace de WhatsApp
      const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

      // Abrir WhatsApp
      window.open(enlaceWhatsApp, '_blank');
      
      setLoading(false);
    }, 500);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-3">Reserva tu Cita</h3>
          <p className="text-gray-600 text-lg">Elige la fecha y hora que mejor te convenga</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 backdrop-blur p-10 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b-2 border-pink-200 bg-pink-50 bg-opacity-40 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-gray-800"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Correo</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b-2 border-pink-200 bg-pink-50 bg-opacity-40 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-gray-800"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b-2 border-pink-200 bg-pink-50 bg-opacity-40 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-gray-800"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Fecha</label>
              <DatePicker
                selected={formData.fecha}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                className="w-full px-4 py-3 border-b-2 border-pink-200 bg-pink-50 bg-opacity-40 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-gray-800"
                placeholderText="Selecciona una fecha"
                required
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Hora</label>
            <DatePicker
              selected={formData.hora}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Hora"
              dateFormat="HH:mm"
              className="w-full px-4 py-3 border-b-2 border-pink-200 bg-pink-50 bg-opacity-40 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-gray-800"
              placeholderText="Selecciona una hora"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-10 py-3 rounded-full text-lg font-semibold text-white transition-all duration-300 ${
                loading
                  ? 'bg-pink-500 animate-pulse'
                  : 'bg-pink-600 hover:bg-pink-700 hover:shadow-lg'
              }`}
            >
              {loading ? 'Procesando...' : 'Reservar Cita'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CalendarioReserva;