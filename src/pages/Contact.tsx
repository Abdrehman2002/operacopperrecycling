import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      content: '+61 452 367 372',
      link: 'tel:+61452367372',
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      content: 'Operacr86@gmail.com',
      link: 'mailto:Operacr86@gmail.com',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Melbourne, VIC, Australia',
      link: null,
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Monday - Saturday: 8:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Get in touch with Opera Copper Recycling for quotes, pickups, or any questions about our scrap metal services
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Send Us a Message</h2>
              <Card className="p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+61 XXX XXX XXX"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your scrap metal type, quantity, and location..."
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 h-12 font-semibold" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-secondary">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-secondary transition-colors text-lg"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/61452367372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/oper.ocr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </Card>

              {/* Quick Info */}
              <Card className="p-6 mt-4 bg-muted">
                <h3 className="font-semibold text-lg mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Free pickup for qualifying loads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Instant payment options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Competitive market rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Licensed and insured</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3">Need Immediate Assistance?</h3>
          <p className="text-lg md:text-xl mb-6">Call us now for urgent scrap metal collection and instant quotes</p>
          <a
            href="tel:+61452367372"
            className="text-4xl md:text-5xl font-bold hover:opacity-80 transition-opacity inline-block"
          >
            +61 452 367 372
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
