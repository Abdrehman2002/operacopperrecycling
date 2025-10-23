import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMapPin, FiClock, FiDollarSign, FiTruck, FiClock as FiTime } from 'react-icons/fi';

const CashForScrapCarsMelbourne = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Cash For Scrap Cars Melbourne</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Get cash for your scrap car in Melbourne. We buy all makes and models - running or not. Free towing, instant payment, and environmentally responsible car recycling.
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
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Scrap Car Buyers Melbourne</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Opera Copper Recycling purchases scrap cars for cash across Melbourne. Whether your car is old, damaged, unregistered, or no longer running, we offer competitive prices and free towing services.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <FiDollarSign className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Cash Payment</h3>
                <p className="text-sm text-muted-foreground">Instant payment on collection</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTruck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Free Towing</h3>
                <p className="text-sm text-muted-foreground">We collect from anywhere</p>
              </Card>
              <Card className="p-6 text-center">
                <FiTime className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Same Day Service</h3>
                <p className="text-sm text-muted-foreground">Quick collection available</p>
              </Card>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">We Buy All Vehicles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Old & Damaged Cars',
                  'Non-Running Vehicles',
                  'Accident Damaged Cars',
                  'Unregistered Vehicles',
                  'End-of-Life Cars',
                  'Trucks & Vans',
                  '4WDs & SUVs',
                  'Commercial Vehicles'
                ].map((type, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h4 className="font-semibold mb-1">Contact Us</h4>
                    <p className="text-muted-foreground text-sm">Call or message us with your vehicle details</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h4 className="font-semibold mb-1">Get a Quote</h4>
                    <p className="text-muted-foreground text-sm">We provide an instant cash offer</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h4 className="font-semibold mb-1">Schedule Pickup</h4>
                    <p className="text-muted-foreground text-sm">We arrange free towing at your convenience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <h4 className="font-semibold mb-1">Get Paid</h4>
                    <p className="text-muted-foreground text-sm">Receive cash payment when we collect your vehicle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get Cash for Your Scrap Car Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling for a free quote on your scrap car. We offer competitive prices and free towing across Melbourne.
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

export default CashForScrapCarsMelbourne;
