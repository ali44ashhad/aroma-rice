import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Gold Aroma Rice</h3>
              <p className="text-gray-400">
                Finest quality aromatic rice, crafted to perfection.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    Basmati Rice
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    Jasmine Rice
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    Brown Rice
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    Specialty Rice
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    Our Farms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    Quality Process
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">+91 9876543210</li>
                <li className="text-gray-400">orders@goldaroma.com</li>
                <li className="text-gray-400">123 noida, india</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Gold Aroma Rice Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
