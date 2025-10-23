import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FiCheck, FiPhone, FiMail, FiMapPin, FiClock, FiAward, FiShield, FiUsers, FiTruck } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About Opera Copper Recycling</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Melbourne's Trusted Scrap Metal Recycling Service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Opera Copper Recycling is Melbourne's premier scrap metal recycling service, specializing in copper, brass, aluminum, and various non-ferrous metals. We are committed to providing the best prices, exceptional customer service, and environmentally responsible recycling practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team of experienced professionals understands the value of scrap metal and ensures that you receive fair, competitive pricing based on current market rates. Whether you're a tradesperson, contractor, business owner, or homeowner, we make the recycling process simple, efficient, and rewarding.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-4xl font-heading font-bold mb-8 text-center">Why Choose Opera Copper Recycling?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <FiAward className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Competitive Prices</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We offer the best rates in Melbourne, based on current market prices. Our transparent pricing ensures you get maximum value for your scrap metal.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <FiTruck className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Free Pickup Service</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We provide complimentary collection for bulk quantities across Melbourne. No hidden fees - just professional, convenient service.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <FiShield className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Licensed & Insured</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Fully certified and compliant with all EPA regulations. Your peace of mind is guaranteed with our professional service.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <FiUsers className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Expert Team</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our experienced staff provides knowledgeable service, accurate grading, and professional handling of all scrap metal types.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Our Services */}
            <div className="mb-16">
              <h2 className="text-4xl font-heading font-bold mb-8 text-center">Our Services</h2>
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Copper Wire & Cable Recycling',
                    'Brass Scrap Collection',
                    'Aluminum Recycling',
                    'Stainless Steel Scrap',
                    'Lead Battery Disposal',
                    'Catalytic Converter Recycling',
                    'Cable Wire Collection',
                    'AC Unit Recycling',
                    'Scrap Car Recycling',
                    'Commercial Scrap Metal Services',
                    'Industrial Metal Recycling',
                    'Residential Pickup Service'
                  ].map((service, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Business Hours & Contact */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/30">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <FiClock className="w-7 h-7 text-secondary" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-lg">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-semibold">Monday - Friday</span>
                    <span className="text-secondary font-bold">7 AM - 5 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-secondary font-bold">10 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/30">
                <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FiPhone className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:+61452367372" className="text-secondary hover:underline text-lg">
                        +61 452 367 372
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMail className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:Operacr86@gmail.com" className="text-secondary hover:underline break-all">
                        Operacr86@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMapPin className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <span className="text-muted-foreground">Melbourne, VIC, Australia</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Recycle Your Scrap Metal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Opera Copper Recycling today for competitive prices, free pickup, and professional service.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-10 h-14 font-semibold">
              <a href="https://wa.me/61452367372" target="_blank" rel="noopener noreferrer">Get a Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary bg-primary-foreground hover:bg-secondary hover:text-primary text-lg px-10 h-14 font-semibold">
              <a href="tel:+61452367372">Call +61 452 367 372</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
