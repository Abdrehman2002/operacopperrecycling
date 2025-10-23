import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiShield, FiAward, FiUsers, FiTarget } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import brassScrap from '@/assets/brass-scrap.jpg';

const BrassScrapPrice = () => {
  const brassGrades = [
    {
      name: 'Yellow Brass',
      grade: 'High Zinc Content (60-70% Cu)',
      description: 'Common brass alloy containing 60-70% copper and 30-40% zinc. Widely used in plumbing fittings, valves, and decorative hardware.',
      examples: ['Plumbing fixtures', 'Door handles', 'Lock components', 'Decorative hardware', 'Valve bodies'],
      price: 'Standard Market Rate'
    },
    {
      name: 'Red Brass',
      grade: 'High Copper Content (85% Cu)',
      description: 'Premium brass alloy with higher copper content (85% copper, 15% zinc). More valuable due to higher copper percentage.',
      examples: ['Water meters', 'Pump components', 'Industrial valves', 'Premium fittings', 'Marine hardware'],
      price: 'Premium Rate'
    },
    {
      name: 'Brass Taps & Valves',
      grade: 'Mixed Brass Fixtures',
      description: 'Household and industrial brass taps, valves, and plumbing fixtures. Value depends on brass type and cleanliness.',
      examples: ['Kitchen taps', 'Bathroom fixtures', 'Industrial valves', 'Garden taps', 'Control valves'],
      price: 'Good Market Rate'
    },
    {
      name: 'Naval Brass',
      grade: 'Marine Grade (60% Cu, 39% Zn, 1% Sn)',
      description: 'Specialized brass alloy with tin content for corrosion resistance. Used in marine and coastal applications.',
      examples: ['Marine fittings', 'Boat hardware', 'Coastal equipment', 'Propeller shafts', 'Marine valves'],
      price: 'Premium Rate'
    },
    {
      name: 'Brass Turnings & Shavings',
      grade: 'Manufacturing Scrap',
      description: 'Brass chips, turnings, and shavings from machining operations. Must be free of oil and other metals for best pricing.',
      examples: ['Machine shop turnings', 'Brass chips', 'Drilling swarf', 'Lathe waste', 'CNC remnants'],
      price: 'Standard Rate (Clean Only)'
    },
    {
      name: 'Mixed Brass',
      grade: 'Various Brass Alloys',
      description: 'Mixed brass items of various types and compositions. Priced based on average brass content and contamination level.',
      examples: ['Mixed fittings', 'Decorative items', 'Various hardware', 'Brass components', 'Assorted brass'],
      price: 'Variable Rate'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-12 h-12 text-secondary" />,
      title: 'Top Brass Scrap Prices',
      description: 'Competitive pricing for all brass grades based on current market rates and copper content. We offer some of Melbourne\'s best brass scrap prices.',
    },
    {
      icon: <FiTruck className="w-12 h-12 text-secondary" />,
      title: 'Free Collection Service',
      description: 'Free pickup available for qualifying quantities across Melbourne. We make brass recycling convenient and hassle-free.',
    },
    {
      icon: <FiShield className="w-12 h-12 text-secondary" />,
      title: 'Accurate Grading',
      description: 'Expert identification of brass types and alloys ensures you get the correct pricing for your materials.',
    },
    {
      icon: <FiAward className="w-12 h-12 text-secondary" />,
      title: 'Professional Service',
      description: 'Transparent pricing, fair assessments, and immediate payment. We treat every customer with respect and professionalism.',
    },
    {
      icon: <FiClock className="w-12 h-12 text-secondary" />,
      title: 'Instant Payment',
      description: 'Get paid immediately for your brass scrap. No waiting periods or delayed payments.',
    },
    {
      icon: <FiTarget className="w-12 h-12 text-secondary" />,
      title: 'Best Market Rates',
      description: 'Our brass prices reflect current market conditions and copper content, ensuring you receive fair value.',
    },
  ];

  const pricingFactors = [
    {
      title: 'Brass Type & Composition',
      description: 'Different brass alloys have varying copper content. Red brass with 85% copper commands higher prices than yellow brass with 60-70% copper.',
    },
    {
      title: 'Cleanliness & Purity',
      description: 'Clean brass free from steel, aluminum, plastic, or other contaminants receives premium pricing. Mixed or dirty brass is valued lower.',
    },
    {
      title: 'Quantity & Volume',
      description: 'Larger quantities often qualify for better pricing and free pickup service. Minimum weights apply for collection.',
    },
    {
      title: 'Copper Market Prices',
      description: 'Brass prices are directly influenced by copper market rates since brass is primarily a copper alloy.',
    },
    {
      title: 'Form & Preparation',
      description: 'Sorted brass by type (yellow, red, naval) receives better pricing than unsorted mixed brass loads.',
    },
    {
      title: 'Contamination Level',
      description: 'Brass items with attachments, paint, or other materials may require processing, affecting the final price.',
    },
  ];

  const customerTypes = [
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Plumbers & HVAC',
      description: 'Plumbing professionals with brass fittings, valves, and components from installations and renovations.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Manufacturing Companies',
      description: 'Manufacturers with brass turnings, offcuts, and production waste from machining operations.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Demolition Contractors',
      description: 'Demolition companies salvaging brass fixtures, taps, and hardware from buildings.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Marine & Boat Builders',
      description: 'Marine industry professionals with naval brass, boat fittings, and marine hardware.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Scrap Dealers',
      description: 'Individual collectors and businesses gathering brass items from various sources.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Property Managers',
      description: 'Building managers replacing brass fixtures, door hardware, and decorative items.',
    },
  ];

  const faqs = [
    {
      question: 'What is the current brass scrap price in Melbourne?',
      answer: 'Brass scrap prices vary based on brass type, copper content, and market conditions. Red brass (85% copper) typically commands higher prices than yellow brass (60-70% copper). Current prices fluctuate with copper market rates. Contact us at +61 452 367 372 for up-to-date pricing based on your specific brass materials.',
    },
    {
      question: 'What types of brass do you buy?',
      answer: 'We purchase all types of brass including: yellow brass (plumbing fixtures, hardware), red brass (valves, industrial components), naval brass (marine applications), brass taps and valves, brass turnings and shavings, mixed brass items, decorative brass, and brass fittings. Both sorted and mixed brass loads are accepted.',
    },
    {
      question: 'How can I tell if I have yellow brass or red brass?',
      answer: 'Red brass has a reddish color due to higher copper content (85% copper), while yellow brass has a more golden yellow appearance (60-70% copper). Red brass is denser and more valuable. Our experts can accurately identify brass types during assessment to ensure correct pricing.',
    },
    {
      question: 'Do brass items need to be clean for recycling?',
      answer: 'While cleaning is not required, removing attachments like screws, plastic components, and other materials increases value. Clean, sorted brass receives premium pricing. However, we accept brass items as-is with pricing adjusted for cleaning and processing requirements.',
    },
    {
      question: 'Is free pickup available for brass scrap?',
      answer: 'Yes, we offer free pickup service across Melbourne for qualifying quantities of brass scrap. Minimum weight requirements typically apply (often 50-100kg depending on location). Contact us to discuss your load and arrange convenient collection.',
    },
    {
      question: 'Why does brass have value?',
      answer: 'Brass is valuable because it\'s primarily made of copper (60-85%), which is a valuable metal. Brass is highly recyclable, requires less energy to recycle than to produce from raw materials, and maintains its properties through recycling. The copper content directly influences brass scrap prices.',
    },
    {
      question: 'Do you buy brass turnings and shavings from machine shops?',
      answer: 'Yes, we purchase brass turnings, chips, and shavings from machining operations. For best pricing, turnings should be free of cutting oil, coolant, and other metals. We can accept oily turnings at adjusted rates. Machine shops with regular production receive competitive bulk pricing.',
    },
    {
      question: 'What should I do with old brass taps and fixtures?',
      answer: 'Collect brass taps, valves, and fixtures together. If possible, separate red brass from yellow brass for better pricing. Remove any plastic handles or components if convenient, but it\'s not required. Bring them to us for assessment and immediate payment at current market rates.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Brass Scrap Price Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Excellent brass scrap prices for all grades in Melbourne. We buy yellow brass, red brass, naval brass, fixtures, fittings, valves, and turnings. Instant payment and professional service.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-secondary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FiPhone className="w-5 h-5" />
              <a href="tel:+61452367372" className="hover:underline font-semibold">+61 452 367 372</a>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-5 h-5" />
              <span>Melbourne, VIC</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-5 h-5" />
              <span>Mon-Sat: 7AM - 5PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">Melbourne's Top Brass Scrap Buyer</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Opera Copper Recycling offers competitive brass scrap prices for all types of brass materials in Melbourne. Whether you have plumbing fixtures, industrial valves, decorative brass items, or manufacturing waste, we provide expert grading and fair market pricing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our experienced team accurately identifies brass alloys including yellow brass, red brass, and naval brass, ensuring you receive the correct price based on copper content and market rates.
                </p>
              </div>
              <div>
                <img src={brassScrap} alt="Brass Scrap" className="rounded-2xl shadow-xl w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brass Grades Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Brass Grades & Types We Buy</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We purchase all brass grades with pricing based on copper content and market conditions. Below are the main brass types we accept.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {brassGrades.map((grade, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-heading font-bold text-foreground">{grade.name}</h3>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                      {grade.price}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-secondary mb-3">{grade.grade}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{grade.description}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold mb-2 text-foreground">Common Examples:</p>
                    <ul className="space-y-1">
                      {grade.examples.map((example, idx) => (
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

      {/* Why Choose Us Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Why Choose Opera Copper Recycling?</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Melbourne's trusted brass scrap buyer with expert grading and competitive pricing
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-heading font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">What Affects Brass Scrap Prices?</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Understanding brass pricing factors helps you maximize the value of your materials
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {pricingFactors.map((factor, index) => (
                <Card key={index} className="p-6 border-l-4 border-secondary">
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{factor.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{factor.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Who We Serve</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Professional brass recycling services for trades, businesses, and collectors across Melbourne
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customerTypes.map((customer, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{customer.icon}</div>
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-2">{customer.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{customer.description}</p>
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Common questions about brass scrap pricing and recycling in Melbourne
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-heading font-semibold hover:text-secondary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get Top Dollar for Your Brass Scrap</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling today for competitive brass prices and professional service across Melbourne. Expert grading, instant payment, and free pickup for qualifying loads.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-10 h-14 font-semibold">
              <a href="tel:+61452367372">Call +61 452 367 372</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 h-14 font-semibold">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrassScrapPrice;
