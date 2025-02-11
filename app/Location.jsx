import React from 'react';

const Location = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white">My Location</h2>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.0119775402804!2d84.10919847049823!3d28.114217572633414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995a30073d2b64d%3A0x82a99bb081547153!2sSagun%20home!5e0!3m2!1sen!2snp!4v1739279175152!5m2!1sen!2snp"
                  width="100%" height="480" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                  
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-indigo-700">My Address</h3>
                  <p className="mt-2 text-lg text-gray-600">Nalepatan-32, 33700 Pokhara</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-2xl font-medium text-indigo-700">Contact</h3>
                  <p className="mt-2 text-lg text-gray-600">Email: sagungautam546@gmail.com</p>
                  <p className="mt-2 text-lg text-gray-600">Phone: +977 9819189047 , 9846765197</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
