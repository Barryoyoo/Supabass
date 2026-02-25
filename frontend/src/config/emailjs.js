import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
export const initEmailJS = () => {
  emailjs.init('YOUR_PUBLIC_KEY_HERE');
};

// EmailJS configuration
export const EMAIL_CONFIG = {
  serviceId: 'service_supabass',
  templateId: 'template_contact',
  publicKey: 'YOUR_PUBLIC_KEY_HERE',
};
