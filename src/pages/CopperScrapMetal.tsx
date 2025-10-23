import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiCheck, FiDollarSign, FiTruck, FiAward, FiShield, FiClock, FiUsers, FiMapPin } from 'react-icons/fi';
import copperCables from '@/assets/copper-cables.jpg';
import copperMaterials from '@/assets/copper-materials.jpg';

const CopperScrapMetal = () => {
  const copperGrades = [
    {
      name: 'Bare Bright Copper',
      grade: '#1 Bare Bright',
      description: 'The highest grade and most valuable copper. Clean, uncoated, unalloyed copper wire and cable with minimum 99% purity. No oxidation, solder, paint, or coating.',
      examples: ['Clean copper wire', 'Bright copper cable', 'New copper offcuts', 'Uninsulated electrical wire'],
      price: 'Highest Market Rate'
    },
    {
      name: '#1 Copper',
      grade: '#1 Copper',
      description: 'Clean, unalloyed copper pipes, tubes, busbars, clippings, and wire. Minimum 1/16 inch thick. May have minor tarnishing but no paint, solder, or heavy corrosion.',
      examples: ['Clean copper pipes', 'Copper tubing', 'Copper bus bars', 'Clean copper fittings'],
      price: 'Premium Rate'
    },
    {
      name: '#2 Copper',
      grade: '#2 Copper',
      description: 'Oxidized, stained, or burnt copper. May have solder, paint, minor corrosion, or tarnishing. Still highly valuable despite imperfections.',
      examples: ['Oxidized copper', 'Painted copper', 'Soldered copper', 'Burnt copper wire'],
      price: 'Good Rate'
    },
    {
      name: 'Insulated Copper Wire',
      grade: 'Insulated Wire',
      description: 'Copper wire and cable still in insulation. Price depends on copper recovery percentage. We process and strip insulation on-site.',
      examples: ['Electrical cables', 'Romex wire', 'Building wire', 'Extension cords'],
      price: 'Based on Copper Content'
    },
    {
      name: 'Copper Tubing & Pipe',
      grade: 'Copper Tubing',
      description: 'Plumbing and HVAC copper tubing. Includes ACR (Air Conditioning & Refrigeration) and DWV (Drain-Waste-Vent) copper pipes.',
      examples: ['Plumbing pipes', 'ACR tubing', 'Refrigerant lines', 'Water pipes'],
      price: 'Premium Rate'
    },
    {
      name: 'Copper Radiators',
      grade: 'Copper Radiators',
      description: 'Automotive and industrial radiators containing copper fins and tubes. Clean copper/brass radiators command better prices.',
      examples: ['Car radiators', 'Truck radiators', 'Industrial heat exchangers', 'HVAC radiators'],
      price: 'Good to Premium'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Best Market Prices',
      description: 'We offer competitive rates based on current LME (London Metal Exchange) copper prices, updated daily to reflect global market values.'
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: 'Free Pickup Service',
      description: 'No-cost collection for copper loads of 50kg+ across Melbourne. We come to you with proper equipment and vehicles.'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Same-Day Payment',
      description: 'Instant cash or immediate bank transfer when we collect. No waiting periods or delayed payments - get paid on the spot.'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: '15+ Years Experience',
      description: 'Trusted copper buyers since 2009. Serving thousands of satisfied customers including electricians, plumbers, and industrial clients.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Licensed & Insured',
      description: 'Fully certified scrap metal dealers with EPA compliance. All necessary permits, insurance, and proper documentation.'
    },
    {
      icon: <FiCheck className="w-8 h-8" />,
      title: 'Certified Scales',
      description: 'Transparent weighing with government-certified scales. You watch the weighing process and see the exact weight.'
    },
  ];

  const whoWeServe = [
    {
      title: 'Electricians & Electrical Contractors',
      description: 'We buy copper wire, electrical cables, and offcuts from residential and commercial electrical work. Regular pickup schedules available.'
    },
    {
      title: 'Plumbers & HVAC Technicians',
      description: 'Cash for copper pipes, tubing, fittings, and refrigerant lines. We understand tradespeople need quick, reliable service.'
    },
    {
      title: 'Demolition & Construction Sites',
      description: 'Large-scale copper removal from demolition projects. We handle bulk copper from wiring, pipes, and building materials.'
    },
    {
      title: 'Manufacturing & Industrial Facilities',
      description: 'Industrial copper scrap from production processes, manufacturing offcuts, and machinery. Scheduled pickups for ongoing production.'
    },
    {
      title: 'Renovation & Homeowners',
      description: 'Homeowners renovating properties with old copper plumbing or electrical systems. Turn old copper into cash!'
    },
    {
      title: 'Scrap Metal Dealers & Recyclers',
      description: 'Wholesale copper buyers for other recyclers and dealers. Competitive bulk pricing available.'
    },
  ];

  const faqs = [
    {
      question: 'What is the current price for copper scrap in Melbourne?',
      answer: 'Copper prices fluctuate daily based on global market rates (LME). Currently, bare bright copper typically fetches $8-10 per kg, #1 copper pipes range $7-9 per kg, #2 copper is $6-8 per kg, and insulated wire is priced based on copper content (usually 40-60% of bare bright rates). Call us at +61 452 367 372 for today\'s exact pricing as rates change daily.'
    },
    {
      question: 'Do you offer free pickup for copper scrap?',
      answer: 'Yes! We provide completely free pickup service for copper loads of 50kg or more within the Melbourne metropolitan area. This includes all suburbs from Dandenong to Werribee, Frankston to Melton. For smaller quantities or regional areas outside metro Melbourne, please contact us to discuss collection options and possible arrangements.'
    },
    {
      question: 'What types of copper scrap do you accept?',
      answer: 'We buy ALL forms of copper: bare bright copper wire, #1 and #2 copper, copper pipes and tubing (all diameters), insulated copper cables, copper gutters, copper roofing materials, electrical copper components, copper bus bars, copper radiators, copper heat exchangers, copper fittings, copper fixtures, brass mixtures, and even oxidized or burnt copper. If it contains copper, we\'ll buy it!'
    },
    {
      question: 'How do you determine copper grades and prices?',
      answer: 'Copper grading is based on purity, thickness, and contamination level. Bare bright copper (99%+ pure, uncoated) gets top dollar. #1 copper includes clean pipes/bars with minimum 1/16" thickness. #2 copper has oxidation, paint, solder, or minor impurities. Our experienced team assesses your copper on-site, explains the grading system, and shows you the classification before weighing. We use industry-standard grading practices.'
    },
    {
      question: 'Do I need identification to sell copper scrap?',
      answer: 'Yes, Victorian law requires valid photo identification for all scrap metal transactions to prevent theft and ensure legitimate recycling. We need a current driver\'s license, passport, or proof of age card. Business customers must provide ABN/ACN documentation and business proof. We keep records as required by state regulations for legal compliance and security.'
    },
    {
      question: 'Can I get paid immediately for my copper?',
      answer: 'Absolutely! We offer instant payment via cash or immediate bank transfer at the time of collection. No waiting days or weeks for payment processing. You watch us weigh your copper on certified scales, we calculate payment based on current rates, and you receive payment immediately. It\'s that simple - same-day service, same-day payment.'
    },
    {
      question: 'What\'s the difference between bare bright copper and #1 copper?',
      answer: 'Bare bright copper is the highest grade - clean, uncoated wire/cable with 99%+ purity, bright red color, and no oxidation. #1 copper includes thicker materials like pipes and bars that are clean but may have minor tarnishing. Both are unalloyed and uncoated, but bare bright commands a premium due to its purity and processing ease. The price difference is typically $0.50-1.50 per kg.'
    },
    {
      question: 'Do you buy insulated copper wire?',
      answer: 'Yes! We buy insulated copper wire and cables of all types. The price depends on the copper recovery percentage (how much actual copper vs. insulation). Thicker cables with more copper content pay better rates. We have stripping equipment to process insulated wire on-site. Common insulated wire includes Romex, THHN, building wire, and extension cords. Call for current insulated wire prices.'
    },
  ];

  const pricingFactors = [
    {
      factor: 'Copper Grade & Purity',
      description: 'Higher grade copper (bare bright, #1) commands premium prices due to purity and easier processing.'
    },
    {
      factor: 'Quantity & Volume',
      description: 'Larger quantities may qualify for better rates. Bulk sellers often receive preferential pricing.'
    },
    {
      factor: 'Contamination Level',
      description: 'Clean copper free from solder, paint, insulation, and other materials fetches higher prices.'
    },
    {
      factor: 'Current Market Rates',
      description: 'Copper prices fluctuate based on LME (London Metal Exchange) global commodity prices.'
    },
    {
      factor: 'Form & Processing Required',
      description: 'Wire and cables may require stripping. Pipes and tubes are easier to process and may command slight premiums.'
    },
    {
      factor: 'Delivery vs. Pickup',
      description: 'Self-delivery of copper to our facility may qualify for slightly better rates than pickup service.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Cash For Copper Scrap Metal Melbourne</h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90">
              Top Dollar for All Types of Copper Scrap | Free Pickup | Instant Payment
            </p>
            <p className="text-lg opacity-80">
              Melbourne's Most Trusted Copper Buyers Since 2009 - Serving Electricians, Plumbers, Contractors & Homeowners
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
              <span>Mon-Sat: 8AM-6PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={copperCables} alt="Copper Scrap Metal Melbourne" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Melbourne's Leading Copper Scrap Buyers</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                Opera Copper Recycling has been Melbourne's trusted copper scrap buyer since 2009. We offer the most competitive prices for all types of copper scrap, from bare bright copper wire to oxidized copper pipes and everything in between.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Whether you're an electrician with copper wire offcuts, a plumber with old copper pipes, a demolition contractor with building copper, or a homeowner renovating your property, we provide instant payment and professional service every time.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We understand that copper is valuable, and we ensure you get fair market prices based on current LME rates. Our certified scales, transparent weighing process, and immediate payment have made us the preferred choice for thousands of Melbourne customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 font-semibold">
                  <a href="tel:+61452367372">Call For Today's Price</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link to="/price-calculator">Price Calculator</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copper Grades Detailed */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Types of Copper We Buy</h2>
              <p className="text-xl text-muted-foreground">Understanding copper grades helps you get the best price for your scrap</p>
            </div>

            <div className="space-y-6">
              {copperGrades.map((grade, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-heading font-bold">{grade.name}</h3>
                        <span className="text-sm font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                          {grade.grade}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{grade.description}</p>
                      <div className="mb-3">
                        <p className="text-sm font-semibold mb-2">Examples:</p>
                        <div className="flex flex-wrap gap-2">
                          {grade.examples.map((example, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded">{example}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-accent/10 rounded-lg p-4">
                      <FiDollarSign className="w-10 h-10 text-secondary mb-2" />
                      <p className="text-sm font-semibold text-center">{grade.price}</p>
                      <Button asChild size="sm" variant="outline" className="mt-3">
                        <a href="tel:+61452367372">Get Quote</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Opera Copper Recycling</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Melbourne's most trusted copper scrap buyers with unmatched service and pricing
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

      {/* Pricing Factors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">What Affects Copper Scrap Prices?</h2>
            <Card className="p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Copper scrap prices are determined by several factors. Understanding these helps you maximize the value of your copper:
              </p>
              <div className="space-y-4">
                {pricingFactors.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0">
                    <FiCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.factor}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Pro Tip:</strong> Separate your copper by grade before calling us. Clean, sorted copper always gets better prices than mixed or contaminated loads.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about selling copper scrap in Melbourne
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

      {/* Image Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">Simple, Fast, Professional</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our copper recycling process is straightforward and transparent. We assess your copper, grade it fairly, weigh it on certified scales, and provide instant payment.
              </p>
              <ul className="space-y-2 mb-6">
                {['Free phone quote available', 'No hidden fees or charges', 'Transparent grading explained', 'Watch the weighing process', 'Instant cash or bank transfer'].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={copperMaterials} alt="Copper Recycling Process" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Sell Your Copper Scrap?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling today for the best copper scrap prices in Melbourne. Free pickup, instant payment, and professional service guaranteed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-10 h-14 font-semibold">
              <a href="tel:+61452367372">Call +61 452 367 372</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 h-14 font-semibold">
              <Link to="/contact">Request Quote Online</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">Open Monday to Saturday, 8:00 AM - 6:00 PM | Serving All Melbourne Suburbs</p>
        </div>
      </section>
    </div>
  );
};

export default CopperScrapMetal;
