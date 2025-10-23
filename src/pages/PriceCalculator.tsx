import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

const PriceCalculator = () => {
  const [metalType, setMetalType] = useState('');
  const [weight, setWeight] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  // Price per kg (these are example rates)
  const priceRates: Record<string, number> = {
    'bare-copper': 9.50,
    'insulated-copper': 4.20,
    'copper-pipe': 8.80,
    'yellow-brass': 6.50,
    'red-brass': 7.20,
    'aluminum-cans': 1.80,
    'aluminum-extrusion': 2.50,
    'cast-aluminum': 1.90,
    'stainless-steel-304': 2.80,
    'stainless-steel-316': 3.50,
    'lead': 2.10,
  };

  const metalOptions = [
    { value: 'bare-copper', label: 'Bare Bright Copper' },
    { value: 'insulated-copper', label: 'Insulated Copper Wire' },
    { value: 'copper-pipe', label: 'Copper Pipe & Tubing' },
    { value: 'yellow-brass', label: 'Yellow Brass' },
    { value: 'red-brass', label: 'Red Brass' },
    { value: 'aluminum-cans', label: 'Aluminum Cans' },
    { value: 'aluminum-extrusion', label: 'Aluminum Extrusion' },
    { value: 'cast-aluminum', label: 'Cast Aluminum' },
    { value: 'stainless-steel-304', label: 'Stainless Steel 304' },
    { value: 'stainless-steel-316', label: 'Stainless Steel 316' },
    { value: 'lead', label: 'Lead' },
  ];

  const calculatePrice = () => {
    if (metalType && weight) {
      const pricePerKg = priceRates[metalType];
      const totalPrice = pricePerKg * parseFloat(weight);
      setEstimatedPrice(totalPrice);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Scrap Price Calculator</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Get an instant estimate for your scrap metal value. Actual prices may vary based on current market conditions and material quality.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl font-heading font-bold mb-6">Calculate Your Scrap Value</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Metal Type *</label>
                  <Select value={metalType} onValueChange={setMetalType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Choose metal type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {metalOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="weight" className="block text-sm font-semibold mb-2">
                    Weight (kg) *
                  </label>
                  <Input
                    id="weight"
                    type="number"
                    min="0"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight in kilograms"
                    className="h-12"
                  />
                </div>

                <Button
                  onClick={calculatePrice}
                  disabled={!metalType || !weight}
                  className="w-full bg-secondary hover:bg-secondary/90 h-12 font-semibold"
                  size="lg"
                >
                  Calculate Estimate
                </Button>

                {estimatedPrice !== null && (
                  <Card className="p-8 bg-accent text-accent-foreground shadow-md">
                    <div className="text-center">
                      <p className="text-sm font-semibold mb-2 uppercase tracking-wide">Estimated Value</p>
                      <p className="text-5xl font-heading font-bold mb-2">${estimatedPrice.toFixed(2)}</p>
                      <p className="text-sm opacity-90">
                        Based on current market rates
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            </Card>

            {/* Price Table */}
            <Card className="p-8 md:p-10 mt-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Current Scrap Metal Prices</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Prices per kilogram (AUD). Rates updated regularly based on market conditions and material quality.
              </p>
              <div className="space-y-2">
                {metalOptions.map((option) => (
                  <div key={option.value} className="flex justify-between py-3 border-b border-border last:border-b-0">
                    <span className="font-medium">{option.label}</span>
                    <span className="text-secondary font-bold">
                      ${priceRates[option.value].toFixed(2)}/kg
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Disclaimer */}
            <Card className="p-8 mt-8 bg-muted/50 border-l-4 border-secondary">
              <h4 className="font-heading font-semibold text-lg mb-4">Important Notes:</h4>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span>
                  <span>Prices are estimates and subject to change based on current market conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span>
                  <span>Final prices depend on material quality, quantity, and contamination levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span>
                  <span>Minimum quantities may apply for free pickup service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span>
                  <span>Contact us for accurate quotes on large or mixed loads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span>
                  <span>All prices are in AUD per kilogram</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Get Paid?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling for an accurate quote and schedule your free pickup today. We serve all Melbourne suburbs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-10 h-14 font-semibold">
              <a href="tel:+61452367372">Call +61 452 367 372</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 h-14 font-semibold">
              <Link to="/contact">Get Exact Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceCalculator;
