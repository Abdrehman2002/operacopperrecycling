import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw, FiAward, FiUsers, FiZap } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import copperCables from '@/assets/copper-cables.jpg';

const InsulatedWireScrapPrice = () => {
  const wireTypes = [
    {
      name: 'Romex Cable (NM-B)',
      grade: 'Residential Wiring',
      description: 'Standard residential electrical wiring with plastic sheathing. Common in house wiring, containing copper conductors with insulation.',
      examples: ['House wiring', 'Residential electrical', 'Building wire', 'NM-B cable', '12/2 and 14/2 wire'],
      price: 'Good Market Rate',
      copperContent: '40-50% copper by weight'
    },
    {
      name: 'THHN/THWN Wire',
      grade: 'Commercial Grade',
      description: 'Thermoplastic insulated wire used in commercial and industrial applications. Higher copper content than romex.',
      examples: ['Commercial wiring', 'Industrial electrical', 'Conduit wire', 'Building electrical', 'Panel wiring'],
      price: 'Premium Rate',
      copperContent: '60-70% copper by weight'
    },
    {
      name: 'Extension Cords',
      grade: 'Light Duty Cable',
      description: 'Flexible power extension cords with rubber or vinyl insulation. Common household and workshop item.',
      examples: ['Power extension cords', 'Workshop cords', 'Household extensions', 'Outdoor extension cords'],
      price: 'Standard Rate',
      copperContent: '30-40% copper by weight'
    },
    {
      name: 'Appliance Cords',
      grade: 'Heavy Duty Cable',
      description: 'Power cords from appliances, tools, and equipment. Typically heavier gauge copper wire.',
      examples: ['Appliance power cords', 'Tool cords', 'Equipment cables', 'Heavy duty cords'],
      price: 'Good Rate',
      copperContent: '40-50% copper by weight'
    },
    {
      name: 'Communication Cables',
      grade: 'Low Voltage',
      description: 'Telephone, network, and data cables. Lower copper content but still recyclable.',
      examples: ['Phone cables', 'Network cables', 'Cat5/Cat6 cable', 'Data cables', 'Telephone wire'],
      price: 'Lower Rate',
      copperContent: '15-25% copper by weight'
    },
    {
      name: 'Industrial Power Cable',
      grade: 'Heavy Industrial',
      description: 'Large gauge industrial power cables and conductors. High copper content and excellent scrap value.',
      examples: ['Industrial feeders', 'Power distribution cables', 'Heavy gauge wire', 'Service entrance cable'],
      price: 'Premium Rate',
      copperContent: '60-80% copper by weight'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-12 h-12 text-secondary" />,
      title: 'Competitive Wire Prices',
      description: 'Fair pricing based on copper content and current market rates. We pay some of Melbourne\'s best prices for insulated wire scrap.',
    },
    {
      icon: <FiTruck className="w-12 h-12 text-secondary" />,
      title: 'Free Wire Collection',
      description: 'Free pickup available for qualifying quantities of insulated wire across Melbourne. We make wire recycling convenient.',
    },
    {
      icon: <FiZap className="w-12 h-12 text-secondary" />,
      title: 'All Wire Types Accepted',
      description: 'We buy all types of insulated wire - romex, THHN, extension cords, appliance cords, and more. No need to strip insulation.',
    },
    {
      icon: <FiAward className="w-12 h-12 text-secondary" />,
      title: 'Expert Grading',
      description: 'Accurate assessment of wire types and copper content ensures you receive correct pricing for your materials.',
    },
    {
      icon: <FiRefreshCw className="w-12 h-12 text-secondary" />,
      title: 'Environmentally Responsible',
      description: 'Wire recycling recovers valuable copper while preventing waste. We process insulation and recover copper efficiently.',
    },
    {
      icon: <FiClock className="w-12 h-12 text-secondary" />,
      title: 'Instant Payment',
      description: 'Get paid immediately for your insulated wire scrap. No waiting periods or delayed payments.',
    },
  ];

  const pricingFactors = [
    {
      title: 'Copper Content',
      description: 'Wire pricing is primarily based on copper content percentage. THHN wire with 60-70% copper pays more than extension cords with 30-40% copper.',
    },
    {
      title: 'Wire Gauge & Type',
      description: 'Heavier gauge wires contain more copper per foot. Industrial cables and heavy-duty cords typically command better prices than light-duty wire.',
    },
    {
      title: 'Insulation Type',
      description: 'Different insulation materials affect processing costs. PVC-insulated wire may have different pricing than rubber-insulated cables.',
    },
    {
      title: 'Quantity',
      description: 'Larger quantities of insulated wire qualify for better pricing and free pickup service. Minimum weights apply for collection.',
    },
    {
      title: 'Cleanliness & Contamination',
      description: 'Wire free of steel conduit, connectors, and other materials receives the best pricing. Remove end connections when possible.',
    },
    {
      title: 'Market Conditions',
      description: 'Insulated wire prices follow copper market fluctuations. Prices are updated regularly based on London Metal Exchange copper rates.',
    },
  ];

  const customerTypes = [
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Electricians',
      description: 'Electrical contractors with wire offcuts, old wiring from renovations, and leftover cable from jobs.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Construction Companies',
      description: 'Builders and contractors with electrical waste from new construction, renovations, and demolition projects.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Demolition Contractors',
      description: 'Demolition companies salvaging electrical wiring and cables from buildings and structures.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Industrial Facilities',
      description: 'Manufacturing plants and factories with old equipment cables, power cables, and industrial wiring.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Scrap Collectors',
      description: 'Individual collectors gathering insulated wire from various sources including renovations and demolitions.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Property Managers',
      description: 'Property owners and managers with wire from building upgrades, rewiring projects, and tenant improvements.',
    },
  ];

  const faqs = [
    {
      question: 'What is the current insulated wire scrap price in Melbourne?',
      answer: 'Insulated wire prices vary significantly based on wire type and copper content. THHN/THWN wire (60-70% copper) commands premium prices, romex cable (40-50% copper) receives good rates, while extension cords (30-40% copper) are priced lower. Contact us at +61 452 367 372 for current pricing on your specific wire type. Prices are updated regularly based on copper market rates.',
    },
    {
      question: 'Do I need to strip the insulation off the wire?',
      answer: 'No, you do not need to strip insulation. We accept insulated wire as-is. While bare copper wire commands higher prices, most people find the time and effort of stripping isn\'t worthwhile unless dealing with very large quantities. We have specialized equipment to efficiently process insulated wire.',
    },
    {
      question: 'What types of insulated wire do you buy?',
      answer: 'We purchase all types of insulated wire including: romex/NM-B cable, THHN/THWN wire, extension cords, appliance cords, communication cables (phone, network), industrial power cables, building wire, and more. Both residential light-duty and industrial heavy-duty cables are accepted.',
    },
    {
      question: 'How is insulated wire priced compared to bare copper?',
      answer: 'Insulated wire is priced based on copper content percentage. For example, if bare copper is $8/kg and romex is 45% copper, romex might be priced around $3.60/kg. The exact rate depends on insulation type, processing costs, and current market conditions. THHN wire with higher copper content receives better pricing.',
    },
    {
      question: 'Is free pickup available for insulated wire?',
      answer: 'Yes, we offer free pickup for qualifying quantities of insulated wire across Melbourne and surrounding areas. Minimum weight requirements typically apply - usually 100-200kg depending on location. Contact us to discuss your quantity and arrange convenient collection.',
    },
    {
      question: 'Should I remove connectors and plugs from wire?',
      answer: 'While not required, removing steel or plastic connectors, plugs, and junction boxes can increase the value of your wire. However, small end connectors don\'t significantly impact pricing. For large quantities, it may be worth removing major attachments.',
    },
    {
      question: 'What is the difference between romex and THHN wire pricing?',
      answer: 'THHN/THWN wire typically pays better than romex because it has higher copper content (60-70% vs 40-50%). THHN is thermoplastic insulated wire used in conduit, while romex is residential building cable with thicker sheathing. The copper-to-insulation ratio determines the price difference.',
    },
    {
      question: 'Do you buy old extension cords and power cords?',
      answer: 'Yes, we purchase extension cords and appliance power cords. While they have lower copper content (30-40%) than building wire, they still have value and we\'re happy to buy them. Many people collect them over time before bringing in a larger quantity.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Insulated Wire Scrap Price Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Best prices for insulated copper wire and cable scrap in Melbourne. We buy romex, THHN, extension cords, and all types of electrical wiring. No need to strip - bring it as-is.
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">Melbourne's Leading Insulated Wire Buyer</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Opera Copper Recycling offers competitive prices for all types of insulated wire and cable scrap. Whether you have romex from construction, THHN from commercial work, or extension cords from around the house, we provide fair market pricing based on copper content.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No need to strip insulation - bring your wire as-is and we'll handle the processing. Our expert team accurately grades wire types and provides instant payment based on current copper market rates.
                </p>
              </div>
              <div>
                <img src={copperCables} alt="Insulated Wire Scrap" className="rounded-2xl shadow-xl w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wire Types Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Types of Insulated Wire We Buy</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We purchase all types of insulated wire with pricing based on copper content and wire type.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {wireTypes.map((type, index) => (
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
              Melbourne's trusted insulated wire buyer with fair pricing and professional service
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">What Affects Insulated Wire Prices?</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Understanding wire pricing helps you maximize value from your materials
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
              Professional wire recycling services for trades, businesses, and collectors across Melbourne
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
              Common questions about insulated wire scrap pricing in Melbourne
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get Top Dollar for Your Insulated Wire</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary leading-relaxed">
            Contact Opera Copper Recycling today for competitive insulated wire prices and free pickup across Melbourne. No need to strip - bring it as-is for instant payment.
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

export default InsulatedWireScrapPrice;
