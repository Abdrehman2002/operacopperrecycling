import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiZap } from 'react-icons/fi';

const CopperCableHighVoltage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Copper Cable High Voltage Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Premium prices for high voltage copper cables in Melbourne. We buy industrial power cables, utility cables, and heavy-duty electrical cables. Excellent copper recovery rates.
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
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">High Voltage Cable Recycling</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Opera Copper Recycling specializes in purchasing high voltage copper cables from utility companies, industrial facilities, and electrical contractors. High voltage cables contain significant copper content and command premium prices.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <FiDollarSign className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Premium Rates</h3>
                <p className="text-sm text-muted-foreground">High copper content cables</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTruck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Free Collection</h3>
                <p className="text-sm text-muted-foreground">For large quantities</p>
              </Card>
              <Card className="p-6 text-center">
                <FiZap className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Expert Handling</h3>
                <p className="text-sm text-muted-foreground">Industrial cable specialists</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">High Voltage Cables We Buy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Utility Power Cables',
                  'Substation Cables',
                  'Industrial Power Feeds',
                  'Transmission Cables',
                  'Distribution Cables',
                  'Underground HV Cables',
                  'XLPE Insulated Cables',
                  'Service Entrance Cables'
                ].map((type, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Why High Voltage Cables Are Valuable</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                High voltage cables typically contain 70-85% copper by weight, making them some of the most valuable cable scrap. The large gauge conductors used in power transmission and distribution contain substantial amounts of copper.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with utility companies, electrical contractors, and industrial facilities to provide competitive pricing and professional collection services for high voltage cable scrap across Melbourne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Sell Your High Voltage Cables</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary leading-relaxed">
            Contact Opera Copper Recycling for premium prices on high voltage copper cables. Professional service for utilities and industrial customers.
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

export default CopperCableHighVoltage;
