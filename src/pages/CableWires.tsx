import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw, FiAward, FiUsers, FiZap, FiShield } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import copperCables from '@/assets/copper-cables.jpg';

const CableWires = () => {
  const cableTypes = [
    {
      name: 'Power Cables',
      grade: 'High-Value Cable',
      description: 'Heavy-duty copper power cables from industrial, commercial, and residential applications. Excellent copper content and scrap value with 60-80% copper recovery.',
      examples: ['Service entrance cables', 'Industrial power feeds', 'Distribution cables', 'Electrical feeders'],
      price: 'Premium Rate'
    },
    {
      name: 'Armored Cable',
      grade: 'Commercial Cable',
      description: 'Metal-clad and armored cables (BX, MC, AC) with steel or aluminum sheathing. Contains valuable copper conductors with 30-50% copper after armor removal.',
      examples: ['BX cable', 'MC cable', 'AC cable', 'Metal-clad wiring'],
      price: 'Good Rate'
    },
    {
      name: 'Coaxial Cable',
      grade: 'Signal Cable',
      description: 'TV and internet coaxial cables with copper core conductors. Moderate copper content with 10-20% copper recovery from RG6/RG11 cables.',
      examples: ['TV coax cable', 'Internet cables', 'RG6/RG11 cable', 'CATV cables'],
      price: 'Standard Rate'
    },
    {
      name: 'Underground Cable',
      grade: 'Buried Cable',
      description: 'Underground electrical and utility cables. May have soil contamination but still valuable with 50-70% copper content when properly cleaned.',
      examples: ['Buried power cables', 'Underground utilities', 'Service laterals', 'Direct burial cable'],
      price: 'Good Rate'
    },
    {
      name: 'Building Wire',
      grade: 'Residential Wire',
      description: 'Common electrical building wire including Romex, THHN, and standard wiring. Widely used in construction with good copper recovery rates.',
      examples: ['Romex cable', 'THHN wire', 'Building wire', 'Construction wire'],
      price: 'Good Rate'
    },
    {
      name: 'Telephone Cable',
      grade: 'Communication Cable',
      description: 'Telephone, network, and data cables. Contains copper conductors but lower overall copper percentage at 15-30% recovery rate.',
      examples: ['Telephone cables', 'Network cables', 'Cat5/Cat6 cable', 'Data center cables'],
      price: 'Standard Rate'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Best Market Prices',
      description: 'Competitive pricing for all cable types based on copper content and current LME market rates. We pay premium prices for high-grade cables.',
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: 'Free Pickup Service',
      description: 'No-cost collection for cable wire loads of 150kg+ across Melbourne. We come to you with proper equipment and vehicles for heavy cables.',
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Same-Day Payment',
      description: 'Instant cash or immediate bank transfer when we collect. No waiting periods or delayed payments - get paid on the spot.',
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: '15+ Years Experience',
      description: 'Trusted cable wire buyers since 2009. Expert assessment and accurate grading ensures you receive correct pricing based on copper content.',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Licensed & Insured',
      description: 'Fully certified scrap metal dealers with EPA compliance. All necessary permits, insurance, and proper documentation.',
    },
    {
      icon: <FiCheck className="w-8 h-8" />,
      title: 'All Cable Types',
      description: 'We buy power cables, armored cables, coaxial, telephone, underground cables, and all other wire types. Professional processing available.',
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

  const whoWeServe = [
    {
      title: 'Electrical Contractors',
      description: 'We buy cable wire and electrical cables from residential and commercial electrical work. Leftover cables from projects, renovations, and installations.',
    },
    {
      title: 'Utility & Telecom Companies',
      description: 'Power companies and telecom providers with old service cables, underground utilities, and network infrastructure upgrades.',
    },
    {
      title: 'Construction & Demolition Sites',
      description: 'Large-scale cable removal from construction and demolition projects. We handle bulk cable wire from buildings and infrastructure.',
    },
    {
      title: 'Manufacturing & Industrial Facilities',
      description: 'Industrial cable scrap from factories, machinery cables, and facility upgrades. Scheduled pickups for ongoing production waste.',
    },
    {
      title: 'Data Centers & IT Companies',
      description: 'Network cables, server room cables, and data center infrastructure. Cat5/Cat6 cables and communication wire from upgrades.',
    },
    {
      title: 'Scrap Metal Dealers & Recyclers',
      description: 'Wholesale cable wire buyers for other recyclers and dealers. Competitive bulk pricing available for large quantities.',
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Cable Wires Recycling</h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90">
              Top Dollar for All Types of Cable Wire | Free Pickup | Instant Payment
            </p>
            <p className="text-lg opacity-80">
              Melbourne's Most Trusted Cable Wire Buyers Since 2009 - Serving Electricians, Contractors, Utilities & Businesses
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Cable Wire Recycling Experts</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Opera Copper Recycling is Melbourne's trusted buyer of cable wire scrap. We purchase all types of cables including power cables, communication cables, armored cables, coaxial cables, and underground utilities. Our pricing is based on accurate assessment of copper content and current market rates.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Whether you're an electrical contractor with leftover cables, a demolition company salvaging building materials, or a utility company upgrading infrastructure, we provide competitive pricing and professional service for cable recycling.
                </p>
              </div>
              <div>
                <img src={copperCables} alt="Cable Wires" className="rounded-2xl shadow-xl w-full object-cover aspect-square max-h-[400px]" />
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

      {/* Cable Types Detailed */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Types of Cable Wire We Buy</h2>
              <p className="text-xl text-muted-foreground">Understanding cable types helps you get the best price for your scrap</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {cableTypes.map((cable, index) => (
                <Card key={index} className="p-6 sm:p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 break-words">{cable.name}</h3>
                    <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {cable.price}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-secondary mb-3">{cable.grade}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{cable.description}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold mb-2 text-foreground">Common Examples:</p>
                    <ul className="space-y-1">
                      {cable.examples.map((example, idx) => (
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
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Opera Copper Recycling</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Melbourne's most trusted cable wire buyers with unmatched service and pricing
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
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">What Affects Cable Wire Prices?</h2>
            <Card className="p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Cable wire prices are determined by several factors. Understanding these helps you maximize the value of your cable scrap:
              </p>
              <div className="space-y-4">
                {pricingFactors.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0">
                    <FiCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Pro Tip:</strong> Separate your cable wire by type before calling us. Clean, sorted cables always get better prices than mixed or contaminated loads.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-12 md:py-20 bg-background">
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
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about selling cable wire scrap in Melbourne
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

export default CableWires;
