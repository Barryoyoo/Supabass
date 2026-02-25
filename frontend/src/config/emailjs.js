import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
export const initEmailJS = () => {
  // Note: Replace 'YOUR_PUBLIC_KEY_HERE' with your actual EmailJS public key
  // Get it from: https://dashboard.emailjs.com/admin/account
  const publicKey = 'YOUR_PUBLIC_KEY_HERE';
  
  if (publicKey === 'YOUR_PUBLIC_KEY_HERE') {
    console.warn('⚠️ EmailJS not configured! Please update /app/frontend/src/config/emailjs.js with your credentials.');
    console.warn('Get your credentials from: https://www.emailjs.com/');
  } else {
    emailjs.init(publicKey);
    console.log('✅ EmailJS initialized');
  }
};

// EmailJS configuration
// TODO: Update these values with your EmailJS credentials
export const EMAIL_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',      // Get from: https://dashboard.emailjs.com/admin
  templateId: 'YOUR_TEMPLATE_ID',    // Get from: https://dashboard.emailjs.com/admin/templates
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // Get from: https://dashboard.emailjs.com/admin/account
};

// Check if EmailJS is configured
export const isEmailJSConfigured = () => {
  return EMAIL_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY_HERE' &&
         EMAIL_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
         EMAIL_CONFIG.templateId !== 'YOUR_TEMPLATE_ID';
};
