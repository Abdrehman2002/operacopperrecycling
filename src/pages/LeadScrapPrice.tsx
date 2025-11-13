import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiAlertCircle, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiShield, FiAward, FiUsers } from 'react-icons/fi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import copperMaterials from '@/assets/copper-materials.jpg';

const LeadScrapPrice = () => {
  const leadTypes = [
    {
      name: 'Lead Batteries',
      grade: 'Lead Acid Batteries',
      description: 'Automotive, industrial, and UPS batteries containing lead plates. One of the most commonly recycled lead materials with excellent recovery rates.',
      examples: ['Car batteries', 'Truck batteries', 'Industrial batteries', 'UPS batteries'],
      price: 'Standard Market Rate'
    },
    {
      name: 'Lead Pipes',
      grade: 'Lead Piping',
      description: 'Lead pipes from plumbing and construction applications. Must be clean and free of contamination for best pricing.',
      examples: ['Lead pipes', 'Plumbing lead', 'Water pipes', 'Drainage pipes'],
      price: 'Good Market Rate'
    },
    {
      name: 'Lead Sheet',
      grade: 'Lead Sheeting',
      description: 'Lead sheets, flashing, and linings from construction and roofing applications. Higher pricing for clean, sorted material.',
      examples: ['Lead sheeting', 'Lead flashing', 'Roof flashing', 'Lead linings'],
      price: 'Premium Rate'
    },
    {
      name: 'Lead Weights',
      grade: 'Lead Counterweights',
      description: 'Wheel weights, counterweights, and ballast used in automotive and industrial applications. Common source of lead scrap.',
      examples: ['Wheel weights', 'Elevator weights', 'Crane counterweights', 'Industrial weights'],
      price: 'Standard Rate'
    },
    {
      name: 'Lead Cable Sheathing',
      grade: 'Cable Sheathing',
      description: 'Lead sheathing and covering from electrical and telecommunications cables. Valuable source of clean lead with good recovery rates.',
      examples: ['Telecommunications cable', 'Power cable sheathing', 'Underground cable', 'Lead-covered wire'],
      price: 'Good Rate'
    },
    {
      name: 'Mixed Lead Scrap',
      grade: 'Mixed Lead',
      description: 'Mixed lead materials including roofing, gutters, and architectural components. Pricing depends on cleanliness and contamination level.',
      examples: ['Lead roofing', 'Lead gutters', 'Architectural lead', 'Mixed lead materials'],
      price: 'Variable Rate'
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
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Competitive Lead Prices',
      description: 'Fair market pricing for all types of lead scrap based on current commodity rates and material quality. Updated daily to reflect global market values.'
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: 'Safe Collection Service',
      description: 'Professional pickup service with proper equipment and safety procedures for handling lead materials. We come to you across Melbourne.'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Same-Day Payment',
      description: 'Instant cash or immediate bank transfer when we collect. No waiting periods or delayed payments - get paid on the spot.'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: '15+ Years Experience',
      description: 'Trusted lead buyers since 2009. Serving thousands of satisfied customers including automotive shops, plumbers, and industrial clients.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Licensed & Insured',
      description: 'Fully certified scrap metal dealers with EPA compliance. All necessary permits, insurance, and proper documentation for safe lead handling.'
    },
    {
      icon: <FiCheck className="w-8 h-8" />,
      title: 'Certified Scales',
      description: 'Transparent weighing with government-certified scales. You watch the weighing process and see the exact weight of your lead scrap.'
    },
  ];

  const whoWeServe = [
    {
      title: 'Automotive Workshops & Mechanics',
      description: 'We buy lead batteries, wheel weights, and automotive lead scrap. Regular pickup schedules available for busy workshops.'
    },
    {
      title: 'Plumbers & HVAC Contractors',
      description: 'We buy lead pipes, lead sheeting, and plumbing lead materials. We understand tradespeople need quick, reliable service.'
    },
    {
      title: 'Demolition & Construction Sites',
      description: 'Large-scale lead removal from demolition projects. We handle bulk lead from piping, roofing, and building materials safely.'
    },
    {
      title: 'Industrial Facilities & Manufacturers',
      description: 'Industrial lead scrap from production processes, counterweights, and machinery. Scheduled pickups for ongoing operations.'
    },
    {
      title: 'Electricians & Cable Companies',
      description: 'Lead cable sheathing and telecommunications lead materials. We process cable lead with competitive pricing based on content.'
    },
    {
      title: 'Scrap Dealers & Battery Recyclers',
      description: 'Wholesale lead buyers for other recyclers and dealers. Competitive bulk pricing available for battery recycling operations.'
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Lead Scrap Metal</h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90">
              Top Dollar for All Types of Lead Scrap | Safe Pickup | Instant Payment
            </p>
            <p className="text-lg opacity-80">
              Melbourne's Most Trusted Lead Buyers Since 2009 - Serving Automotive, Plumbers, Contractors & Industrial Clients
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
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Leading Lead Scrap Buyers</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Opera Copper Recycling has been Melbourne's trusted lead scrap buyer for years. We offer competitive prices for all types of lead scrap, from lead batteries to lead pipes, sheeting, weights, and cable sheathing.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We understand that lead recycling requires special handling and compliance. Our licensed facility and trained staff ensure safe processing while providing fair market prices based on current LME rates. Certified scales, transparent weighing, and immediate payment have made us the preferred choice for thousands of customers.
                </p>
              </div>
              <div className="flex items-start">
                <img src={copperMaterials} alt="Lead Scrap Metal" className="rounded-2xl shadow-xl w-full aspect-square max-h-[400px] object-cover" />
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

      {/* Lead Types Detail */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Types of Lead Scrap We Buy</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We accept all forms of lead scrap with competitive pricing based on material type, cleanliness, and quantity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {leadTypes.map((type, index) => (
                <Card key={index} className="p-6 sm:p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 break-words">{type.name}</h3>
                    <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {type.price}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-secondary mb-3">{type.grade}</p>
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

      {/* Safety & Compliance */}
      <section className="py-12 md:py-20 bg-background">
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
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Opera Copper Recycling</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Melbourne's most trusted lead scrap buyers with unmatched service and pricing
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
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about selling lead scrap in Melbourne
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
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">Simple, Fast, Professional</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our lead recycling process is straightforward and transparent. We assess your lead materials, grade them fairly, weigh them on certified scales, and provide instant payment.
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
              <img src={copperMaterials} alt="Lead Recycling Process" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LeadScrapPrice;
