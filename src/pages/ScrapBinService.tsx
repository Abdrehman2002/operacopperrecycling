import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiTruck, FiRefreshCw, FiPackage } from 'react-icons/fi';

const ScrapBinService = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Scrap Bin Service Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Convenient scrap metal bin service for businesses and construction sites across Melbourne. We provide bins, regular collection, and competitive pricing for your scrap metal.
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
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Professional Scrap Bin Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Opera Copper Recycling provides scrap metal bin services for businesses, construction sites, and industrial facilities across Melbourne. We supply bins, provide regular collection, and pay competitive prices for your scrap metal.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <FiPackage className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Bin Supply</h3>
                <p className="text-sm text-muted-foreground">Various sizes available</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTruck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Regular Collection</h3>
                <p className="text-sm text-muted-foreground">Scheduled or on-demand</p>
              </Card>
              <Card className="p-6 text-center">
                <FiRefreshCw className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Ongoing Service</h3>
                <p className="text-sm text-muted-foreground">Long-term partnerships</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Ideal For</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Construction Sites',
                  'Manufacturing Facilities',
                  'Machine Shops',
                  'Automotive Workshops',
                  'Demolition Projects',
                  'Industrial Plants',
                  'Electrical Contractors',
                  'Metal Fabricators'
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
                <h3 className="text-xl font-heading font-bold mb-4">Service Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>No upfront costs for bin supply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Flexible collection schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Competitive scrap metal prices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Professional and reliable service</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-4">How It Works</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-secondary">1.</span>
                    <span>Contact us to discuss your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-secondary">2.</span>
                    <span>We deliver appropriate sized bins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-secondary">3.</span>
                    <span>Fill bins with your scrap metal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-secondary">4.</span>
                    <span>We collect and pay competitive rates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Set Up Scrap Bin Service</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling to arrange scrap metal bin service for your business or project site in Melbourne.
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

export default ScrapBinService;
