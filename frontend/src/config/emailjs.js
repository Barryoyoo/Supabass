import emailjs from '@emailjs/browser';

// EmailJS Configuration
// TODO: Update these with your actual EmailJS credentials from https://dashboard.emailjs.com
// After connecting bodoro2017@gmail.com to EmailJS, you'll get these values

export const initEmailJS = () => {
  // Your Public Key from EmailJS Dashboard → Account → General
  const publicKey = 'YOUR_PUBLIC_KEY_HERE';
  
  if (publicKey === 'YOUR_PUBLIC_KEY_HERE') {
    console.warn('⚠️ EmailJS Setup Required!');
    console.warn('1. Go to https://dashboard.emailjs.com');
    console.warn('2. Add Gmail service using bodoro2017@gmail.com');
    console.warn('3. Create a template with variables: user_name, user_email, subject, message');
    console.warn('4. Update this file with your Service ID, Template ID, and Public Key');
  } else {
    emailjs.init(publicKey);
    console.log('✅ EmailJS initialized for Supabass');
  }
};

// EmailJS Configuration
export const EMAIL_CONFIG = {
  serviceId: 'service_w8q4q5i',      // From EmailJS → Email Services
  templateId: 'YOUR_TEMPLATE_ID',    // From EmailJS → Email Templates
  publicKey: 'Frv9LZJvCisTlLBzF', // From EmailJS → Account
};

// Check if EmailJS is configured
export const isEmailJSConfigured = () => {
  return EMAIL_CONFIG.publicKey !== 'YFrv9LZJvCisTlLBzF' &&
         EMAIL_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
         EMAIL_CONFIG.templateId !== 'YOUR_TEMPLATE_ID';
};