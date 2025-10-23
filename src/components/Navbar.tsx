import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FiPhone, FiMail, FiMenu, FiX, FiChevronDown, FiClock } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nonFerrousOpen, setNonFerrousOpen] = useState(false);
  const [scrapMetalOpen, setScrapMetalOpen] = useState(false);
  const location = useLocation();
  const nonFerrousTimerRef = useRef<NodeJS.Timeout | null>(null);
  const scrapMetalTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNonFerrousEnter = () => {
    if (nonFerrousTimerRef.current) {
      clearTimeout(nonFerrousTimerRef.current);
    }
    setNonFerrousOpen(true);
  };

  const handleNonFerrousLeave = () => {
    nonFerrousTimerRef.current = setTimeout(() => {
      setNonFerrousOpen(false);
    }, 300);
  };

  const handleScrapMetalEnter = () => {
    if (scrapMetalTimerRef.current) {
      clearTimeout(scrapMetalTimerRef.current);
    }
    setScrapMetalOpen(true);
  };

  const handleScrapMetalLeave = () => {
    scrapMetalTimerRef.current = setTimeout(() => {
      setScrapMetalOpen(false);
    }, 300);
  };

  const nonFerrousLinks = [
    { name: 'Copper', path: '/copper-scrap-metal' },
    { name: 'Aluminium', path: '/aluminium-scrap-price' },
    { name: 'Brass', path: '/brass-scrap-price' },
    { name: 'Lead', path: '/lead-scrap-price' },
    { name: 'Insulated Wire', path: '/insulated-wire-scrap-price' },
  ];

  const scrapMetalLinks = [
    { name: 'AC Units', path: '/scrap-ac-units' },
    { name: 'Battery', path: '/car-battery-disposal' },
    { name: 'Bin Service', path: '/scrap-bin-service' },
    { name: 'Cable Wires', path: '/cable-wires' },
    { name: 'Catalytic Converter', path: '/catalytic-converter' },
    { name: 'Stainless Steel ', path: '/stainless-steel-scrap-price' },
    
    
    
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Top Bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-2 sm:py-3">
          <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm gap-2">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <a href="mailto:Operacr86@gmail.com" className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-all hover:scale-105 min-h-[44px] sm:min-h-0">
                <FiMail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="hidden sm:inline truncate">Operacr86@gmail.com</span>
              </a>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:flex items-center gap-2">📍 Melbourne, VIC</span>
              <span className="hidden lg:inline">|</span>
              <div className="hidden lg:flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>Mon-Fri: 7 AM-5 PM | Sat: 10 AM-4 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="https://instagram.com/oper.ocr" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all hover:scale-110 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center" aria-label="Instagram">
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all hover:scale-110 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center" aria-label="WhatsApp">
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="font-heading font-bold text-base sm:text-xl md:text-2xl text-primary text-center">
              <div>OPERA <span className="text-secondary">COPPER</span></div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-muted-foreground tracking-wider">RECYCLING</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive('/') ? 'text-secondary' : 'text-foreground'
              }`}
            >
              Home
            </Link>

            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive('/services') ? 'text-secondary' : 'text-foreground'
              }`}
            >
              Services
            </Link>

            {/* Non Ferrous Metal Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary text-foreground focus-ring"
                onMouseEnter={handleNonFerrousEnter}
                onMouseLeave={handleNonFerrousLeave}
              >
                Non Ferrous Metal
                <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {nonFerrousOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elevated py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleNonFerrousEnter}
                  onMouseLeave={handleNonFerrousLeave}
                >
                  {nonFerrousLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm hover:bg-secondary/10 hover:text-secondary transition-all hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Scrap Metal Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary text-foreground focus-ring"
                onMouseEnter={handleScrapMetalEnter}
                onMouseLeave={handleScrapMetalLeave}
              >
                Scrap Metal
                <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {scrapMetalOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elevated py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleScrapMetalEnter}
                  onMouseLeave={handleScrapMetalLeave}
                >
                  {scrapMetalLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm hover:bg-secondary/10 hover:text-secondary transition-all hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive('/about') ? 'text-secondary' : 'text-foreground'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive('/contact') ? 'text-secondary' : 'text-foreground'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+61452367372" className="flex items-center gap-3 text-base hover:opacity-80 transition-all hover:scale-105">
              <FiPhone className="w-6 h-6 text-secondary animate-pulse" />
              <div>
                <div className="text-xs text-muted-foreground">Call Us Now</div>
                <div className="font-bold text-lg">+61 452 367 372</div>
              </div>
            </a>
            <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl focus-ring">
              <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-secondary transition-all hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center focus-ring rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-3 px-2 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all min-h-[44px] flex items-center"
              >
                Home
              </Link>

              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-3 px-2 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all min-h-[44px] flex items-center"
              >
                Services
              </Link>

              {/* Non Ferrous Metal - Mobile */}
              <div>
                <button
                  onClick={() => setNonFerrousOpen(!nonFerrousOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium py-3 px-2 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all min-h-[44px] focus-ring"
                >
                  Non Ferrous Metal
                  <FiChevronDown className={`w-4 h-4 transition-transform ${nonFerrousOpen ? 'rotate-180' : ''}`} />
                </button>
                {nonFerrousOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                    {nonFerrousLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm py-2 px-2 text-muted-foreground hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all min-h-[44px] flex items-center"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Scrap Metal - Mobile */}
              <div>
                <button
                  onClick={() => setScrapMetalOpen(!scrapMetalOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium py-3 px-2 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all min-h-[44px] focus-ring"
                >
                  Scrap Metal
                  <FiChevronDown className={`w-4 h-4 transition-transform ${scrapMetalOpen ? 'rotate-180' : ''}`} />
                </button>
                {scrapMetalOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                    {scrapMetalLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm py-2 px-2 text-muted-foreground hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all min-h-[44px] flex items-center"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-3 px-2 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all min-h-[44px] flex items-center"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-3 px-2 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all min-h-[44px] flex items-center"
              >
                Contact Us
              </Link>

              <div className="pt-4 border-t border-border mt-2 space-y-3">
                <a href="tel:+61452367372" className="flex items-center gap-3 text-sm py-2 px-2 hover:bg-secondary/5 rounded-lg transition-all min-h-[44px]">
                  <FiPhone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-semibold">+61 452 367 372</span>
                </a>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 h-12 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all focus-ring">
                  <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
