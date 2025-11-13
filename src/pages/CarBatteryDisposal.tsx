import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw, FiAward, FiShield, FiUsers } from 'react-icons/fi';
import batteriesImage from '@/assets/batteries.jpg';

const CarBatteryDisposal = () => {
  const batteryTypes = [
    {
      name: 'Car & Truck Batteries',
      description: 'Standard lead-acid automotive batteries from cars, trucks, and vans. The most common type we recycle with consistent scrap value.',
      examples: ['Passenger vehicle batteries', 'Light truck batteries', 'SUV batteries', 'Standard 12V batteries'],
      price: 'Standard Rate'
    },
    {
      name: 'Heavy Duty Truck Batteries',
      description: 'Larger commercial vehicle batteries with higher lead content. Group 31, 4D, and 8D batteries command premium prices due to their size.',
      examples: ['Semi-truck batteries', 'Commercial vehicle batteries', 'Fleet truck batteries', 'Heavy equipment batteries'],
      price: 'Premium Rate'
    },
    {
      name: 'Marine & Deep Cycle Batteries',
      description: 'Boat batteries designed for deep discharge cycles. Contains significant lead content and pays well for recycling.',
      examples: ['Boat batteries', 'Marine starting batteries', 'Trolling motor batteries', 'RV house batteries'],
      price: 'Good Rate'
    },
    {
      name: 'Motorcycle & Small Engine Batteries',
      description: 'Smaller 12V and 6V batteries from motorcycles, ATVs, lawn equipment, and similar applications.',
      examples: ['Motorcycle batteries', 'ATV batteries', 'Scooter batteries', 'Lawn tractor batteries'],
      price: 'Standard Rate (by weight)'
    },
    {
      name: 'Forklift & Industrial Batteries',
      description: 'Large industrial lead-acid batteries used in forklifts and material handling equipment. High scrap value due to substantial lead content.',
      examples: ['Forklift batteries', 'Pallet jack batteries', 'Floor scrubber batteries', 'Industrial traction batteries'],
      price: 'Premium to Excellent'
    },
    {
      name: 'UPS & Standby Batteries',
      description: 'Sealed lead-acid batteries from backup power systems. Common in data centers, telecommunications, and emergency lighting.',
      examples: ['UPS batteries', 'Backup power batteries', 'Emergency lighting batteries', 'Telecom batteries'],
      price: 'Good Rate'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Cash for Batteries',
      description: 'We pay competitive cash prices for all types of lead-acid batteries. Instant payment when we collect or you drop off.'
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: 'Free Collection Service',
      description: 'Complimentary pickup for bulk battery quantities across Melbourne. We collect from homes, businesses, and workshops.'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Quick Service',
      description: 'Fast turnaround with same-day or next-day pickup available. Get your batteries recycled promptly and conveniently.'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'EPA Licensed',
      description: 'Fully licensed for battery recycling with EPA compliance. We follow all regulations for safe lead-acid battery processing.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Safe Handling',
      description: 'Professional handling of hazardous battery materials. Proper containment and transport of acid and lead components.'
    },
    {
      icon: <FiRefreshCw className="w-8 h-8" />,
      title: '95%+ Recyclable',
      description: 'Over 95% of a car battery can be recycled. Lead, plastic, and acid are all recovered and reused in manufacturing.'
    },
  ];

  const whoWeServe = [
    {
      title: 'Auto Mechanics & Workshops',
      description: 'We collect old batteries from automotive repair shops, tire shops, and service centers. Regular scheduled pickups available.'
    },
    {
      title: 'Car Dealerships',
      description: 'New and used car dealers replacing batteries during PDI and reconditioning. Bulk collection with documentation provided.'
    },
    {
      title: 'Fleet Operators',
      description: 'Commercial fleets, delivery companies, and transport businesses with regular battery replacements and maintenance schedules.'
    },
    {
      title: 'Equipment Rental Companies',
      description: 'Businesses with forklifts, scissor lifts, and powered equipment requiring battery replacement and recycling services.'
    },
    {
      title: 'Marine & Boat Services',
      description: 'Marinas, boat dealerships, and marine mechanics with old boat batteries and marine electrical systems.'
    },
    {
      title: 'Homeowners',
      description: 'Individual vehicle owners replacing car batteries. Drop off at our facility or arrange pickup for multiple batteries.'
    },
  ];

  const faqs = [
    {
      question: 'How much do you pay for car batteries?',
      answer: 'Battery prices vary based on type, size, and current lead market rates. Standard car batteries typically pay $8-15 each, while larger truck and industrial batteries pay more based on weight. Contact us at +61 452 367 372 for current pricing as rates fluctuate with commodity markets.'
    },
    {
      question: 'Do batteries need to be drained before recycling?',
      answer: 'No, batteries should NOT be drained or opened before recycling. Bring them as-is with acid intact. We have proper equipment and licensing to handle battery acid safely. Attempting to drain batteries yourself is dangerous and illegal disposal of acid.'
    },
    {
      question: 'Can I bring batteries without the terminals?',
      answer: 'Yes, we accept batteries even if terminals are corroded, broken, or missing. The lead content is what matters most. Damaged or leaking batteries are also accepted - we have proper containment for all battery conditions.'
    },
    {
      question: 'How many batteries do I need for free pickup?',
      answer: 'For residential customers, we typically require a minimum of 4-6 car batteries for free pickup within Melbourne metro. Businesses and mechanics with regular volume can arrange scheduled pickups regardless of quantity. Smaller amounts can be dropped off at our facility anytime.'
    },
    {
      question: 'What happens to recycled car batteries?',
      answer: 'Batteries are broken down in specialized recycling facilities. Lead plates are melted and refined for use in new batteries (98% pure lead). Battery acid is neutralized and converted to sodium sulfate for detergents and textiles. Plastic cases are cleaned and recycled into new battery cases or other plastic products.'
    },
    {
      question: 'Do you accept lithium or other battery types?',
      answer: 'We specialize in lead-acid batteries only (car, truck, marine, forklift, UPS). We do NOT accept lithium-ion, alkaline, nickel-cadmium, or household batteries. Those require different recycling processes and should go to specialized electronics recyclers or hazardous waste facilities.'
    },
    {
      question: 'Is it illegal to throw car batteries in the trash?',
      answer: 'Yes, it is illegal in Australia to dispose of lead-acid batteries in regular garbage or landfills. Car batteries are classified as hazardous waste due to lead and sulfuric acid content. They must be recycled through licensed facilities. Penalties apply for improper disposal.'
    },
    {
      question: 'Can you pick up batteries from multiple locations?',
      answer: 'Yes, we can arrange collection runs for businesses with multiple locations across Melbourne. This is common for auto parts chains, fleet operators with multiple depots, and companies with batteries at different sites. Contact us to discuss multi-location pickup logistics.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Car Battery Disposal</h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90">
              Safe Battery Recycling | Cash Payment | Free Pickup in Melbourne
            </p>
            <p className="text-lg opacity-80">
              EPA Licensed Lead-Acid Battery Recycling - Environmentally Responsible Disposal
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Responsible Battery Recycling</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Opera Copper Recycling provides safe car battery disposal services across Melbourne. We pay competitive prices for old car batteries and ensure they are recycled in compliance with environmental regulations.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Over 95% of a car battery can be recycled. The lead is melted down and reused in new batteries, while the plastic case is also recycled. Responsible battery disposal protects the environment and conserves resources.
                </p>
              </div>
              <div>
                <img src={batteriesImage} alt="Car Battery Recycling" className="rounded-2xl shadow-xl w-full object-cover aspect-square max-h-[400px]" />
              </div>
            </div>
            <div className="mb-16">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 font-semibold">
                  <a href="tel:+61452367372">Call For Current Pricing</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold">
                  <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get a Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Types */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Types of Batteries We Buy</h2>
              <p className="text-xl text-muted-foreground">We recycle all lead-acid battery types for cash</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {batteryTypes.map((type, index) => (
                <Card key={index} className="p-6 sm:p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">{type.name}</h3>
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
              Melbourne's trusted battery recycling service with proper licensing and safe disposal
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
                Everything you need to know about car battery recycling in Melbourne
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

export default CarBatteryDisposal;
