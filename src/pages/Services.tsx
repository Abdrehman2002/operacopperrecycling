import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiTruck, FiDollarSign, FiClock } from 'react-icons/fi';
import copperCables from '@/assets/copper-cables.jpg';
import brassScrap from '@/assets/brass-scrap.jpg';
import aluminumScrap from '@/assets/aluminum-scrap.jpg';
import stainlessSteel from '@/assets/stainless-steel.jpg';
import copperMaterials from '@/assets/copper-materials.jpg';
import acImage from '@/assets/ac 2.jpeg';
import batteriesImage from '@/assets/batteries.png';
import catalyticConverterImage from '@/assets/catalytic converter.jpeg';
import rimsImage from '@/assets/rims.png';

const Services = () => {
  const services = [
    {
      title: 'Copper Cable & Wire Recycling',
      description: 'We specialize in buying all types of copper cables and wiring. From residential electrical wire to high-voltage industrial cables, we offer competitive rates for bare bright copper, insulated copper cables, and copper wire scrap.',
      features: [
        'Bare bright copper wire',
        'Insulated copper cables',
        'Copper electrical wiring',
        'High-voltage power cables',
        'Copper communication cables',
        'Industrial copper wire scrap',
      ],
      image: copperCables,
      link: '/non-ferrous-metal',
    },
    {
      title: 'Brass Scrap Collection',
      description: 'Excellent prices for all brass materials. We purchase brass fittings, fixtures, valves, taps, and decorative items. Both yellow brass and red brass accepted with instant payment and free pickup available.',
      features: [
        'Brass plumbing fixtures',
        'Brass taps and valves',
        'Brass fittings and connectors',
        'Brass decorative items',
        'Yellow and red brass',
        'Brass turnings and shavings',
      ],
      image: brassScrap,
      link: '/non-ferrous-metal',
    },
    {
      title: 'Aluminum Scrap Recycling',
      description: 'Comprehensive aluminum recycling services for all grades. We buy aluminum extrusions, cans, construction materials, wheels, and industrial scrap. Free collection available for large quantities across Melbourne.',
      features: [
        'Aluminum extrusions',
        'Aluminum cans and packaging',
        'Construction aluminum',
        'Aluminum wheels and rims',
        'Cast aluminum',
        'Industrial aluminum scrap',
      ],
      image: aluminumScrap,
      link: '/non-ferrous-metal',
    },
    {
      title: 'Stainless Steel Collection',
      description: 'Professional stainless steel buying service with competitive market rates. We purchase all grades of stainless steel including kitchen equipment, industrial components, piping, and manufacturing scrap.',
      features: [
        'Commercial kitchen equipment',
        'Industrial stainless components',
        'Stainless steel piping',
        '304 & 316 stainless steel',
        'Manufacturing scrap',
        'Construction materials',
      ],
      image: stainlessSteel,
      link: '/services',
    },
    {
      title: 'Lead Scrap & Other Non-Ferrous Metals',
      description: 'We buy lead batteries, lead pipes, zinc, nickel alloys, and other non-ferrous metals. Mixed loads accepted. Convenient single-pickup solution for contractors with multiple metal types.',
      features: [
        'Lead acid batteries',
        'Lead piping and sheeting',
        'Zinc and zinc alloys',
        'Nickel alloys',
        'Mixed non-ferrous metals',
        'Other specialty metals',
      ],
      image: copperMaterials,
      link: '/non-ferrous-metal',
    },
    {
      title: 'Air Conditioner Recycling',
      description: 'We responsibly recycle air conditioning units, recovering valuable metals like copper and aluminum while ensuring environmentally safe disposal of refrigerants and other components.',
      features: [
        'Split system air conditioners',
        'Ducted AC systems',
        'Window AC units',
        'Commercial HVAC equipment',
        'Industrial cooling systems',
        'Portable air conditioners',
      ],
      image: acImage,
      link: '/scrap-ac-units',
    },
    {
      title: 'Battery Recycling',
      description: 'Our battery recycling service helps prevent hazardous waste and recovers reusable materials from used car and industrial batteries. Safe, eco-friendly processing of all battery types.',
      features: [
        'Car batteries',
        'Truck batteries',
        'Industrial batteries',
        'Lead acid batteries',
        'Heavy-duty batteries',
        'Commercial vehicle batteries',
      ],
      image: batteriesImage,
      link: '/car-battery-disposal',
    },
    {
      title: 'Catalytic Converter Recycling',
      description: 'We specialize in recycling catalytic converters, extracting precious metals including platinum, palladium, and rhodium through safe, eco-friendly methods with competitive pricing.',
      features: [
        'Car catalytic converters',
        'Truck catalytic converters',
        'Industrial catalytic converters',
        'Diesel catalytic converters',
        'Hybrid vehicle converters',
        'Heavy machinery converters',
      ],
      image: catalyticConverterImage,
      link: '/catalytic-converter',
    },
    {
      title: 'Rim Recycling',
      description: 'We collect and recycle alloy and steel rims from vehicles, helping reduce waste while reclaiming high-quality metal for reuse. Competitive rates for all rim types.',
      features: [
        'Alloy wheels',
        'Steel rims',
        'Chrome wheels',
        'Aluminum wheels',
        'Motorcycle wheels',
        'Truck and commercial rims',
      ],
      image: rimsImage,
      link: '/services',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Call or WhatsApp +61 452 367 372 or email us with details about your scrap metal. We provide free quotes over the phone.',
      icon: <FiClock className="w-8 h-8" />,
    },
    {
      number: '02',
      title: 'Free Pickup',
      description: 'We schedule a convenient pickup time. Our team arrives with proper equipment to safely collect your scrap metal.',
      icon: <FiTruck className="w-8 h-8" />,
    },
    {
      number: '03',
      title: 'Weigh & Assess',
      description: 'Materials are weighed on-site using certified scales. We assess quality, grade, and type for accurate pricing.',
      icon: <FiCheck className="w-8 h-8" />,
    },
    {
      number: '04',
      title: 'Instant Payment',
      description: 'Receive immediate payment via cash or instant bank transfer at competitive market rates. No waiting.',
      icon: <FiDollarSign className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Competitive market-based pricing',
    'Free pickup for qualifying quantities',
    'Same-day service available',
    'Instant payment options',
    'Licensed and insured',
    'Transparent weighing process',
    'Eco-friendly recycling',
    'Serving all Melbourne suburbs',
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Scrap Metal Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Professional scrap metal buying and recycling services across Melbourne. Competitive pricing, free pickup, and instant payment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{service.description}</p>
                    <h3 className="font-semibold text-lg mb-3 text-secondary">What We Buy:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild className="bg-secondary hover:bg-secondary/90 font-semibold">
                        <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get a Quote</a>
                      </Button>
                      <Button asChild variant="outline" className="font-semibold">
                        <Link to={service.link}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple, fast, and transparent process from contact to payment</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="text-secondary mb-3 flex justify-center">{step.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground">Professional service you can trust</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4 flex items-center gap-3">
                  <FiCheck className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Recycle Your Scrap Metal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling today for a free quote and convenient pickup scheduling. Serving all Melbourne suburbs with professional service.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-10 h-14 font-semibold">
              <a href="tel:+61452367372">Call +61 452 367 372</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 h-14 font-semibold">
              <a href="mailto:Operacr86@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
