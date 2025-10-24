import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiAward } from 'react-icons/fi';

const ShinyCopper = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Shiny Copper Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Premium prices for shiny copper (bare bright copper) in Melbourne. We buy clean, uncoated copper wire and cable at the highest market rates. The most valuable grade of copper scrap.
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
              <span>Monday to Friday: 7 AM – 5 PM | Saturday: 10 AM – 4 PM</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Bare Bright Copper Buyers</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Opera Copper Recycling pays premium rates for shiny copper (also known as bare bright copper or #1 copper wire). This is the highest grade and most valuable type of copper scrap, commanding top market prices.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <FiDollarSign className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Highest Prices</h3>
                <p className="text-sm text-muted-foreground">Premium market rates</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTruck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Free Pickup</h3>
                <p className="text-sm text-muted-foreground">For qualifying quantities</p>
              </Card>
              <Card className="p-6 text-center">
                <FiAward className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Expert Grading</h3>
                <p className="text-sm text-muted-foreground">Accurate assessment</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">What is Shiny Copper?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Shiny copper, also called bare bright copper or #1 copper wire, is clean, uncoated, unalloyed copper wire or cable with minimum 99% purity. It must be free of solder, paint, coating, insulation, and oxidation. The copper should have a bright, shiny appearance.
              </p>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Requirements for Shiny Copper:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'No insulation or coating',
                    'No solder or attachments',
                    'No paint or oxidation',
                    'Minimum 99% copper purity',
                    'Bright, clean appearance',
                    'No alloys or other metals',
                    'Wire gauge #16 or thicker',
                    'Free of dirt or contamination'
                  ].map((req, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Common Sources of Shiny Copper</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Uncoated copper wire and cable</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Clean copper electrical wire (stripped)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Bare copper bus bar</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Clean copper manufacturing offcuts</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Bright copper commutator wire</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Sell Your Shiny Copper</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary leading-relaxed">
            Contact Opera Copper Recycling for the best prices on bare bright copper in Melbourne. Premium rates for the highest grade copper scrap.
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

export default ShinyCopper;
