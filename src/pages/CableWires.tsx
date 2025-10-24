import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw, FiAward, FiUsers, FiZap } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import copperCables from '@/assets/copper-cables.jpg';

const CableWires = () => {
  const cableTypes = [
    {
      name: 'Copper Power Cables',
      grade: 'High-Value Cable',
      description: 'Heavy-duty copper power cables from industrial, commercial, and residential applications. Excellent copper content and scrap value.',
      examples: ['Service entrance cable', 'Industrial power feeds', 'Distribution cables', 'Electrical feeders', 'Underground cables'],
      price: 'Premium Rate',
      copperContent: '60-80% copper'
    },
    {
      name: 'Armored Cable (BX, MC, AC)',
      grade: 'Commercial Cable',
      description: 'Metal-clad and armored cables with steel or aluminum sheathing. Cable contains valuable copper conductors.',
      examples: ['BX cable', 'MC cable', 'AC cable', 'Armored electrical cable', 'Metal-clad wiring'],
      price: 'Good Rate',
      copperContent: '30-50% copper (after armor removal)'
    },
    {
      name: 'Communication Cables',
      grade: 'Low Voltage',
      description: 'Telephone, network, and data cables. Contains copper conductors but lower overall copper percentage.',
      examples: ['Telephone cables', 'Network cables', 'Cat5/Cat6/Cat7', 'Data center cables', 'Ethernet cables'],
      price: 'Standard Rate',
      copperContent: '15-30% copper'
    },
    {
      name: 'Coaxial Cables',
      grade: 'Signal Cable',
      description: 'TV and internet coaxial cables with copper core conductors. Moderate copper content.',
      examples: ['TV coax cable', 'Internet cables', 'RG6/RG11 cable', 'Satellite cables', 'CATV cables'],
      price: 'Lower Rate',
      copperContent: '10-20% copper'
    },
    {
      name: 'High Voltage Cables',
      grade: 'Industrial Grade',
      description: 'Large gauge high-voltage power cables from utility and industrial applications. Excellent copper recovery.',
      examples: ['Utility cables', 'Substation cables', 'High-voltage feeders', 'Transmission cables', 'Industrial power'],
      price: 'Premium Rate',
      copperContent: '70-85% copper'
    },
    {
      name: 'Underground Cables',
      grade: 'Buried Cable',
      description: 'Underground electrical and utility cables. May have soil contamination but still valuable.',
      examples: ['Buried power cables', 'Underground utilities', 'Service laterals', 'Direct burial cable'],
      price: 'Good Rate',
      copperContent: '50-70% copper (clean)'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-12 h-12 text-secondary" />,
      title: 'Top Cable Prices',
      description: 'Competitive pricing for all cable types based on copper content and current market rates. We pay premium prices for high-grade cables.',
    },
    {
      icon: <FiTruck className="w-12 h-12 text-secondary" />,
      title: 'Free Cable Collection',
      description: 'Free pickup service for large quantities of cable wire across Melbourne. We handle heavy cables and bulk loads.',
    },
    {
      icon: <FiZap className="w-12 h-12 text-secondary" />,
      title: 'All Cable Types',
      description: 'We buy power cables, communication cables, armored cables, coaxial, underground cables, and more.',
    },
    {
      icon: <FiAward className="w-12 h-12 text-secondary" />,
      title: 'Expert Assessment',
      description: 'Accurate grading and testing of cable types ensures you receive correct pricing based on actual copper content.',
    },
    {
      icon: <FiRefreshCw className="w-12 h-12 text-secondary" />,
      title: 'Eco-Friendly',
      description: 'Cable recycling recovers valuable copper and prevents waste. Professional processing of all insulation types.',
    },
    {
      icon: <FiClock className="w-12 h-12 text-secondary" />,
      title: 'Quick Payment',
      description: 'Immediate payment for your cable wire scrap. No delays or waiting periods.',
    },
  ];

  const pricingFactors = [
    {
      title: 'Copper Content',
      description: 'Cable pricing is primarily determined by copper content percentage. High-voltage cables with 70-80% copper pay significantly more than communication cables with 15-30% copper.',
    },
    {
      title: 'Cable Gauge & Size',
      description: 'Larger gauge cables contain more copper per foot. Industrial power cables typically have better value than small residential cables.',
    },
    {
      title: 'Insulation & Sheathing',
      description: 'Different insulation materials affect processing costs. Cables with minimal insulation or easy-to-remove sheathing may receive better pricing.',
    },
    {
      title: 'Contamination',
      description: 'Clean cables free of dirt, moisture, steel armor, or other materials receive the best pricing. Underground cables should be cleaned of excess soil.',
    },
    {
      title: 'Quantity',
      description: 'Larger quantities of cable qualify for better pricing and free pickup service. Minimum weights apply for collection.',
    },
    {
      title: 'Market Conditions',
      description: 'Cable prices fluctuate with copper commodity markets. Prices are updated regularly based on London Metal Exchange rates.',
    },
  ];

  const customerTypes = [
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Electrical Contractors',
      description: 'Electricians with leftover cables from commercial projects, renovations, and new installations.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Utility Companies',
      description: 'Power companies and utilities with old service cables, underground utilities, and infrastructure upgrades.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Telecommunications',
      description: 'Telecom companies with old network cables, data center cables, and infrastructure replacement materials.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Construction Sites',
      description: 'Construction companies with cable offcuts, project leftovers, and electrical waste from large developments.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Demolition Companies',
      description: 'Demolition contractors salvaging cables from buildings, industrial facilities, and infrastructure projects.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Industrial Facilities',
      description: 'Factories and plants with old power cables, machinery cables, and facility upgrades generating cable scrap.',
    },
  ];

  const faqs = [
    {
      question: 'What is the current cable wire scrap price in Melbourne?',
      answer: 'Cable wire prices vary significantly based on cable type and copper content. High-voltage power cables (70-80% copper) command premium prices, standard power cables (60-70% copper) receive good rates, communication cables (15-30% copper) are priced lower, and coaxial cables (10-20% copper) have the lowest rates. Contact us at +61 452 367 372 for current pricing on your specific cable type.',
    },
    {
      question: 'What types of cable wires do you buy?',
      answer: 'We purchase all types of cable wires including: copper power cables, armored cables (BX, MC, AC), communication and network cables, coaxial cables, high-voltage utility cables, underground cables, service entrance cables, industrial cables, and more. Both insulated and bare cables are accepted.',
    },
    {
      question: 'Do I need to strip cable insulation?',
      answer: 'No, stripping is not required. We accept cables with insulation intact. While bare copper commands higher prices, cable stripping is extremely time-consuming and often not worthwhile. We have industrial equipment to efficiently process insulated cables and recover the copper.',
    },
    {
      question: 'How do you price armored cables (BX, MC)?',
      answer: 'Armored cables are priced based on the copper conductor content after accounting for the steel or aluminum armor sheathing. The metal sheathing reduces the overall copper percentage, affecting pricing. We can assess armored cables and provide accurate pricing based on the actual copper content.',
    },
    {
      question: 'Is free pickup available for cable wire?',
      answer: 'Yes, we offer free pickup for qualifying quantities of cable wire across Melbourne. Minimum weight requirements apply - typically 150-200kg or more for collection. Cables are heavy, so free pickup is especially valuable for large quantities. Contact us to arrange pickup.',
    },
    {
      question: 'What should I do with dirty or underground cables?',
      answer: 'Underground cables with soil contamination are still accepted, though excessive dirt may affect pricing. Remove as much soil as possible before bringing in cables. Cables with minor dirt or weathering are perfectly acceptable. We can handle cables in various conditions.',
    },
    {
      question: 'Do communication and network cables have value?',
      answer: 'Yes, communication cables (telephone, network, Cat5/Cat6) do have value, though less than power cables due to lower copper content (15-30% vs 60-80%). We accept all communication cables. While individual cables are low-value, large quantities from data centers or telecom infrastructure can add up.',
    },
    {
      question: 'Can I bring cables with connectors attached?',
      answer: 'Yes, cables with end connectors and terminations are accepted. While removing connectors can slightly increase value, it\'s usually not worth the time unless you have large quantities. We can process cables with connectors, though pricing accounts for the non-copper content.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Cable Wires Recycling Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Top prices for all types of cable wires in Melbourne. We buy copper power cables, electrical wiring, communication cables, and industrial cable scrap. Free pickup for large quantities.
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
              <span>Monday to Friday: 7 AM – 5 PM | Saturday: 10 AM – 4 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">Melbourne's Cable Wire Recycling Experts</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Opera Copper Recycling is Melbourne's trusted buyer of cable wire scrap. We purchase all types of cables including power cables, communication cables, armored cables, coaxial cables, and underground utilities. Our pricing is based on accurate assessment of copper content and current market rates.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're an electrical contractor with leftover cables, a demolition company salvaging building materials, or a utility company upgrading infrastructure, we provide competitive pricing and professional service for cable recycling.
                </p>
              </div>
              <div>
                <img src={copperCables} alt="Cable Wires" className="rounded-2xl shadow-xl w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cable Types Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Types of Cable Wires We Buy</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We purchase all cable types with pricing based on copper content and cable condition.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {cableTypes.map((type, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-heading font-bold text-foreground">{type.name}</h3>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                      {type.price}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-secondary mb-3">{type.grade}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{type.description}</p>
                  <div className="border-t border-border pt-4 mb-4">
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
                  <div className="bg-accent/10 p-3 rounded">
                    <p className="text-xs font-semibold text-muted-foreground">{type.copperContent}</p>
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
              Melbourne's professional cable wire buyer with expert grading and competitive pricing
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">What Affects Cable Wire Prices?</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Understanding cable pricing helps you maximize value from your materials
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
              Professional cable recycling services for businesses and contractors across Melbourne
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
              Common questions about cable wire recycling in Melbourne
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get Top Dollar for Your Cable Wire</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary leading-relaxed">
            Contact Opera Copper Recycling today for competitive cable wire prices and free pickup across Melbourne. Expert assessment, instant payment, and professional service.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-10 h-14 font-semibold">
              <a href="tel:+61452367372">Call +61 452 367 372</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary text-lg px-10 h-14 font-semibold">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CableWires;
