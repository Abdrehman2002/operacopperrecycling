import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiAlertCircle, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiShield, FiAward, FiUsers } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import copperMaterials from '@/assets/copper-materials.jpg';

const LeadScrapPrice = () => {
  const leadTypes = [
    {
      name: 'Lead Acid Batteries',
      description: 'Automotive, industrial, and UPS batteries containing lead plates. One of the most commonly recycled lead materials with excellent recovery rates.',
      examples: ['Car batteries', 'Truck batteries', 'Industrial batteries', 'UPS batteries', 'Forklift batteries', 'Marine batteries'],
      price: 'Standard Market Rate',
      note: 'Documentation may be required for large quantities'
    },
    {
      name: 'Lead Piping & Sheeting',
      description: 'Lead pipes, sheets, and flashing from plumbing and construction applications. Must be clean and free of contamination.',
      examples: ['Lead pipes', 'Lead sheeting', 'Lead flashing', 'Plumbing lead', 'Roof flashing', 'Lead linings'],
      price: 'Good Market Rate',
      note: 'Higher pricing for clean, sorted material'
    },
    {
      name: 'Lead Wheel Weights',
      description: 'Clip-on and adhesive wheel balancing weights from automotive applications. Common source of lead scrap.',
      examples: ['Clip-on weights', 'Stick-on weights', 'Tire weights', 'Balancing weights'],
      price: 'Standard Rate',
      note: 'Must be separated from steel clips for best pricing'
    },
    {
      name: 'Lead Cable Sheathing',
      description: 'Lead sheathing and covering from electrical and telecommunications cables. Valuable source of clean lead.',
      examples: ['Telecommunications cable', 'Power cable sheathing', 'Underground cable', 'Lead-covered wire'],
      price: 'Good Market Rate',
      note: 'Pricing varies based on lead content'
    },
    {
      name: 'Lead Roofing & Building Materials',
      description: 'Lead roofing materials, gutters, and architectural components. Should be free of tar and excessive contamination.',
      examples: ['Lead roofing', 'Lead gutters', 'Lead downpipes', 'Architectural lead', 'Lead valleys'],
      price: 'Variable Rate',
      note: 'Cleanliness affects pricing significantly'
    },
    {
      name: 'Lead Counterweights & Ballast',
      description: 'Lead weights and ballast used in machinery, elevators, and various industrial applications.',
      examples: ['Elevator weights', 'Crane counterweights', 'Machinery ballast', 'Industrial weights', 'Lead blocks'],
      price: 'Good Market Rate',
      note: 'Documentation may be required for large loads'
    },
  ];

  const safetyRequirements = [
    {
      icon: <FiAlertCircle className="w-10 h-10 text-secondary" />,
      title: 'Proper Documentation',
      description: 'Lead scrap requires proper documentation and compliance with environmental regulations. We maintain all necessary records for safe and legal lead recycling.',
    },
    {
      icon: <FiShield className="w-10 h-10 text-secondary" />,
      title: 'Safe Handling',
      description: 'Lead requires specialized handling due to health and environmental concerns. Our team follows strict safety protocols for collection, transport, and processing.',
    },
    {
      icon: <FiAward className="w-10 h-10 text-secondary" />,
      title: 'EPA Compliance',
      description: 'We comply with all EPA and state environmental regulations for lead recycling. Our facility is licensed and certified for lead scrap processing.',
    },
    {
      icon: <FiUsers className="w-10 h-10 text-secondary" />,
      title: 'Professional Service',
      description: 'Our trained staff ensures safe, compliant lead recycling while providing competitive pricing and efficient service to all customers.',
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="w-12 h-12 text-secondary" />,
      title: 'Competitive Lead Prices',
      description: 'Fair market pricing for all types of lead scrap based on current commodity rates and material quality.',
    },
    {
      icon: <FiTruck className="w-12 h-12 text-secondary" />,
      title: 'Safe Collection',
      description: 'Professional pickup service with proper equipment and safety procedures for handling lead materials.',
    },
    {
      icon: <FiShield className="w-12 h-12 text-secondary" />,
      title: 'Environmentally Responsible',
      description: 'Lead recycling prevents environmental contamination and conserves natural resources through proper processing.',
    },
    {
      icon: <FiAward className="w-12 h-12 text-secondary" />,
      title: 'Certified Processing',
      description: 'Licensed facility with certified processes for safe and compliant lead scrap recycling.',
    },
  ];

  const faqs = [
    {
      question: 'What is the current lead scrap price in Melbourne?',
      answer: 'Lead scrap prices vary based on lead type, quantity, cleanliness, and current market conditions. Lead batteries, clean lead, and lead sheet typically command the best prices. Contact us at +61 452 367 372 for current pricing based on your specific lead materials. We provide competitive rates based on London Metal Exchange (LME) lead prices.',
    },
    {
      question: 'What types of lead scrap do you accept?',
      answer: 'We accept lead acid batteries (automotive, industrial, UPS), lead pipes and sheeting, lead wheel weights, lead cable sheathing, lead roofing materials, lead counterweights, and other lead-based materials. Both clean and contaminated lead is accepted, with pricing adjusted accordingly. Some materials may require documentation.',
    },
    {
      question: 'Do I need special documentation to sell lead scrap?',
      answer: 'For most residential quantities of lead scrap, standard identification is sufficient. Large quantities, commercial sources, or certain types of lead (like batteries in bulk) may require additional documentation to comply with EPA regulations. We guide you through any necessary paperwork.',
    },
    {
      question: 'Is it safe to handle lead scrap?',
      answer: 'Lead can be hazardous if not handled properly. Avoid creating dust, wash hands thoroughly after handling, and avoid skin contact with battery acid. For large quantities, we recommend professional collection. Our team uses proper safety equipment and follows EPA guidelines for lead handling.',
    },
    {
      question: 'Do you offer pickup for lead scrap?',
      answer: 'Yes, we provide professional pickup service for qualifying quantities of lead scrap across Melbourne. Collection is performed using proper equipment and safety procedures. Minimum quantity requirements apply. Contact us to discuss your lead scrap and arrange safe, compliant collection.',
    },
    {
      question: 'Can I bring in car batteries? How much are they worth?',
      answer: 'Yes, we purchase car batteries and all types of lead acid batteries. Pricing varies based on battery size, type, and current lead market rates. Car batteries typically fetch good prices due to their high lead content and established recycling infrastructure. No need to drain the battery - bring it as-is.',
    },
    {
      question: 'Why is lead recycling important?',
      answer: 'Lead recycling is crucial for environmental and health protection. Lead is toxic and can contaminate soil and water if improperly disposed of. Recycling prevents environmental damage and conserves resources - recycled lead requires 65% less energy than producing new lead from ore. Most lead products contain 60-100% recycled content.',
    },
    {
      question: 'How is lead scrap priced compared to other metals?',
      answer: 'Lead typically has moderate scrap value - higher than steel but lower than copper or brass. However, lead batteries command good prices due to their consistent composition and established recycling markets. Pricing depends on lead purity, form, quantity, and current commodity markets. Clean lead sheet and pipe typically receive premium rates.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Lead Scrap Price Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Competitive lead scrap prices for batteries, pipes, sheeting, and weights. Safe, certified, and environmentally responsible lead recycling in Melbourne.
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

      {/* Important Safety Notice */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-l-4 border-secondary bg-background">
              <div className="flex items-start gap-4">
                <FiAlertCircle className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-2xl mb-3">Important: Safe Lead Recycling</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Lead recycling requires proper documentation, safe handling procedures, and compliance with environmental regulations. Opera Copper Recycling is fully licensed and certified for lead scrap collection and processing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We follow all EPA and Victorian environmental guidelines to ensure safe, compliant lead recycling. Our professional team handles all aspects of lead collection, transport, and processing with appropriate safety equipment and procedures.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">Certified Lead Scrap Recycling in Melbourne</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Opera Copper Recycling provides professional lead scrap recycling services with competitive pricing and strict compliance with environmental regulations. We purchase all types of lead materials including batteries, pipes, sheeting, weights, and cable sheathing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our licensed facility and trained staff ensure safe handling and processing of lead scrap. We provide transparent pricing based on current market rates while maintaining the highest safety and environmental standards.
                </p>
              </div>
              <div>
                <img src={copperMaterials} alt="Lead Materials" className="rounded-2xl shadow-xl w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Types Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Types of Lead Scrap We Buy</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We accept all forms of lead scrap with competitive pricing based on material type, cleanliness, and quantity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {leadTypes.map((type, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-heading font-bold text-foreground">{type.name}</h3>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                      {type.price}
                    </span>
                  </div>
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
                    <p className="text-xs text-muted-foreground"><strong>Note:</strong> {type.note}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Safety & Compliance</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Professional lead recycling with full regulatory compliance and safety protocols
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {safetyRequirements.map((item, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Why Choose Opera Copper Recycling?</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Licensed, certified, and committed to safe lead scrap recycling
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Common questions about lead scrap recycling in Melbourne
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Sell Your Lead Scrap Safely & Responsibly</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary leading-relaxed">
            Contact Opera Copper Recycling for safe, compliant lead scrap recycling with competitive prices. Professional collection, certified processing, and immediate payment.
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

export default LeadScrapPrice;
