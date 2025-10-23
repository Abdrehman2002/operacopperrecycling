import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FiPhone, FiMail, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
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
    { name: 'Cash For Copper Scrap Metal', path: '/copper-scrap-metal' },
    { name: 'Aluminium Scrap Price', path: '/aluminium-scrap-price' },
    { name: 'Brass Scrap Price', path: '/brass-scrap-price' },
    { name: 'Lead Scrap Price', path: '/lead-scrap-price' },
    { name: 'Insulated Wire Scrap Price', path: '/insulated-wire-scrap-price' },
  ];

  const scrapMetalLinks = [
    { name: 'Scrap Metal Prices Melbourne', path: '/scrap-metal-prices-melbourne' },
    { name: 'Cable Wires', path: '/cable-wires' },
    { name: 'Catalytic Converter', path: '/catalytic-converter' },
    { name: 'Car Battery Disposal', path: '/car-battery-disposal' },
    { name: 'Stainless Steel Scrap Price', path: '/stainless-steel-scrap-price' },
    { name: 'Copper Cable High Voltage', path: '/copper-cable-high-voltage' },
    { name: 'Scrap Bin Service', path: '/scrap-bin-service' },
    { name: 'Cash For Scrap Cars Melbourne', path: '/cash-for-scrap-cars-melbourne' },
    { name: 'Scrap AC Units', path: '/scrap-ac-units' },
    { name: 'Shiny Copper', path: '/shiny-copper' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Top Bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="mailto:Operacr86@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <FiMail className="w-4 h-4" />
                <span className="hidden sm:inline">Operacr86@gmail.com</span>
              </a>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:inline">📍 Melbourne, VIC, Australia</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/oper.ocr" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="font-heading font-bold text-xl md:text-2xl text-primary text-center">
              <div>OPERA <span className="text-secondary">COPPER</span></div>
              <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider">RECYCLING</div>
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
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary text-foreground"
                onMouseEnter={handleNonFerrousEnter}
                onMouseLeave={handleNonFerrousLeave}
              >
                Non Ferrous Metal
                <FiChevronDown className="w-4 h-4" />
              </button>
              {nonFerrousOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2"
                  onMouseEnter={handleNonFerrousEnter}
                  onMouseLeave={handleNonFerrousLeave}
                >
                  {nonFerrousLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
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
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary text-foreground"
                onMouseEnter={handleScrapMetalEnter}
                onMouseLeave={handleScrapMetalLeave}
              >
                Scrap Metal
                <FiChevronDown className="w-4 h-4" />
              </button>
              {scrapMetalOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2"
                  onMouseEnter={handleScrapMetalEnter}
                  onMouseLeave={handleScrapMetalLeave}
                >
                  {scrapMetalLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive('/contact') ? 'text-secondary' : 'text-foreground'
              }`}
            >
              Contact Us
            </Link>

            <Link
              to="/price-calculator"
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive('/price-calculator') ? 'text-secondary' : 'text-foreground'
              }`}
            >
              Scrap Price Calculator
            </Link>
          </div>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+61452367372" className="flex items-center gap-2 text-sm">
              <FiPhone className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-xs text-muted-foreground">Call Us Now</div>
                <div className="font-semibold">+61 452 367 372</div>
              </div>
            </a>
            <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90">
              <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2 hover:text-secondary"
              >
                Home
              </Link>

              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2 hover:text-secondary"
              >
                Services
              </Link>

              {/* Non Ferrous Metal - Mobile */}
              <div>
                <button
                  onClick={() => setNonFerrousOpen(!nonFerrousOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium py-2 hover:text-secondary"
                >
                  Non Ferrous Metal
                  <FiChevronDown className={`w-4 h-4 transition-transform ${nonFerrousOpen ? 'rotate-180' : ''}`} />
                </button>
                {nonFerrousOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    {nonFerrousLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm py-1 text-muted-foreground hover:text-secondary"
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
                  className="flex items-center justify-between w-full text-sm font-medium py-2 hover:text-secondary"
                >
                  Scrap Metal
                  <FiChevronDown className={`w-4 h-4 transition-transform ${scrapMetalOpen ? 'rotate-180' : ''}`} />
                </button>
                {scrapMetalOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    {scrapMetalLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm py-1 text-muted-foreground hover:text-secondary"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2 hover:text-secondary"
              >
                Contact Us
              </Link>

              <Link
                to="/price-calculator"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2 hover:text-secondary"
              >
                Scrap Price Calculator
              </Link>

              <div className="pt-4 border-t border-border mt-2">
                <a href="tel:+61452367372" className="flex items-center gap-2 text-sm mb-4">
                  <FiPhone className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">+61 452 367 372</span>
                </a>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
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
