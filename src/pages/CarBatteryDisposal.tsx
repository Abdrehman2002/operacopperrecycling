import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiRefreshCw } from 'react-icons/fi';

const CarBatteryDisposal = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Car Battery Disposal Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Safe and responsible car battery disposal in Melbourne. We pay cash for old car batteries and recycle them in an environmentally friendly manner.
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
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Responsible Battery Recycling</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Opera Copper Recycling provides safe car battery disposal services across Melbourne. We pay competitive prices for old car batteries and ensure they are recycled in compliance with environmental regulations.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <FiDollarSign className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Cash Payment</h3>
                <p className="text-sm text-muted-foreground">Get paid for old batteries</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTruck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Free Pickup</h3>
                <p className="text-sm text-muted-foreground">For bulk quantities</p>
              </Card>
              <Card className="p-6 text-center">
                <FiRefreshCw className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">Safe recycling process</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Batteries We Accept</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Car & Truck Batteries',
                  '4WD Batteries',
                  'Motorcycle Batteries',
                  'Marine Batteries',
                  'Forklift Batteries',
                  'UPS Batteries',
                  'Industrial Batteries',
                  'Lead Acid Batteries'
                ].map((type, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Why Recycle Car Batteries?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Car batteries contain lead and sulfuric acid, which are hazardous to the environment if not disposed of properly. Recycling car batteries prevents toxic materials from contaminating soil and water while recovering valuable lead for reuse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over 95% of a car battery can be recycled. The lead is melted down and reused in new batteries, while the plastic case is also recycled. Responsible battery disposal protects the environment and conserves resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Dispose of Your Car Battery Safely</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary leading-relaxed">
            Contact Opera Copper Recycling for safe car battery disposal in Melbourne. We pay cash and recycle responsibly.
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

export default CarBatteryDisposal;
