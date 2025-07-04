import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navigation Bar */}

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Premium <span className="text-amber-300">aroma Rice</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Grown with care, packed with nature's goodness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl">
              Browse Varieties
            </button>
            <button className="bg-white hover:bg-gray-100 text-amber-800 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl">
              Bulk Orders
            </button>
          </div>
        </div>
      </section>

      {/* Rice Varieties Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Rice Varieties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each variety offers unique aroma and texture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basmati */}
            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img
                src="https://m.media-amazon.com/images/I/51c0i-fX3FL.jpg"
                alt="Basmati Rice"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gold Basmati</h3>
                <p className="text-gray-600 mb-4">
                  Long grain, delicate flavor with distinctive aroma. Perfect
                  for biryanis and pulao.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700 font-bold">₹999 / 5kg</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Jasmine */}
            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img
                src="https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800"
                alt="Jasmine Rice"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gold Jasmine</h3>
                <p className="text-gray-600 mb-4">
                  Soft, slightly sticky texture with floral aroma. Ideal for
                  Asian cuisine.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700 font-bold">₹799/5kg</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Brown */}
            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img
                src="https://www.honeywhatscooking.com/wp-content/uploads/2023/08/Vegetable-Pulao-main-image.jpg"
                alt="Brown Rice"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gold Brown</h3>
                <p className="text-gray-600 mb-4">
                  Nutrient-rich whole grain with nutty flavor. Great for
                  health-conscious consumers.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700 font-bold">₹1049/5kg</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section id="process" className="py-20 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Traditional Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Preserving quality from farm to package
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2972/2972183.png"
                  alt="Cultivation"
                  className="h-12"
                />
              </div>
              <h3 className="font-semibold">Organic Cultivation</h3>
              <p className="text-sm text-gray-600">Chemical-free farming</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2459/2459773.png"
                  alt="Harvesting"
                  className="h-12"
                />
              </div>
              <h3 className="font-semibold">Perfect Harvesting</h3>
              <p className="text-sm text-gray-600">Timed for optimal aroma</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png"
                  alt="Processing"
                  className="h-12"
                />
              </div>
              <h3 className="font-semibold">Gentle Processing</h3>
              <p className="text-sm text-gray-600">Minimal processing</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                  alt="Packaging"
                  className="h-12"
                />
              </div>
              <h3 className="font-semibold">Quality Packaging</h3>
              <p className="text-sm text-gray-600">
                Airtest bags for freshness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-600 rounded-xl p-8 md:p-12 text-white">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Wholesale Inquiries
                </h2>
                <p className="text-amber-100 mb-6">
                  We supply premium quality rice to restaurants, hotels, and
                  retailers worldwide.
                </p>
                <button className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold">
                  Request Quote
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Rice sacks"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by chefs and households worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah K.</h4>
                  <p className="text-amber-600 text-sm">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Gold Aroma Basmati has transformed our biryanis. The fragrance
                when cooking is incredible and customers always ask about it."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael T.</h4>
                  <p className="text-amber-600 text-sm">Executive Chef</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Consistent quality for 3 years now. Our Thai dishes taste
                authentic thanks to their premium jasmine rice."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Priya M.</h4>
                  <p className="text-amber-600 text-sm">Home Cook</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've tried many brands but Gold Aroma's brown rice has the
                perfect texture and doesn't turn mushy like others."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Gold Aroma?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying premium quality rice
          </p>
          <div className="max-w-md  mx-auto">
            <div className="flex flex-col  sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 bg-white py-3 border border-amber-600 hover:border-amber-700 rounded-lg focus:outline-none text-gray-800"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-sm text-amber-200">
              Get exclusive offers and rice cooking tips
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
