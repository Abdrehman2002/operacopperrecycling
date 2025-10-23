import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiDollarSign, FiTruck, FiCheck, FiPhone, FiMapPin, FiClock, FiTrendingUp } from 'react-icons/fi';

const ScrapMetalPricesMelbourne = () => {
  const metalPrices = [
    { metal: 'Copper (Millberry)', price: '$11.00 – $12.50', description: 'Bare bright uncoated copper wire' },
    { metal: 'Copper Scrap', price: '$7.00 – $12.50', description: 'Clean copper pipe, sheet, bus bar' },
    { metal: 'Copper (Domestic)', price: '$6.00 – $9.00', description: 'Mixed household copper' },
    { metal: 'Copper (Burnt/Tinned)', price: '$2.50 – $7.00', description: 'Burnt or tinned copper wire' },
    { metal: 'Brass (Clean)', price: '$6.50', description: 'Clean brass fittings, fixtures' },
    { metal: 'Brass (Contaminated)', price: '$4.00 – $5.00', description: 'Mixed or contaminated brass' },
    { metal: 'Brass Scrap', price: '$4.50 – $6.50', description: 'General brass materials' },
    { metal: 'Aluminium Extruded', price: '$1.60 – $2.10', description: 'Clean aluminum profiles' },
    { metal: 'Aluminium Wheels', price: '$1.60 – $2.10', description: 'Aluminum alloy wheels' },
    { metal: 'Aluminium Cuttings', price: '$1.30 – $1.90', description: 'Aluminum machining scrap' },
    { metal: 'Aluminium Cast', price: '$1.10 – $1.20', description: 'Cast aluminum parts' },
    { metal: 'Aluminium Domestic', price: '$0.80 – $1.10', description: 'Household aluminum items' },
    { metal: 'Aluminium Scrap', price: '$0.90 – $2.00', description: 'Mixed aluminum materials' },
    { metal: 'Stainless Steel', price: '$0.80 – $2.00', description: 'All grades of stainless steel' },
    { metal: 'Insulated Wire (Medium)', price: '$4.00 – $5.00', description: 'Medium grade insulated wire' },
    { metal: 'Insulated Wire (Low)', price: '$2.50 – $4.50', description: 'Low grade insulated wire' },
    { metal: 'Lead (Clean)', price: '$1.50', description: 'Clean lead sheet, pipe' },
    { metal: 'Lead Scrap', price: '$1.20 – $1.50', description: 'Lead batteries, mixed lead' },
    { metal: 'Steel (Heavy)', price: '$0.25 – $0.34', description: 'Heavy structural steel' },
    { metal: 'Steel (Normal)', price: '$0.15', description: 'Standard mild steel' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Scrap Metal Prices Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Current scrap metal prices in Melbourne. We offer competitive rates for copper, brass, aluminum, stainless steel, lead, and all non-ferrous metals. Updated daily based on market conditions.
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
              <span>Mon-Sat: 7AM - 5PM</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Current Scrap Metal Prices</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center">
                <FiDollarSign className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Best Prices</h3>
                <p className="text-sm text-muted-foreground">Competitive market-based rates</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTruck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Free Pickup</h3>
                <p className="text-sm text-muted-foreground">For qualifying quantities</p>
              </Card>
              <Card className="p-6 text-center">
                <FiCheck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Instant Payment</h3>
                <p className="text-sm text-muted-foreground">Cash or bank transfer</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTrendingUp className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Daily Updates</h3>
                <p className="text-sm text-muted-foreground">Market-based pricing</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Current Scrap Metal Prices (Per Kg)</h3>
              <p className="text-muted-foreground mb-6">
                Below are current scrap metal prices in Melbourne. All prices are in AUD per kilogram and updated based on market conditions. Actual prices may vary based on material quality, quantity, cleanliness, and contamination level. Contact us for precise quotes on your specific materials.
              </p>
              <div className="space-y-3">
                {metalPrices.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.metal}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full font-semibold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Prices shown are current market rates in AUD per kilogram. Actual rates depend on material grade, cleanliness, quantity, and current London Metal Exchange (LME) prices. Prices updated regularly based on global commodity markets. All quotes are provided free and without obligation.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-heading font-bold mb-4">What Affects Scrap Metal Prices?</h3>
                <ul className="space-y-3">
                  {[
                    'Material Type & Grade',
                    'Cleanliness & Contamination',
                    'Quantity & Volume',
                    'Global Commodity Markets',
                    'Preparation & Sorting',
                    'Current Market Demand'
                  ].map((factor, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                      <span className="text-muted-foreground">{factor}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-heading font-bold mb-4">Metals We Buy</h3>
                <ul className="space-y-3">
                  {[
                    'Copper (All Grades)',
                    'Brass (Yellow & Red)',
                    'Aluminum (All Types)',
                    'Stainless Steel (304, 316, 430)',
                    'Lead (Batteries, Sheet, Pipe)',
                    'Insulated Wire & Cable'
                  ].map((metal, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                      <span className="text-muted-foreground">{metal}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/price-calculator">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 font-semibold text-lg px-10 h-14">
                  Use Price Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get Today's Scrap Metal Prices</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling for current scrap metal prices in Melbourne. Free pickup, instant payment, and competitive rates for all non-ferrous metals.
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

export default ScrapMetalPricesMelbourne;
