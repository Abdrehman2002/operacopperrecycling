import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw, FiAward, FiShield, FiUsers } from 'react-icons/fi';
import acImage from '@/assets/ac 2.jpeg';

const ScrapACUnits = () => {
  const acTypes = [
    {
      name: 'Split System Air Conditioners',
      description: 'Wall-mounted indoor units with outdoor compressors. Contains valuable copper refrigerant lines, copper wiring, and aluminum heat exchangers.',
      examples: ['Residential split systems', 'Multi-head systems', 'Inverter AC units', 'Reverse cycle systems'],
      price: 'Good Rate'
    },
    {
      name: 'Ducted AC Systems',
      description: 'Central cooling systems with extensive copper and aluminum components. Higher scrap value due to larger quantity of recyclable materials.',
      examples: ['Whole-house ducted systems', 'Commercial ducted AC', 'Zoned climate control', 'Central HVAC units'],
      price: 'Premium Rate'
    },
    {
      name: 'Window AC Units',
      description: 'Self-contained window-mounted units. Compact but contain copper coils, aluminum fins, and compressor motors worth recycling.',
      examples: ['Window-mounted units', 'Through-wall AC', 'Portable window AC', 'Single-room coolers'],
      price: 'Standard Rate'
    },
    {
      name: 'Commercial HVAC Equipment',
      description: 'Large-scale commercial cooling systems with substantial copper and aluminum content. High-value scrap from offices and industrial facilities.',
      examples: ['Rooftop HVAC units', 'Package AC systems', 'Commercial chillers', 'Industrial cooling equipment'],
      price: 'Premium Rate'
    },
    {
      name: 'Portable Air Conditioners',
      description: 'Mobile AC units with copper coils and compressor motors. Smaller units but still contain recyclable copper and aluminum.',
      examples: ['Freestanding portable AC', 'Mobile cooling units', 'Spot coolers', 'Temporary AC solutions'],
      price: 'Standard Rate'
    },
    {
      name: 'Industrial Cooling Systems',
      description: 'Heavy-duty industrial AC and refrigeration equipment. Contains significant quantities of copper tubing, brass fittings, and aluminum components.',
      examples: ['Factory cooling systems', 'Cold storage AC', 'Process cooling equipment', 'Industrial refrigeration'],
      price: 'Premium to Excellent'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Fair Market Prices',
      description: 'Competitive rates based on copper and aluminum content. We accurately assess and pay for the recyclable materials in your AC units.'
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: 'Free Pickup Service',
      description: 'Complimentary removal and pickup for bulk AC unit quantities across Melbourne metro area. We handle the heavy lifting.'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Same-Day Service',
      description: 'Quick turnaround with same-day pickup and payment available for most jobs. Get your space cleared fast.'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'EPA Compliant',
      description: 'Fully licensed for refrigerant handling and disposal. We follow all environmental regulations for safe AC recycling.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Licensed Professionals',
      description: 'Certified technicians handle refrigerant removal safely. Fully insured service you can trust.'
    },
    {
      icon: <FiRefreshCw className="w-8 h-8" />,
      title: 'Eco-Friendly Process',
      description: 'Environmentally responsible recycling that recovers metals and disposes of refrigerants properly, protecting the ozone layer.'
    },
  ];

  const whoWeServe = [
    {
      title: 'HVAC Contractors & Technicians',
      description: 'We buy old AC units removed during replacements and upgrades. Regular collection available for busy contractors.'
    },
    {
      title: 'Property Managers',
      description: 'Building managers replacing aging AC systems in rental properties, offices, and commercial buildings.'
    },
    {
      title: 'Demolition Companies',
      description: 'Large-scale AC and HVAC removal from demolition sites. We handle bulk pickups of commercial cooling equipment.'
    },
    {
      title: 'Homeowners',
      description: 'Residential customers replacing old or broken air conditioning units. Get paid for your old AC instead of paying disposal fees.'
    },
    {
      title: 'Businesses & Facilities',
      description: 'Commercial properties upgrading HVAC systems. We provide documentation for asset disposal and environmental compliance.'
    },
    {
      title: 'Scrap Metal Dealers',
      description: 'Wholesale buyers looking for proper AC recycling services with refrigerant handling capabilities.'
    },
  ];

  const faqs = [
    {
      question: 'How much can I get for a scrap air conditioner?',
      answer: 'AC unit prices vary based on size, type, and metal content. Split systems typically contain 2-5kg of copper and aluminum. Ducted systems have more material. We assess each unit and provide fair market pricing. Contact us at +61 452 367 372 for a quote on your specific units.'
    },
    {
      question: 'Do you remove refrigerant from AC units?',
      answer: 'Yes, we are fully licensed to handle refrigerant removal and disposal. All refrigerants are recovered in compliance with EPA regulations and ozone protection laws. This service is included in our pickup - no extra charge for proper refrigerant handling.'
    },
    {
      question: 'What types of AC units do you accept?',
      answer: 'We accept all types: split systems, ducted AC, window units, portable air conditioners, commercial HVAC equipment, rooftop units, chillers, and industrial cooling systems. Working or broken - we buy them all for their scrap metal content.'
    },
    {
      question: 'Is there a minimum quantity for free pickup?',
      answer: 'For individual homeowners, we typically require at least 2-3 AC units for free pickup within Melbourne metro. HVAC contractors and businesses with regular volume can arrange scheduled pickups. Small quantities can be dropped off at our facility.'
    },
    {
      question: 'Do I need to disconnect the AC unit first?',
      answer: 'No, you don\'t need to disconnect or prepare the unit. Our technicians handle the full removal process including electrical disconnection and refrigerant recovery. Just let us know where the units are located.'
    },
    {
      question: 'How long does AC pickup take?',
      answer: 'Most pickups are completed within 30-60 minutes depending on the number of units and accessibility. We can often schedule same-day or next-day service. Contact us in the morning for potential same-day pickup in Melbourne.'
    },
    {
      question: 'Can you take AC units from multi-story buildings?',
      answer: 'Yes, we have equipment and experience removing AC units from multi-story buildings, rooftops, and difficult access locations. Safety is our priority - we use proper rigging and equipment for elevated removals.'
    },
    {
      question: 'What happens to recycled AC units?',
      answer: 'After refrigerant recovery, units are dismantled and materials are separated. Copper tubing and wiring goes to copper recycling, aluminum fins to aluminum recycling, steel casings to steel processing, and motors are broken down for their copper content. Over 90% of an AC unit can be recycled.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Scrap AC Units</h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90">
              Professional AC Unit Recycling | Free Pickup | EPA Compliant Refrigerant Handling
            </p>
            <p className="text-lg opacity-80">
              Melbourne's Trusted Air Conditioning Recycling Service - Safe, Legal, and Environmentally Responsible
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Air Conditioning Unit Recycling</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Opera Copper Recycling purchases scrap air conditioning units across Melbourne. AC units contain valuable copper, aluminum, and other recyclable materials. We offer competitive prices and safe, environmentally responsible recycling.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Air conditioning units contain copper tubing, aluminum fins, copper wiring, and compressor motors - all valuable recyclable materials. We handle refrigerant removal and disposal in compliance with environmental regulations.
                </p>
              </div>
              <div>
                <img src={acImage} alt="AC Unit Recycling" className="rounded-2xl shadow-xl w-full object-cover aspect-square max-h-[400px]" />
              </div>
            </div>
            <div className="mb-16">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 font-semibold">
                  <a href="tel:+61452367372">Call For Price Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold">
                  <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get a Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AC Types */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Types of AC Units We Buy</h2>
              <p className="text-xl text-muted-foreground">All air conditioning systems contain recyclable metals worth cash</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {acTypes.map((type, index) => (
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
              Melbourne's most trusted AC recycling service with proper licensing and environmental compliance
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
                Everything you need to know about AC unit recycling in Melbourne
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

export default ScrapACUnits;
