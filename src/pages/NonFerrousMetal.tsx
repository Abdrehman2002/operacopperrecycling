import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiX } from 'react-icons/fi';
import copperMaterials from '@/assets/copper-materials.jpg';
import copperCables from '@/assets/copper-cables.jpg';
import brassScrap from '@/assets/brass-scrap.jpg';
import aluminumScrap from '@/assets/aluminum-scrap.jpg';
import stainlessSteel from '@/assets/stainless-steel.jpg';

const NonFerrousMetal = () => {
  const metals = [
    {
      name: 'Cash For Copper Scrap Metal',
      shortName: 'Copper',
      description: 'Get instant cash for all types of copper scrap. We buy bare bright copper, #1 and #2 copper, copper pipes, cables, and wiring at the best market rates in Melbourne. Free pickup available for qualifying quantities.',
      image: copperCables,
      types: [
        'Bare Bright Copper Wire (highest grade)',
        '#1 Copper Pipe & Tubing',
        '#2 Copper (oxidized, painted)',
        'Insulated Copper Cable & Wiring',
        'Copper Electrical Components',
        'Copper Fittings & Fixtures',
        'Copper Bus Bars',
        'Copper Communication Cables',
      ],
      priceNote: 'Premium prices for clean, uncontaminated copper',
    },
    {
      name: 'Aluminium Scrap Price',
      shortName: 'Aluminum',
      description: 'Competitive aluminum scrap prices for all grades. We purchase aluminum extrusions, cans, wheels, construction materials, and industrial aluminum. Fast assessment and instant payment.',
      image: aluminumScrap,
      types: [
        'Aluminum Extrusions & Profiles',
        'Aluminum Cans & Packaging',
        'Cast Aluminum',
        'Aluminum Wheels & Rims',
        'Aluminum Siding & Gutters',
        'Construction Aluminum',
        'Aluminum Wire & Cable',
        'Industrial Aluminum Scrap',
      ],
      priceNote: 'Best prices for clean, sorted aluminum',
    },
    {
      name: 'Brass Scrap Price',
      shortName: 'Brass',
      description: 'Excellent brass scrap prices for fixtures, fittings, and valves. We buy yellow brass, red brass, brass taps, and decorative brass items with immediate payment and professional service.',
      image: brassScrap,
      types: [
        'Yellow Brass (high zinc content)',
        'Red Brass (high copper content)',
        'Brass Plumbing Fixtures',
        'Brass Taps & Valves',
        'Brass Fittings & Connectors',
        'Brass Decorative Items',
        'Brass Turnings & Shavings',
        'Naval Brass',
      ],
      priceNote: 'Top dollar for clean brass materials',
    },
    {
      name: 'Lead Scrap Price',
      shortName: 'Lead',
      description: 'We buy lead batteries, lead pipes, lead sheeting, and other lead scrap. Safe handling and environmentally responsible recycling with competitive market rates.',
      image: copperMaterials,
      types: [
        'Lead Acid Batteries',
        'Lead Piping & Sheeting',
        'Lead Wheel Weights',
        'Lead Cable Sheathing',
        'Lead Roofing Materials',
        'Lead Counterweights',
      ],
      priceNote: 'Proper documentation required for lead scrap',
    },
    {
      name: 'Stainless Steel Scrap Price',
      shortName: 'Stainless Steel',
      description: 'Premium stainless steel scrap prices for all grades including 304 and 316. We purchase kitchen equipment, industrial components, piping, and manufacturing scrap.',
      image: stainlessSteel,
      types: [
        '304 Stainless Steel',
        '316 Stainless Steel',
        'Commercial Kitchen Equipment',
        'Stainless Steel Piping',
        'Industrial Stainless Components',
        'Stainless Steel Sinks',
        'Manufacturing Offcuts',
        'Stainless Steel Structural',
      ],
      priceNote: 'Grade identification for accurate pricing',
    },
  ];

  const benefits = [
    {
      title: 'Environmental Impact',
      description: 'Non-ferrous metal recycling saves up to 95% of the energy required to produce new metal from raw materials.',
    },
    {
      title: 'Resource Conservation',
      description: 'Recycling non-ferrous metals helps preserve natural resources and reduces mining environmental impact.',
    },
    {
      title: 'Economic Value',
      description: 'Non-ferrous metals retain high market value, making recycling financially rewarding for our customers.',
    },
    {
      title: 'Infinite Recyclability',
      description: 'Most non-ferrous metals can be recycled repeatedly without losing their physical properties.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Non-Ferrous Metal</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Best prices for copper, brass, aluminum, lead, and stainless steel scrap in Melbourne. Instant payment and free pickup available.
          </p>
        </div>
      </section>

      {/* What Are Non-Ferrous Metals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">What Are Non-Ferrous Metals?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Non-ferrous metals are metals that don't contain significant amounts of iron. They include copper, brass, aluminum, lead, zinc, stainless steel, and other valuable metals that are highly sought after for recycling.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These metals are more resistant to corrosion and rust, making them ideal for plumbing, electrical, construction, and industrial applications. Due to their value and recyclability, non-ferrous metals command premium prices. Opera Copper Recycling offers competitive market rates for all non-ferrous metal types.
            </p>
          </div>
        </div>
      </section>

      {/* Metal Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Non-Ferrous Metals We Buy</h2>
            <p className="text-xl text-muted-foreground">Competitive pricing and instant payment for quality materials</p>
          </div>
          <div className="space-y-12">
            {metals.map((metal, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={metal.image}
                      alt={metal.name}
                      className="w-full h-full object-cover min-h-[450px]"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">{metal.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{metal.description}</p>
                    <h4 className="font-semibold text-lg mb-3 text-secondary">What We Buy:</h4>
                    <ul className="space-y-2 mb-4">
                      {metal.types.map((type, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-accent/10 border-l-4 border-secondary p-4 rounded mb-6">
                      <p className="text-sm font-semibold text-foreground">{metal.priceNote}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild className="bg-secondary hover:bg-secondary/90 font-semibold">
                        <a href="tel:+61452367372">Call For Price</a>
                      </Button>
                      <Button asChild variant="outline" className="font-semibold">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Recycle Non-Ferrous Metals?</h2>
            <p className="text-xl text-muted-foreground">
              Environmental and economic benefits of non-ferrous metal recycling
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">Additional Information</h2>
            <Card className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4 text-secondary">Other Metals We Buy:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Zinc (Die-Cast, Galvanized)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Nickel and Nickel Alloys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Tin and Tin Alloys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Mixed Non-Ferrous Loads</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4 text-destructive">What We Don't Accept:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <FiX className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Whitegoods (Fridges, Washers, Microwaves)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiX className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Electronic Waste (E-waste)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiX className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Contaminated or Hazardous Materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiX className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Radioactive Materials</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Note:</strong> For the best prices, ensure your materials are sorted, clean, and free from contamination. Mixed loads are accepted but may be priced differently. Contact us for specific pricing on your materials.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get Top Dollar for Your Non-Ferrous Metals</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling today for competitive pricing and free pickup service across Melbourne. We offer instant payment and professional service.
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

export default NonFerrousMetal;
