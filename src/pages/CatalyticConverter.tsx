import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiAward } from 'react-icons/fi';

const CatalyticConverter = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Catalytic Converter Recycling Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Top prices for catalytic converters in Melbourne. We buy all types including OEM, aftermarket, and diesel converters. Instant payment based on precious metal content.
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
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Catalytic Converter Buyers Melbourne</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Opera Copper Recycling purchases catalytic converters at premium prices based on precious metal content. Catalytic converters contain platinum, palladium, and rhodium - valuable metals that make them highly recyclable.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <FiDollarSign className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Premium Prices</h3>
                <p className="text-sm text-muted-foreground">Based on precious metal content</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTruck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Free Collection</h3>
                <p className="text-sm text-muted-foreground">For bulk quantities</p>
              </Card>
              <Card className="p-6 text-center">
                <FiAward className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Instant Payment</h3>
                <p className="text-sm text-muted-foreground">Cash on the spot</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Catalytic Converters We Buy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'OEM Catalytic Converters',
                  'Aftermarket Converters',
                  'Diesel Catalytic Converters',
                  'Petrol Catalytic Converters',
                  'Foil Type Converters',
                  'Ceramic Converters',
                  'Foreign & Domestic',
                  'Scrap & Used Converters'
                ].map((type, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="bg-muted/50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-heading font-bold mb-4">Why Catalytic Converters Are Valuable</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Catalytic converters contain precious metals including platinum, palladium, and rhodium. These metals act as catalysts to reduce harmful emissions. Due to the high value of these precious metals, catalytic converters are among the most valuable automotive scrap items.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pricing depends on the converter type, vehicle make/model, and current precious metal market rates. OEM converters typically contain more precious metals than aftermarket converters and command higher prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Sell Your Catalytic Converters</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling for competitive catalytic converter prices in Melbourne. We pay top dollar based on precious metal content.
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

export default CatalyticConverter;
