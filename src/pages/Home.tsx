import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiCheck, FiPhone, FiDollarSign, FiTruck, FiClock, FiAward, FiShield, FiRefreshCw, FiMail, FiUser, FiCalendar } from 'react-icons/fi';
import heroImage from '@/assets/hero-copper.jpg';
import copperMaterials from '@/assets/copper-materials.jpg';
import copperCables from '@/assets/copper-cables.jpg';
import brassScrap from '@/assets/brass-scrap.jpg';
import aluminumScrap from '@/assets/aluminum-scrap.jpg';
import stainlessSteel from '@/assets/stainless-steel.jpg';
import acImage from '@/assets/ac 2.jpeg';
import batteriesImage from '@/assets/batteries.png';
import catalyticConverterImage from '@/assets/catalytic converter.jpeg';
import rimsImage from '@/assets/rims.png';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
  };

  const services = [
    {
      title: 'Cash For Copper Scrap',
      description: 'Get instant cash for all types of copper scrap. We buy bare bright copper, copper pipes, cables, and electrical wiring at competitive rates.',
      image: copperCables,
      link: '/non-ferrous-metal',
    },
    {
      title: 'Brass Scrap Price',
      description: 'Excellent prices for brass fittings, fixtures, valves, and decorative items. Fast assessment and instant payment for all brass materials.',
      image: brassScrap,
      link: '/non-ferrous-metal',
    },
    {
      title: 'Aluminum Scrap Price',
      description: 'Competitive rates for aluminum cans, extrusions, wheels, and industrial scrap. Free pickup available for large quantities.',
      image: aluminumScrap,
      link: '/non-ferrous-metal',
    },
    {
      title: 'Stainless Steel Scrap',
      description: 'Top market prices for stainless steel equipment, piping, and industrial components. Professional service for all grades.',
      image: stainlessSteel,
      link: '/services',
    },
    {
      title: 'Air Conditioner Recycling',
      description: 'We responsibly recycle air conditioning units, recovering valuable metals and ensuring environmentally safe disposal of components.',
      image: acImage,
      link: '/scrap-ac-units',
    },
    {
      title: 'Battery Recycling',
      description: 'Our battery recycling service helps prevent hazardous waste and recovers reusable materials from used car and industrial batteries.',
      image: batteriesImage,
      link: '/car-battery-disposal',
    },
    {
      title: 'Catalytic Converter Recycling',
      description: 'We specialize in recycling catalytic converters, extracting precious metals through safe, eco-friendly methods.',
      image: catalyticConverterImage,
      link: '/catalytic-converter',
    },
    {
      title: 'Rim Recycling',
      description: 'We collect and recycle alloy and steel rims, helping reduce waste while reclaiming high-quality metal for reuse.',
      image: rimsImage,
      link: '/services',
    },
  ];

  const valueProps = [
    {
      icon: <FiDollarSign className="w-12 h-12" />,
      title: 'Instant Payments',
      description: 'Get paid immediately via cash or instant bank transfer. No waiting, no hassle.',
    },
    {
      icon: <FiTruck className="w-12 h-12" />,
      title: 'Free Pickups*',
      description: 'Complimentary collection service for qualifying loads across Melbourne metro area.',
    },
    {
      icon: <FiRefreshCw className="w-12 h-12" />,
      title: 'Eco-Friendly Recycling',
      description: 'Environmentally responsible metal processing that reduces landfill waste.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'Trusted By Locals',
      description: 'Years of reliable service to Melbourne residents, businesses, and industrial clients.',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Licensed & Insured',
      description: 'Fully certified and insured professionals you can trust with your scrap metal needs.',
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Same-Day Service',
      description: 'Quick turnaround with same-day pickup and payment available for most jobs.',
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Best Prices',
      description: 'Competitive market rates for all types of non-ferrous metals including copper, brass, and aluminum.',
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: 'Free Collection',
      description: 'No-cost pickup service for qualifying quantities across Melbourne and surrounding suburbs.',
    },
    {
      icon: <FiCheck className="w-8 h-8" />,
      title: 'Transparent Process',
      description: 'Clear pricing, certified scales, and honest assessments every time.',
    },
  ];

  const whoWeServe = [
    {
      title: 'Residential Customers',
      description: 'Homeowners renovating or clearing out unwanted copper pipes, wiring, and metal fixtures.',
    },
    {
      title: 'Electricians & Plumbers',
      description: 'Trade professionals with regular copper cable, brass fittings, and pipe offcuts.',
    },
    {
      title: 'Factories & Warehouses',
      description: 'Industrial facilities with ongoing metal scrap from manufacturing processes.',
    },
    {
      title: 'Construction & Demolition',
      description: 'Building sites with structural steel, copper wiring, and mixed metal materials.',
    },
  ];

  const faqs = [
    {
      question: 'What types of copper scrap do you accept?',
      answer: 'We accept all forms of copper including bare bright copper, #1 and #2 copper, copper pipes, copper cables (insulated and bare), copper wire, and mixed copper alloys. Contact us for specific items.',
    },
    {
      question: 'Do you offer free pickup service?',
      answer: 'Yes, we provide free pickup for qualifying loads throughout Melbourne. Minimum quantities apply. Please contact us to discuss your scrap metal collection needs.',
    },
    {
      question: 'How do you calculate scrap metal prices?',
      answer: 'Our prices are based on current market rates, metal type, grade, and condition. We use certified scales and provide transparent pricing. Call us for a free quote.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We offer instant payment via cash or direct bank transfer at the time of collection. No waiting periods or delayed payments.',
    },
    {
      question: 'Do you accept whitegoods or electronics?',
      answer: 'No, we specialize in non-ferrous metal recycling. We do not accept whitegoods (refrigerators, washing machines, microwaves) or electronic waste.',
    },
    {
      question: 'What areas do you service?',
      answer: 'We service all of Melbourne and surrounding suburbs including metropolitan and greater Melbourne areas. Contact us to confirm service availability in your location.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] lg:h-[650px] flex items-center py-12 sm:py-16">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Scrap Metal Recycling Melbourne" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
              Scrap Metal Recycling Melbourne
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-6 mb-4 sm:mb-6 text-sm sm:text-lg md:text-xl font-semibold">
              <div className="flex items-center gap-2">
                <FiDollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                <span>Instant Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <FiTruck className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                <span>Free Pickups*</span>
              </div>
              <div className="flex items-center gap-2">
                <FiRefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                <span>Eco-Friendly</span>
              </div>
            </div>
            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed font-medium">
              Turn your Copper Scrap into instant money. Trusted by locals, we make copper disposal simple and rewarding.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14 font-semibold w-full sm:w-auto">
                <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14 font-semibold w-full sm:w-auto">
                <a href="tel:+61452367372">Call Now</a>
              </Button>
            </div>
            <div className="text-xs sm:text-sm opacity-80 space-y-1">
              <p>*We don't accept whitegoods or electronics scrap</p>
              <p>*Minimum pickup quantity required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="p-6 sm:p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-secondary bg-gradient-to-b from-card to-card/50 card-hover group">
                <div className="text-secondary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{prop.icon}</div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-3 group-hover:text-secondary transition-colors">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{prop.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={copperMaterials} alt="Opera Copper Recycling Melbourne" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-xs sm:text-sm font-semibold mb-4">
                Melbourne's Trusted Service
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4 text-foreground leading-tight">
                Copper Scrap Recycling in Melbourne
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-secondary">
                Your Trusted Scrap Metal Partner
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-5 leading-relaxed text-base sm:text-lg">
                Opera Copper Recycling is your premier scrap metal removal and recycling service provider in Melbourne, Victoria. We specialize in buying all types of non-ferrous metals at competitive market rates.
              </p>
              <p className="text-muted-foreground mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                Whether you're a homeowner with leftover renovation materials, a tradie with regular copper offcuts, or an industrial facility with ongoing scrap production, we make the recycling process simple and profitable.
              </p>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                We offer hassle-free pickup services across Melbourne for copper, brass, aluminum, stainless steel, and other non-ferrous metals. Our team provides instant payment, transparent pricing, and professional service every time.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 bg-muted/50 p-3 sm:p-4 rounded-lg">
                <strong>Please Note:</strong> We do not accept whitegoods scrap such as refrigerators, washing machines, microwaves, or electronic waste.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 font-semibold w-full sm:w-auto">
                  <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get a Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary w-full sm:w-auto">
                  <a href="tel:+61452367372">Call +61 452 367 372</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-4 sm:py-6 bg-gradient-to-r from-secondary/90 via-secondary to-secondary/90 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
            <FiPhone className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <span className="text-sm sm:text-base lg:text-lg font-medium">Need immediate assistance?</span>
            <a href="tel:+61452367372" className="text-xl sm:text-2xl font-bold hover:scale-110 transition-transform focus-ring rounded px-3 py-1 min-h-[44px] flex items-center">
              +61 452 367 372
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 text-secondary rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border-2 border-secondary/30 shadow-lg">
              <span className="text-lg sm:text-xl">⚡</span>
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent px-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive scrap metal recycling solutions with competitive pricing and instant payment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm card-hover">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <span className="text-2xl text-primary font-bold">→</span>
                    </div>
                  </div>
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}></div>
                </div>
                <div className="p-4 sm:p-6 relative">
                  {/* Decorative Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all duration-300 group/link text-sm sm:text-base focus-ring rounded px-2 py-1 min-h-[44px] sm:min-h-0"
                  >
                    <span>Learn More</span>
                    <span className="text-base sm:text-lg group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center px-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 hover:from-secondary/90 hover:via-secondary/80 hover:to-secondary/70 text-primary font-bold text-base sm:text-lg px-8 sm:px-12 h-12 sm:h-14 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-secondary/50 w-full sm:w-auto focus-ring">
              <Link to="/services">
                <span className="flex items-center gap-2 sm:gap-3">
                  View All Services
                  <span className="text-lg sm:text-xl">✨</span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-accent/5 to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Our Advantages
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4 px-4">Why Choose Opera Copper Recycling</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Melbourne's preferred choice for scrap metal recycling. We combine competitive pricing, convenience, and professional service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-5 sm:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-secondary group bg-gradient-to-br from-card to-card/80 shadow-elevated">
                <div className="text-secondary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
              Our Customers
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Who We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted scrap metal recycling services for diverse customers across Melbourne
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((customer, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group border-l-4 border-l-secondary">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <FiCheck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-secondary transition-colors">{customer.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{customer.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-muted/20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 text-secondary rounded-full text-sm font-bold mb-6 border-2 border-secondary/30 hover:scale-105 transition-transform shadow-lg">
                💬 Got Questions?
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our copper and scrap metal recycling services
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border-2 rounded-2xl px-6 py-2 bg-gradient-to-r from-card to-card/80 hover:from-secondary/5 hover:to-secondary/10 border-border hover:border-secondary/60 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:text-secondary transition-colors py-4 group-hover:scale-[1.02] transition-transform">
                    <span className="flex items-start gap-3">
                      <span className="text-secondary text-xl mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4 text-base border-t border-secondary/20 mt-2">
                    <div className="pl-8 animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Call to Action in FAQ Section */}
            <div className="mt-12 text-center p-8 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent rounded-2xl border-2 border-secondary/30 shadow-xl">
              <p className="text-lg font-semibold mb-4">Still have questions?</p>
              <p className="text-muted-foreground mb-6">Our team is here to help! Contact us anytime.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 font-semibold hover:scale-105 transition-transform shadow-lg">
                  <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold hover:scale-105 transition-transform">
                  <a href="tel:+61452367372">Call Us Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/40 via-accent/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-semibold mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">Request a Quote</h2>
              <p className="text-base sm:text-xl text-muted-foreground px-4">
                Fill out the form below and we'll get back to you within 24 hours with a competitive quote
              </p>
            </div>
            <Card className="p-4 sm:p-6 lg:p-8 shadow-2xl border-t-4 border-t-secondary">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <FiUser className="text-secondary" />
                      Name *
                    </label>
                    <Input
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-2 focus:border-secondary h-12 focus-ring text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <FiPhone className="text-secondary" />
                      Phone *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-2 focus:border-secondary h-12 focus-ring text-base"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <FiMail className="text-secondary" />
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-2 focus:border-secondary h-12 focus-ring text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <FiCalendar className="text-secondary" />
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="border-2 focus:border-secondary h-12 focus-ring text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <FiCheck className="text-secondary" />
                    Service Type *
                  </label>
                  <Select
                    required
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="border-2 focus:border-secondary h-12 focus-ring text-base">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="copper">Copper Scrap</SelectItem>
                      <SelectItem value="brass">Brass Scrap</SelectItem>
                      <SelectItem value="aluminum">Aluminum Scrap</SelectItem>
                      <SelectItem value="stainless">Stainless Steel</SelectItem>
                      <SelectItem value="lead">Lead Scrap</SelectItem>
                      <SelectItem value="cable">Cable & Wires</SelectItem>
                      <SelectItem value="battery">Car Battery</SelectItem>
                      <SelectItem value="catalytic">Catalytic Converter</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <Textarea
                    placeholder="Tell us about your scrap metal, quantity, and any specific requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 focus:border-secondary resize-none focus-ring text-base"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-base sm:text-lg font-semibold h-12 sm:h-14 hover:scale-105 transition-all shadow-lg hover:shadow-xl focus-ring"
                >
                  Submit Request
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 24 hours. For urgent inquiries, call{' '}
                  <a href="tel:+61452367372" className="text-secondary font-semibold hover:underline">
                    +61 452 367 372
                  </a>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6 px-4">Ready to Turn Your Scrap into Cash?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed px-4">
            Contact Opera Copper Recycling today for fast, honest, and hassle-free metal recycling services in Melbourne. Free pickup and same-day payment available!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14 font-semibold w-full sm:w-auto">
              <a href="tel:+61452367372">Call +61 452 367 372</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14 font-semibold w-full sm:w-auto">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
