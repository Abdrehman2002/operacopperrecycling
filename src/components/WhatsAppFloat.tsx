import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/61452367372?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20scrap%20metal%20recycling."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Get Quote Now via WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
      <span className="font-bold whitespace-nowrap">Get Quote Now</span>
    </a>
  );
};

export default WhatsAppFloat;
