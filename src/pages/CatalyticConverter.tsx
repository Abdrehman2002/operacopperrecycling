import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiCheck, FiDollarSign, FiTruck, FiAward, FiShield, FiClock, FiUsers, FiMapPin, FiPhone } from 'react-icons/fi';
import catalyticConverterImage from '@/assets/catalytic converter.jpeg';

const CatalyticConverter = () => {
  const converterTypes = [
    {
      name: 'OEM Catalytic Converters',
      description: 'Original Equipment Manufacturer converters from vehicle manufacturers. These contain the highest concentration of precious metals (platinum, palladium, rhodium) and command premium prices. OEM converters are stamped with manufacturer codes.',
      examples: ['Toyota OEM converters', 'Honda OEM converters', 'Ford OEM converters', 'BMW OEM converters'],
      price: 'Highest Market Rate'
    },
    {
      name: 'Aftermarket Converters',
      description: 'Replacement converters manufactured by third-party companies. Generally contain less precious metal content than OEM converters but still valuable. Pricing varies based on brand and quality.',
      examples: ['Walker converters', 'Magnaflow converters', 'AP Exhaust converters', 'Eastern catalytic converters'],
      price: 'Good Rate'
    },
    {
      name: 'Diesel Catalytic Converters',
      description: 'Converters from diesel engines, including DPF (Diesel Particulate Filter) systems. Diesel converters often contain higher amounts of platinum and are highly valuable in the recycling market.',
      examples: ['Diesel truck converters', 'DPF filters', 'Heavy machinery converters', 'Industrial diesel converters'],
      price: 'Premium Rate'
    },
    {
      name: 'Foreign vs Domestic Converters',
      description: 'Foreign vehicle converters (Japanese, European) typically contain more precious metals than domestic converters due to stricter emission standards. Pricing varies significantly by country of origin.',
      examples: ['Japanese vehicle converters', 'European luxury converters', 'German automotive converters', 'American domestic converters'],
      price: 'Varies by Origin'
    },
    {
      name: 'High-Grade Performance Converters',
      description: 'Performance and luxury vehicle converters containing exceptionally high precious metal content. Sports cars and luxury brands use premium converters to meet performance and emission standards.',
      examples: ['Mercedes-Benz converters', 'Porsche converters', 'Lamborghini converters', 'Ferrari converters'],
      price: 'Premium to Exceptional'
    },
    {
      name: 'Industrial & Heavy Equipment Converters',
      description: 'Large converters from trucks, buses, construction equipment, and industrial machinery. These units contain substantial amounts of precious metals due to their size and emission requirements.',
      examples: ['Semi-truck converters', 'Bus converters', 'Construction equipment', 'Generator converters'],
      price: 'Premium Rate'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Top Dollar Pricing',
      description: 'We offer competitive rates based on current platinum, palladium, and rhodium market prices. Our pricing is transparent and reflects the true precious metal content of your converters.'
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: 'Free Pickup Service',
      description: 'No-cost collection for bulk converter quantities across Melbourne. We come to your workshop, yard, or facility with proper equipment and secure transport.'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Instant Payment',
      description: 'Immediate cash or bank transfer when we collect your converters. No waiting periods or delayed payments - get paid the same day you sell.'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: '15+ Years Experience',
      description: 'Trusted catalytic converter buyers since 2009. We serve auto recyclers, mechanics, wrecking yards, and dealerships throughout Melbourne with professional service.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Licensed & Secure',
      description: 'Fully licensed precious metal buyers with EPA compliance. All transactions documented with proper identification requirements and legal compliance.'
    },
    {
      icon: <FiCheck className="w-8 h-8" />,
      title: 'Expert Assessment',
      description: 'Professional evaluation of converter types and precious metal content. We identify converter models using serial numbers and provide accurate pricing based on market data.'
    },
  ];

  const whoWeServe = [
    {
      title: 'Auto Mechanics & Repair Shops',
      description: 'We buy used converters from automotive repair shops replacing exhaust systems. Regular pickup schedules available for shops with steady converter volume.'
    },
    {
      title: 'Wrecking Yards & Auto Recyclers',
      description: 'Bulk converter buyers for auto dismantlers and wrecking yards. We handle large quantities and provide competitive wholesale pricing for regular suppliers.'
    },
    {
      title: 'Car Dealerships & Service Centers',
      description: 'We purchase converters from dealership service departments performing warranty work and exhaust replacements. Professional invoicing available.'
    },
    {
      title: 'Towing Companies & Impound Yards',
      description: 'Buy converters from salvage vehicles, insurance write-offs, and impounded cars. We make the selling process quick and straightforward.'
    },
    {
      title: 'Scrap Metal Dealers & Recyclers',
      description: 'Wholesale converter buyers for other recycling businesses. Competitive bulk rates and consistent service for industry professionals.'
    },
    {
      title: 'Fleet Maintenance & Transport Companies',
      description: 'Purchase converters from commercial fleet maintenance operations, truck depots, and transport companies maintaining large vehicle fleets.'
    },
  ];

  const faqs = [
    {
      question: 'How much are catalytic converters worth in Melbourne?',
      answer: 'Catalytic converter prices vary significantly based on the type, make, model, and current precious metal market rates. OEM converters from foreign vehicles typically range from $50 to $1,500+ depending on platinum, palladium, and rhodium content. High-grade converters from luxury vehicles can be worth even more. Aftermarket converters generally fetch $20-$200. For accurate pricing on your specific converters, contact us at +61 452 367 372 with the serial numbers or vehicle details.'
    },
    {
      question: 'What precious metals are in catalytic converters?',
      answer: 'Catalytic converters contain three precious metals: platinum (Pt), palladium (Pd), and rhodium (Rh). These metals act as catalysts in the chemical reactions that reduce harmful emissions. The exact amounts vary by vehicle type - typical converters contain 3-7 grams of platinum, 2-7 grams of palladium, and 1-2 grams of rhodium. Given current market prices ($1,000-$3,000+ per ounce for platinum/palladium and $5,000-$15,000+ per ounce for rhodium), this makes converters extremely valuable.'
    },
    {
      question: 'How do you determine the value of a catalytic converter?',
      answer: 'We evaluate converters based on several factors: the serial number or manufacturer stamp identifies the converter model and precious metal content, vehicle make/model/year determines OEM specifications, physical condition and completeness affect recyclability, and current precious metal market prices (platinum, palladium, rhodium rates). We use industry databases with thousands of converter models and their known metal content. Our experienced team can identify most converters on sight and provide accurate quotes.'
    },
    {
      question: 'Do I need ID to sell catalytic converters?',
      answer: 'Yes, Victorian law requires valid photo identification for all catalytic converter sales to prevent theft and ensure legitimate recycling. You must provide a current driver\'s license, passport, or proof of age card. Business sellers need ABN/ACN documentation. We record all transaction details including ID, converter serial numbers, vehicle information, and photographs as required by state regulations. This protects both buyers and sellers and helps combat catalytic converter theft.'
    },
    {
      question: 'Can you pick up catalytic converters from my location?',
      answer: 'Yes! We offer free pickup service for bulk quantities of catalytic converters throughout Melbourne. For auto shops, wrecking yards, or businesses with 10+ converters, we\'ll come to your location with secure transport. We can arrange regular scheduled pickups for businesses generating consistent converter volume. For smaller quantities, you can deliver directly to our facility. Contact us to arrange pickup at +61 452 367 372.'
    },
    {
      question: 'Which catalytic converters are most valuable?',
      answer: 'The most valuable converters come from: luxury and exotic vehicles (Lamborghini, Ferrari, Porsche, BMW M-series), hybrid vehicles (Toyota Prius, Honda Civic Hybrid) which use more precious metals, diesel trucks and SUVs with DPF systems, foreign vehicles especially Japanese and European brands, and larger vehicles like trucks and SUVs with bigger converters. OEM converters always beat aftermarket. Pre-2000s converters sometimes contain more precious metals before manufacturers optimized designs.'
    },
    {
      question: 'How do I identify the type of catalytic converter I have?',
      answer: 'Look for stampings, serial numbers, or manufacturer codes on the converter body or heat shield. These typically include a combination of letters and numbers (example: "25055034" or "5E-5H240-AB"). Take photos of all stampings and send them to us via WhatsApp at +61 452 367 372 for identification and quote. If you know the vehicle make, model, year, and engine size, we can also identify the converter type and provide pricing. Our team has extensive catalogs of converter models.'
    },
    {
      question: 'Do you buy damaged or broken catalytic converters?',
      answer: 'Yes! We buy damaged, broken, and even burned catalytic converters. The precious metals inside remain valuable regardless of physical condition. Broken converters, rusted units, accident-damaged converters, and heat-damaged units are all acceptable. The precious metal content doesn\'t diminish. We may need to verify the internal substrate is present, but external damage doesn\'t significantly affect value. Contact us with photos for evaluation and pricing.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Catalytic Converter Recycling</h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90">
              Top Prices for All Catalytic Converters | Platinum, Palladium, Rhodium Buyers | Instant Payment
            </p>
            <p className="text-lg opacity-80">
              Melbourne's Premier Catalytic Converter Buyers - Serving Auto Recyclers, Mechanics, Wrecking Yards & Dealerships
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <FiPhone className="w-5 h-5" />
              <a href="tel:+61452367372" className="font-semibold hover:opacity-80">+61 452 367 372</a>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-5 h-5" />
              <span>Serving All Melbourne Suburbs</span>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex items-center gap-2">
              <FiClock className="w-5 h-5" />
              <span className="hidden sm:inline">Mon-Fri: 7 AM-5 PM | Sat: 10 AM-4 PM</span>
              <span className="sm:hidden">Mon-Fri: 7-5 | Sat: 10-4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Leading Catalytic Converter Buyers</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Opera Copper Recycling is Melbourne's trusted buyer of catalytic converters, offering premium prices based on precious metal content. Every catalytic converter contains valuable platinum, palladium, and rhodium - metals that make them among the most valuable automotive recyclables.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We specialize in accurate converter identification and fair pricing. Whether you have OEM converters from foreign vehicles, aftermarket units, diesel converters, or industrial catalytic systems, we pay top dollar based on current precious metal market rates. Our transparent evaluation process and immediate payment have made us the preferred choice for auto recyclers and mechanics throughout Melbourne.
                </p>
              </div>
              <div>
                <img src={catalyticConverterImage} alt="Catalytic Converter Recycling" className="rounded-2xl shadow-xl w-full object-cover aspect-square max-h-[400px]" />
              </div>
            </div>
            <div className="mb-16">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 font-semibold">
                  <a href="tel:+61452367372">Call For Today's Price</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold">
                  <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get a Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Converter Types Detailed */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Types of Catalytic Converters We Buy</h2>
              <p className="text-xl text-muted-foreground">Understanding converter types helps you get the best price for your units</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {converterTypes.map((type, index) => (
                <Card key={index} className="p-6 sm:p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 break-words">{type.name}</h3>
                    <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {type.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{type.description}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold mb-2 text-foreground">Common Examples:</p>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <FiCheck className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Opera Copper Recycling</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Melbourne's most trusted catalytic converter buyers with expert evaluation and top pricing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
                <div className="text-secondary mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoWeServe.map((customer, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <FiUsers className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{customer.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{customer.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about selling catalytic converters in Melbourne
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:text-secondary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CatalyticConverter;
