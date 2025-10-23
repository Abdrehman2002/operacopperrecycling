import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FiPhone, FiMail, FiMapPin, FiClock, FiDollarSign } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      {/* Top CTA Bar */}
      <div className="border-b border-primary-foreground/10 bg-secondary/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-2">Ready to Recycle Your Scrap Metal?</h3>
              <p className="text-xs sm:text-sm opacity-90">Free pickup • Instant payment • Best prices in Melbourne</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto justify-center md:justify-end">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto min-h-[44px] focus-ring">
                <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">
                  Get Quote Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold hover:scale-105 transition-all w-full sm:w-auto min-h-[44px] focus-ring">
                <a href="tel:+61452367372">Call Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <Link to="/" className="inline-block mb-4 hover:scale-105 transition-transform">
              <div className="font-heading font-bold text-lg sm:text-xl text-primary-foreground">
                <div>OPERA <span className="text-secondary">COPPER</span></div>
                <div className="text-xs sm:text-sm font-semibold text-primary-foreground/80 tracking-wider">RECYCLING</div>
              </div>
            </Link>
            <p className="text-sm opacity-90 mb-6 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Melbourne's trusted scrap metal recycling service. We turn your copper, brass, and aluminum into instant cash with eco-friendly practices.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a
                href="https://instagram.com/oper.ocr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center hover:from-secondary hover:to-secondary/90 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg focus-ring"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/61452367372"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center hover:from-secondary hover:to-secondary/90 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg focus-ring"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-1 h-6 bg-secondary rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 group min-h-[44px] sm:min-h-0 py-2 sm:py-0 focus-ring rounded px-2 sm:px-0">
                  <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 group min-h-[44px] sm:min-h-0 py-2 sm:py-0 focus-ring rounded px-2 sm:px-0">
                  <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 group min-h-[44px] sm:min-h-0 py-2 sm:py-0 focus-ring rounded px-2 sm:px-0">
                  <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/scrap-metal-prices-melbourne" className="text-sm opacity-90 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 group min-h-[44px] sm:min-h-0 py-2 sm:py-0 focus-ring rounded px-2 sm:px-0">
                  <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Scrap Metal Prices
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 group min-h-[44px] sm:min-h-0 py-2 sm:py-0 focus-ring rounded px-2 sm:px-0">
                  <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-1 h-6 bg-secondary rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FiDollarSign className="w-4 h-4 text-secondary flex-shrink-0" />
                Copper Recycling
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FiDollarSign className="w-4 h-4 text-secondary flex-shrink-0" />
                Brass Scrap Removal
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FiDollarSign className="w-4 h-4 text-secondary flex-shrink-0" />
                Cable Wire Collection
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FiDollarSign className="w-4 h-4 text-secondary flex-shrink-0" />
                Aluminum Recycling
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FiDollarSign className="w-4 h-4 text-secondary flex-shrink-0" />
                Stainless Steel Scrap
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FiClock className="w-4 h-4 text-secondary flex-shrink-0" />
                Free Pickup Service
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-1 h-6 bg-secondary rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 text-sm opacity-90 group justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/40 transition-all group-hover:scale-110">
                  <FiMapPin className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold mb-1 opacity-100">Location</p>
                  <span>Melbourne, VIC, Australia</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-90 group justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/40 transition-all group-hover:scale-110">
                  <FiPhone className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold mb-1 opacity-100">Phone</p>
                  <a href="tel:+61452367372" className="hover:text-secondary transition-colors focus-ring rounded px-1 min-h-[44px] inline-flex items-center">
                    +61 452 367 372
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-90 group justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/40 transition-all group-hover:scale-110">
                  <FiClock className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold mb-1 opacity-100">Business Hours</p>
                  <div className="text-xs leading-relaxed">
                    <p>Monday - Friday: 7 AM - 5 PM</p>
                    <p>Saturday: 10 AM - 4 PM</p>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-90 group justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/40 transition-all group-hover:scale-110">
                  <FiMail className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left max-w-full">
                  <p className="font-semibold mb-1 opacity-100">Email</p>
                  <a href="mailto:Operacr86@gmail.com" className="hover:text-secondary transition-colors break-all focus-ring rounded px-1 min-h-[44px] inline-flex items-center">
                    Operacr86@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm opacity-75">
              &copy; {new Date().getFullYear()} <span className="font-semibold">Opera Copper Recycling</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs opacity-75">
              <Link to="/contact" className="hover:text-secondary transition-colors focus-ring rounded px-2 py-1 min-h-[44px] sm:min-h-0 flex items-center">Privacy Policy</Link>
              <span className="hidden sm:inline">•</span>
              <Link to="/contact" className="hover:text-secondary transition-colors focus-ring rounded px-2 py-1 min-h-[44px] sm:min-h-0 flex items-center">Terms of Service</Link>
              <span className="hidden sm:inline">•</span>
              <span className="text-secondary font-semibold">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
