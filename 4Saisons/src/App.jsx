import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      {/* Header Section */}
      <header className="flex items-center justify-between px-8 py-6 w-full max-w-[1440px] mx-auto">
        <img src="/4saisons.png" alt="4 Saisons Dobruna" className="h-16" />
      </header>

      {/* Menu Section */}
      <section className="py-16 px-6 max-w-[1440px] mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center text-accent-red">Our Menu</h2>

        {/* Pizza Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-accent-green">Pizzas</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Margarite', 'Pizza 2', 'Pizza 3', 'Pizza 4', 'Pizza 5', 'Pizza 6', 'Pizza 7', 'Pizza 8', 'Pizza 9', 'Pizza 10', 'Pizza 11', 'Pizza 12'].map((pizza, idx) => (
              <li key={idx} className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-2">{pizza}</h4>
                <p className="text-gray-300">Delicious pizza with fresh ingredients.</p>
                <p className="mt-4 text-accent-red font-bold">€9.50</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Salads Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-accent-green">Salads</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Salade Poulet', 'Salade Calabrese', 'Salade au Thon'].map((salad, idx) => (
              <li key={idx} className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-2">{salad}</h4>
                <p className="text-gray-300">Fresh salad with premium ingredients.</p>
                <p className="mt-4 text-accent-red font-bold">€7.50</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Meat by KG Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-accent-green">Meat by the Kg</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Qebapa (spicy option)', 'Pleskavica', 'Qofte (spicy)'].map((meat, idx) => (
              <li key={idx} className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-2">{meat}</h4>
                <p className="text-gray-300">Served by the kg. Spicy options available.</p>
                <p className="mt-4 text-accent-red font-bold">€11.00/kg</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Sandwiches and Plates Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-accent-green">Sandwiches & Plates</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Qebaba Sandwich', description: '5 to 10 Qebaba in Turkish bread', price: '€5.50 - €10.00' },
              { name: 'Qofte Sandwich (spicy)', description: '5 to 10 Qofte in Turkish bread', price: '€5.50 - €10.00' },
              { name: 'Qebaba Plate', description: '10 Qebaba served with sides', price: '€10.00' },
              { name: 'Qofte Plate (spicy)', description: '10 Qofte served with sides', price: '€10.00' },
              { name: 'Escalope de Poulet', description: 'Grilled chicken escalope with sides', price: '€9.50' },
              { name: 'Poulet Pané', description: 'Breaded chicken fillet with sides', price: '€9.50' },
              { name: 'Poulet Mariné', description: 'Marinated chicken with sides', price: '€9.50' }
            ].map((item, idx) => (
              <li key={idx} className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-300">{item.description}</p>
                <p className="mt-4 text-accent-red font-bold">{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-12 text-center bg-[#1a1a1a]">
        <h2 className="text-3xl font-semibold mb-6 text-accent-red">Contact Us</h2>
        <p className="text-lg mb-4">Call us at <a href="tel:+324xxxxxxx" className="underline text-accent-red">+324xxxxxxx</a></p>
        <p className="text-lg italic">Open every day from 11:00 to 22:45 <br />(Fridays: 15:00 to 22:45)</p>
        <a href="tel:+324xxxxxxx" className="inline-block mt-6 px-6 py-3 bg-accent-green text-white rounded-full shadow-lg hover:bg-accent-red transition duration-300">
          Call Now
        </a>
      </section>

      {/* Location Section */}
      <section className="location-section py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-accent-red">Find Us</h2>
        <div className="w-full max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="border border-gray-600 rounded-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
