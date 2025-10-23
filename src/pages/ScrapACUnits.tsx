import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw } from 'react-icons/fi';

const ScrapACUnits = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Scrap AC Units Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Professional scrap air conditioning recycling in Melbourne. We buy old AC units, split systems, and HVAC equipment. Environmentally responsible recycling and competitive prices.
          </p>
        </div>
      </section>

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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Air Conditioning Unit Recycling</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Opera Copper Recycling purchases scrap air conditioning units across Melbourne. AC units contain valuable copper, aluminum, and other recyclable materials. We offer competitive prices and safe, environmentally responsible recycling.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <FiDollarSign className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Fair Prices</h3>
                <p className="text-sm text-muted-foreground">Competitive rates for AC units</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTruck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Free Removal</h3>
                <p className="text-sm text-muted-foreground">For bulk quantities</p>
              </Card>
              <Card className="p-6 text-center">
                <FiRefreshCw className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">Responsible recycling</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">AC Units We Buy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Split System Air Conditioners',
                  'Ducted AC Systems',
                  'Window AC Units',
                  'Commercial HVAC Equipment',
                  'Industrial Cooling Systems',
                  'Portable Air Conditioners',
                  'Central AC Units',
                  'Old & Broken AC Systems'
                ].map((type, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-4">What Makes AC Units Valuable?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Air conditioning units contain copper tubing, aluminum fins, copper wiring, and compressor motors - all valuable recyclable materials. The copper components alone make AC units worthwhile to recycle, especially commercial and industrial units which contain larger quantities of metal.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-4">Environmentally Responsible</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Proper AC recycling prevents refrigerants from being released into the atmosphere and ensures metals are recovered for reuse. We handle refrigerant removal and disposal in compliance with environmental regulations, making AC recycling safe and legal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Recycle Your AC Units</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling to sell your scrap air conditioning units in Melbourne. Competitive prices and environmentally responsible recycling.
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

export default ScrapACUnits;
