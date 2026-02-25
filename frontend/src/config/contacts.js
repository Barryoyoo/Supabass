// Supabass Contact Information
// Update these with your actual contact details

export const CONTACT_INFO = {
  company: 'Supabass',
  email: 'bodoro2017@gmail.com',
  phone: '+1 (555) 123-4567',
  location: {
    city: 'San Francisco',
    state: 'CA',
    country: 'United States',
  },
  
  // Social Media Links - UPDATE THESE
  social: {
    whatsapp: {
      number: '+1234567890',
      display: '+1 (234) 567-890',
    },
    github: {
      username: 'supabass',
      url: 'https://github.com/supabass',
    },
    linkedin: {
      handle: 'supabass',
      url: 'https://linkedin.com/company/supabass',
    },
    twitter: {
      handle: '@supabass',
      url: 'https://twitter.com/supabass',
    },
  },
};

// Helper to format WhatsApp link
export const getWhatsAppLink = (message = '') => {
  const number = CONTACT_INFO.social.whatsapp.number.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message || 'Hi! I found you on your website.');
  return `https://wa.me/${number}?text=${encodedMessage}`;
};