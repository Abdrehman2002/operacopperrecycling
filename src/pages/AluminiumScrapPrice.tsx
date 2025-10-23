import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import aluminumScrap from '@/assets/aluminum-scrap.jpg';

const AluminiumScrapPrice = () => {
  const aluminumGrades = [
    {
      name: 'Clean Aluminum Extrusions',
      grade: 'Grade A Extrusions',
      description: 'Clean, uncoated aluminum extrusions and profiles from construction and manufacturing. This is the highest-paying grade of aluminum scrap.',
      examples: ['Window frames', 'Door frames', 'Structural profiles', 'Clean industrial extrusions', 'Aluminum sections'],
      price: 'Premium Rate'
    },
    {
      name: 'Aluminum Cans',
      grade: 'UBC (Used Beverage Cans)',
      description: 'Empty aluminum beverage cans. One of the most commonly recycled aluminum materials with excellent market value.',
      examples: ['Soft drink cans', 'Beer cans', 'Energy drink cans', 'Beverage packaging'],
      price: 'Standard Market Rate'
    },
    {
      name: 'Cast Aluminum',
      grade: 'Cast Grade',
      description: 'Aluminum castings from automotive, machinery, and industrial applications. Heavier and denser than extrusions.',
      examples: ['Engine blocks', 'Transmission housings', 'Machinery parts', 'Cast components', 'Automotive castings'],
      price: 'Mid-Range Rate'
    },
    {
      name: 'Aluminum Wheels & Rims',
      grade: 'Alloy Wheels',
      description: 'Aluminum alloy wheels from vehicles. Must be free of steel, rubber, and weights for best pricing.',
      examples: ['Car wheels', 'Truck rims', 'Motorcycle wheels', 'Alloy rims'],
      price: 'Good Market Rate'
    },
    {
      name: 'Aluminum Siding & Gutters',
      grade: 'Building Aluminum',
      description: 'Aluminum building materials including siding, gutters, and roofing materials. Should be free of paint and contamination for premium pricing.',
      examples: ['Aluminum siding', 'Rain gutters', 'Downpipes', 'Roofing sheets', 'Fascia boards'],
      price: 'Standard Rate'
    },
    {
      name: 'Aluminum Wire & Cable',
      grade: 'EC Aluminum',
      description: 'Electrical conductor aluminum wire and cable. Higher value when insulation is removed, but we accept insulated as well.',
      examples: ['Electrical wire', 'Power cables', 'Conductor cables', 'Overhead lines'],
      price: 'Variable Rate (Based on Insulation)'
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-12 h-12 text-secondary" />,
      title: 'Competitive Aluminum Prices',
      description: 'We offer some of the best aluminum scrap prices in Melbourne, based on current market rates and material quality. Get instant quotes and same-day payment.',
    },
    {
      icon: <FiTruck className="w-12 h-12 text-secondary" />,
      title: 'Free Pickup Service',
      description: 'Free collection for qualifying quantities of aluminum scrap across Melbourne and surrounding suburbs. We handle all the heavy lifting.',
    },
    {
      icon: <FiRefreshCw className="w-12 h-12 text-secondary" />,
      title: 'Environmentally Responsible',
      description: 'Recycling aluminum saves 95% of the energy required to produce new aluminum from raw materials. Help reduce environmental impact.',
    },
    {
      icon: <FiAward className="w-12 h-12 text-secondary" />,
      title: 'Professional Service',
      description: 'Expert grading, transparent pricing, and professional service. We accurately assess your aluminum and provide fair market value.',
    },
    {
      icon: <FiClock className="w-12 h-12 text-secondary" />,
      title: 'Fast Processing',
      description: 'Quick assessment and immediate payment. We value your time and make the recycling process as efficient as possible.',
    },
    {
      icon: <FiTrendingUp className="w-12 h-12 text-secondary" />,
      title: 'Market-Based Pricing',
      description: 'Our aluminum prices are updated regularly based on London Metal Exchange (LME) rates, ensuring you get the best possible value.',
    },
  ];

  const pricingFactors = [
    {
      title: 'Aluminum Grade & Type',
      description: 'Different aluminum grades command different prices. Clean extrusions typically fetch premium rates, while mixed aluminum may be priced lower.',
    },
    {
      title: 'Cleanliness & Contamination',
      description: 'Clean, sorted aluminum free from steel, plastic, rubber, or other materials receives the highest prices. Contaminated loads are priced accordingly.',
    },
    {
      title: 'Quantity',
      description: 'Larger quantities may qualify for better pricing and free pickup service. Minimum weights apply for collection.',
    },
    {
      title: 'Market Conditions',
      description: 'Aluminum prices fluctuate based on global commodity markets, particularly the London Metal Exchange (LME) aluminum prices.',
    },
    {
      title: 'Preparation',
      description: 'Removing attachments, coatings, and contamination can increase the value of your aluminum scrap significantly.',
    },
    {
      title: 'Location',
      description: 'Pickup location within Melbourne and surrounding areas. We service all suburbs with free collection for qualifying loads.',
    },
  ];

  const customerTypes = [
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Construction Companies',
      description: 'We work with builders and contractors who generate aluminum waste from window installations, cladding, and structural work.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Manufacturing Facilities',
      description: 'Industrial manufacturers with aluminum offcuts, turnings, and production scrap receive competitive bulk pricing.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Automotive Workshops',
      description: 'Auto repair shops and wreckers selling aluminum wheels, engine parts, and vehicle components.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Demolition Contractors',
      description: 'Demolition companies with aluminum building materials, fixtures, and structural components.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Scrap Collectors',
      description: 'Individual collectors and small businesses gathering aluminum cans, wheels, and various aluminum materials.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Commercial Businesses',
      description: 'Businesses upgrading equipment, replacing aluminum fixtures, or clearing aluminum inventory.',
    },
  ];

  const faqs = [
    {
      question: 'What is the current aluminum scrap price in Melbourne?',
      answer: 'Aluminum scrap prices vary based on grade, quantity, and market conditions. Clean aluminum extrusions typically command the highest prices, followed by aluminum cans, wheels, and cast aluminum. Contact us at +61 452 367 372 for current pricing based on your specific material. Prices are updated regularly based on London Metal Exchange rates.',
    },
    {
      question: 'What types of aluminum do you buy?',
      answer: 'We purchase all types of aluminum scrap including: clean extrusions and profiles, aluminum cans (UBC), cast aluminum (engine blocks, machinery parts), aluminum wheels and rims, siding and gutters, aluminum wire and cable, construction materials, industrial scrap, and more. Both clean and mixed aluminum loads are accepted.',
    },
    {
      question: 'Do I need to remove paint or coatings from aluminum?',
      answer: 'While not required, removing paint, anodizing, and coatings can significantly increase the value of your aluminum scrap. Clean, bare aluminum receives premium pricing. However, we do accept painted and coated aluminum at adjusted rates. For large quantities, it may be worth the effort to clean materials.',
    },
    {
      question: 'Is free pickup available for aluminum scrap?',
      answer: 'Yes, we offer free pickup service across Melbourne and surrounding suburbs for qualifying quantities of aluminum scrap. Minimum weight requirements apply - typically around 100kg or more for free collection. Contact us to discuss your load size and arrange pickup.',
    },
    {
      question: 'How do aluminum scrap prices compare to other metals?',
      answer: 'Aluminum typically commands moderate prices compared to other metals - lower than copper and brass, but often higher than steel. The advantage of aluminum is its light weight and high recyclability. Aluminum can be recycled indefinitely without losing quality, making it valuable for environmental reasons.',
    },
    {
      question: 'What is the difference between aluminum extrusions and cast aluminum?',
      answer: 'Aluminum extrusions are formed by pushing heated aluminum through a die (like window frames and profiles) and typically have a higher value. Cast aluminum is poured into molds (like engine blocks) and is usually denser and heavier. Both are recyclable, but extrusions generally command better prices per kilogram.',
    },
    {
      question: 'Do you buy aluminum cans? What quantity is required?',
      answer: 'Yes, we purchase aluminum beverage cans (UBC - Used Beverage Cans). While we accept any quantity, larger amounts are more economical to process. Cans should be empty and reasonably clean. Many collectors save up cans over time before bringing them in. We pay competitive market rates based on weight.',
    },
    {
      question: 'What should I do with aluminum wheels before selling?',
      answer: 'For the best price on aluminum wheels, remove all steel weights, valve stems, and tire pressure monitoring sensors. Tires and rubber should be removed if possible. Clean wheels free of contamination receive the highest pricing. However, we can accept wheels as-is with adjusted pricing for additional processing.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Aluminium Scrap Price Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Get the best aluminum scrap prices in Melbourne. We buy all grades including extrusions, cans, wheels, cast aluminum, and industrial scrap. Instant payment and free pickup available.
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">Melbourne's Trusted Aluminum Scrap Buyers</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Opera Copper Recycling is Melbourne's premier aluminum scrap buyer, offering competitive market-based prices for all types of aluminum materials. Whether you have construction extrusions, beverage cans, automotive wheels, or industrial aluminum scrap, we provide transparent pricing and professional service.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team has extensive experience in aluminum grading and recycling, ensuring you receive fair market value for your materials. We accept both clean and mixed aluminum loads, with premium pricing for sorted, contamination-free materials.
                </p>
              </div>
              <div>
                <img src={aluminumScrap} alt="Aluminum Scrap" className="rounded-2xl shadow-xl w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aluminum Grades Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Aluminum Grades & Types We Buy</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We purchase all grades of aluminum scrap at competitive market rates. Below are the main types we accept and their typical pricing categories.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {aluminumGrades.map((grade, index) => (
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
              Melbourne's most trusted aluminum scrap recycler with professional service and competitive pricing
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">What Affects Aluminum Scrap Prices?</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Understanding the factors that influence aluminum pricing helps you maximize value
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
              Professional aluminum recycling services for businesses and individuals across Melbourne
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
              Common questions about aluminum scrap pricing and recycling in Melbourne
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get the Best Price for Your Aluminum Scrap</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling today for current aluminum prices and free pickup service across Melbourne. Professional service, instant payment, and environmentally responsible recycling.
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

export default AluminiumScrapPrice;
