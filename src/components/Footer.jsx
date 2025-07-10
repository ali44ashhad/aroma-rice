import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-[#27241c] text-[#b9b29d]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Gold Aroma Rice
            </h3>
            <p className="text-[#b9b29d]">
              Finest quality aromatic rice, crafted to perfection and delivered
              globally from Dubai.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-[#edbc2a] transition-colors">
                  Basmati Rice
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#edbc2a] transition-colors">
                  Jasmine Rice
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#edbc2a] transition-colors">
                  Brown Rice
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#edbc2a] transition-colors">
                  Specialty Rice
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Pages */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#edbc2a] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#edbc2a] transition-colors">
                  Our Farms
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#edbc2a] transition-colors">
                  Quality Process
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-[#edbc2a] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-[#b9b29d]">
              <li>📞 +91 9876543210</li>
              <li>📧 orders@goldaroma.com</li>
              <li>📍 Dubai, UAE</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links and Social Icons */}
        <div className="mt-12 border-t border-[#3b362a] pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link
              to="/privacy-policy"
              className="hover:text-[#edbc2a] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#edbc2a] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#edbc2a] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#edbc2a] transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#edbc2a] transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#edbc2a] transition-colors"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Gold Aroma Rice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
