import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw, FiAward, FiUsers, FiShield } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import stainlessSteel from '@/assets/stainless-steel.jpg';

const StainlessSteelScrapPrice = () => {
  const stainlessGrades = [
    {
      name: '304 Stainless Steel',
      grade: '18/8 Stainless (18% Chromium, 8% Nickel)',
      description: 'The most common stainless steel grade. Non-magnetic, highly corrosion-resistant, and widely used in food service, architecture, and manufacturing.',
      examples: ['Kitchen equipment', 'Food processing equipment', 'Sinks and benchtops', 'Architectural panels', 'Industrial tanks'],
      price: 'Premium Rate',
      note: 'Most valuable common grade'
    },
    {
      name: '316 Stainless Steel',
      grade: 'Marine Grade (16-18% Chromium, 10-14% Nickel, 2-3% Molybdenum)',
      description: 'Superior corrosion resistance due to molybdenum content. Used in marine, chemical, and pharmaceutical applications. Commands highest prices.',
      examples: ['Marine equipment', 'Chemical processing', 'Pharmaceutical equipment', 'Medical instruments', 'Coastal applications'],
      price: 'Highest Premium Rate',
      note: 'Most valuable stainless grade'
    },
    {
      name: '430 Stainless Steel',
      grade: 'Ferritic Stainless (16-18% Chromium, Low Nickel)',
      description: 'Magnetic stainless steel with lower nickel content. Less corrosion-resistant than 304/316 but still valuable.',
      examples: ['Automotive trim', 'Appliance panels', 'Indoor decorative', 'Fasteners', 'Less demanding applications'],
      price: 'Standard Rate',
      note: 'Lower value due to reduced nickel'
    },
    {
      name: 'Mixed Stainless Steel',
      grade: 'Various Grades',
      description: 'Unsorted or mixed stainless steel materials. Priced based on average composition and assessed nickel/chromium content.',
      examples: ['Mixed restaurant equipment', 'Demolition stainless', 'Unknown grade materials', 'Contaminated stainless'],
      price: 'Variable Rate',
      note: 'Sorted grades receive better pricing'
    },
    {
      name: 'Stainless Steel Turnings',
      grade: 'Manufacturing Scrap',
      description: 'Stainless steel chips, turnings, and swarf from machining operations. Must be clean and free of oil for best pricing.',
      examples: ['Machine shop turnings', 'CNC chips', 'Lathe swarf', 'Drilling waste', 'Manufacturing offcuts'],
      price: 'Good Rate (Clean)',
      note: 'Oil-free turnings preferred'
    },
    {
      name: 'Stainless Steel Pipe & Tube',
      grade: 'Structural Stainless',
      description: 'Stainless steel piping, tubing, and structural materials. Pricing depends on grade (304, 316, etc.) and cleanliness.',
      examples: ['Industrial piping', 'Handrails', 'Structural tubes', 'Food processing pipes', 'HVAC ducting'],
      price: 'Premium Rate',
      note: 'Grade identification increases value'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-12 h-12 text-secondary" />,
      title: 'Top Stainless Prices',
      description: 'Premium pricing for all stainless steel grades with accurate testing and grading. 304 and 316 grades command the highest rates.',
    },
    {
      icon: <FiTruck className="w-12 h-12 text-secondary" />,
      title: 'Free Collection',
      description: 'Free pickup for qualifying quantities of stainless steel scrap across Melbourne. We handle heavy materials.',
    },
    {
      icon: <FiShield className="w-12 h-12 text-secondary" />,
      title: 'Professional Testing',
      description: 'XRF testing available to accurately identify stainless grades and ensure you receive correct premium pricing.',
    },
    {
      icon: <FiAward className="w-12 h-12 text-secondary" />,
      title: 'Grade Expertise',
      description: 'Expert identification of 304, 316, 430, and other stainless grades ensures accurate pricing and fair assessment.',
    },
    {
      icon: <FiRefreshCw className="w-12 h-12 text-secondary" />,
      title: 'Sustainable Recycling',
      description: 'Stainless steel is 100% recyclable indefinitely. Recycling preserves valuable nickel and chromium resources.',
    },
    {
      icon: <FiClock className="w-12 h-12 text-secondary" />,
      title: 'Immediate Payment',
      description: 'Instant payment for your stainless steel scrap. No waiting periods or delayed payments.',
    },
  ];

  const pricingFactors = [
    {
      title: 'Stainless Grade',
      description: '316 stainless commands highest prices due to molybdenum and higher nickel content. 304 receives premium pricing. 430 and other ferritic grades are valued lower due to reduced nickel.',
    },
    {
      title: 'Nickel & Chromium Content',
      description: 'Pricing is primarily driven by nickel content (expensive alloy). Higher nickel grades (316, 304) pay significantly more than low-nickel grades (430).',
    },
    {
      title: 'Cleanliness & Contamination',
      description: 'Clean stainless free of attachments, rubber, plastic, or other metals receives the best pricing. Remove gaskets, insulatio n, and non-stainless components when possible.',
    },
    {
      title: 'Sorting & Identification',
      description: 'Sorted stainless by grade (304 separate from 316, etc.) receives better pricing than mixed loads. We offer XRF testing for accurate identification.',
    },
    {
      title: 'Quantity',
      description: 'Larger quantities of stainless steel qualify for better pricing and free pickup service. Minimum weights apply for collection.',
    },
    {
      title: 'Market Conditions',
      description: 'Stainless prices fluctuate with nickel commodity markets. Prices are updated regularly based on global nickel and chromium rates.',
    },
  ];

  const customerTypes = [
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Food Service Industry',
      description: 'Restaurants, commercial kitchens, and food processors with old equipment, benchtops, sinks, and appliances.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Manufacturing Facilities',
      description: 'Industrial manufacturers with stainless turnings, offcuts, reject parts, and production scrap.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Construction & Demolition',
      description: 'Contractors salvaging stainless handrails, cladding, fixtures, and architectural elements from buildings.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Marine Industry',
      description: 'Boat builders and marine facilities with 316 marine-grade stainless from vessels, fittings, and equipment.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Chemical & Pharmaceutical',
      description: 'Chemical plants and pharmaceutical facilities with process equipment, tanks, and piping made from high-grade stainless.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Equipment Dealers',
      description: 'Commercial equipment dealers, scrap collectors, and businesses with used stainless equipment and materials.',
    },
  ];

  const faqs = [
    {
      question: 'What is the current stainless steel scrap price in Melbourne?',
      answer: 'Stainless steel prices vary significantly by grade. 316 stainless (marine grade) commands the highest prices, 304 stainless receives premium rates, while 430 ferritic stainless is valued lower due to reduced nickel content. Mixed or unidentified stainless is priced conservatively. Contact us at +61 452 367 372 for current pricing on your specific grade.',
    },
    {
      question: 'How can I tell if I have 304 or 316 stainless steel?',
      answer: '304 and 316 are both non-magnetic when tested with a magnet (though may be slightly magnetic if work-hardened). 316 contains molybdenum for superior corrosion resistance and is often used in marine/coastal applications. Bring your material in for XRF testing - we can accurately identify the grade to ensure you receive correct premium pricing.',
    },
    {
      question: 'Does magnetic stainless steel have value?',
      answer: 'Yes, magnetic stainless (typically 430 grade) still has value, though less than non-magnetic 304/316 due to lower nickel content. We purchase all stainless grades. The magnetic test is useful for quick identification - non-magnetic generally indicates 304/316, while magnetic indicates 400-series stainless.',
    },
    {
      question: 'Should I separate different stainless steel grades?',
      answer: 'Yes, separating stainless by grade significantly increases value. Keep 304 separate from 316 and both separate from 430-series. If you have large quantities and can identify grades, sorting pays off. We offer free XRF testing to help identify and sort your materials.',
    },
    {
      question: 'Do you buy stainless steel with attachments?',
      answer: 'Yes, we accept stainless with attachments, though removing non-stainless components increases value. Remove plastic handles, rubber gaskets, wood, aluminum, or other materials when practical. For equipment with minor attachments, bring as-is and we\'ll process accordingly.',
    },
    {
      question: 'Is free pickup available for stainless steel?',
      answer: 'Yes, we offer free pickup for qualifying quantities of stainless steel across Melbourne. Minimum weight requirements typically apply - usually 100-150kg depending on location. Stainless is valuable enough that collection is often worthwhile even for moderate quantities.',
    },
    {
      question: 'Do you buy stainless steel turnings and machine shop scrap?',
      answer: 'Yes, we purchase stainless steel turnings, chips, and swarf from machining operations. Clean turnings free of cutting oil receive the best pricing - oily turnings are accepted at adjusted rates. Grade identification (304, 316, etc.) helps maximize value for stainless turnings.',
    },
    {
      question: 'Why is stainless steel valuable for recycling?',
      answer: 'Stainless steel contains valuable nickel (8-14%) and chromium (16-18%) alloys. Nickel is expensive, making stainless recycling economically attractive. Stainless is 100% recyclable without quality loss - about 60% of new stainless production comes from recycled material. Recycling stainless conserves both energy and valuable resources.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Stainless Steel Scrap Price Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Premium prices for all stainless steel grades in Melbourne. We buy 304, 316, 430, and mixed stainless steel. Professional XRF testing available for accurate grade identification and pricing.
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">Melbourne's Stainless Steel Scrap Experts</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Opera Copper Recycling offers premium prices for all grades of stainless steel scrap. Whether you have 304 kitchen equipment, 316 marine-grade materials, or mixed stainless steel, we provide expert grading and fair market pricing based on nickel and chromium content.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our professional team uses XRF testing to accurately identify stainless grades, ensuring you receive the correct premium pricing for 304, 316, and other high-value grades. We serve restaurants, manufacturers, construction companies, and marine industries across Melbourne.
                </p>
              </div>
              <div>
                <img src={stainlessSteel} alt="Stainless Steel Scrap" className="rounded-2xl shadow-xl w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stainless Grades Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Stainless Steel Grades We Buy</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We purchase all stainless steel grades with premium pricing for 304 and 316 materials.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {stainlessGrades.map((grade, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-heading font-bold text-foreground">{grade.name}</h3>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                      {grade.price}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-secondary mb-3">{grade.grade}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{grade.description}</p>
                  <div className="border-t border-border pt-4 mb-4">
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
                  <div className="bg-accent/10 p-3 rounded">
                    <p className="text-xs text-muted-foreground"><strong>Note:</strong> {grade.note}</p>
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
              Melbourne's trusted stainless steel buyer with expert grading and premium pricing
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">What Affects Stainless Steel Prices?</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Understanding stainless pricing helps you maximize value from your materials
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
              Professional stainless steel recycling for businesses and industries across Melbourne
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
              Common questions about stainless steel scrap pricing in Melbourne
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get Premium Prices for Stainless Steel</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary leading-relaxed">
            Contact Opera Copper Recycling today for top stainless steel prices in Melbourne. Professional XRF testing, expert grading, instant payment, and free pickup for qualifying loads.
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

export default StainlessSteelScrapPrice;
