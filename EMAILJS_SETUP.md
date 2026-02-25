# EmailJS Setup Guide for Supabass Tech

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Click "Sign Up" (it's free!)
3. Verify your email address

### Step 2: Connect Your Email Service
1. In EmailJS Dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (most common)
   - Outlook
   - Yahoo
   - Or any SMTP service

#### For Gmail Users:
1. Select "Gmail" service
2. Click "Connect Account"
3. Sign in with your Gmail account
4. **Important:** You'll need to create an App Password:
   - Go to https://myaccount.google.com/security
   - Enable 2-Factor Authentication (if not already enabled)
   - Go to "App passwords"
   - Generate a new app password for "Mail"
   - Copy this password (you'll need it)

5. Your **Service ID** will be shown (e.g., `service_abc123`)
   - **SAVE THIS!** You'll need it for configuration

### Step 3: Create Email Template
1. In EmailJS Dashboard, go to **Email Templates**
2. Click **"Create New Template"**
3. Configure the template:

**Template Settings:**
- **Template Name:** Contact Form Submission
- **From Name:** `{{user_name}}`
- **From Email:** Leave as default
- **To Email:** Your email (where you want to receive messages)
- **Subject:** New Contact Form Message: `{{subject}}`

**Email Body:**
```
You received a new message from your website!

From: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Supabass Tech contact form.
```

4. Click **"Save"**
5. Your **Template ID** will be shown (e.g., `template_xyz789`)
   - **SAVE THIS!** You'll need it for configuration

### Step 4: Get Your Public Key
1. In EmailJS Dashboard, click on your profile (top right)
2. Go to **"Account"** → **"General"**
3. Copy your **Public Key** (e.g., `abcdefGHIJKL123456`)
   - **SAVE THIS!** You'll need it for configuration

### Step 5: Update the Configuration File

Open the file: `/app/frontend/src/config/emailjs.js`

Replace the placeholder values with your actual credentials:

```javascript
import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  const publicKey = 'YOUR_PUBLIC_KEY_HERE'; // ← Replace this
  
  if (publicKey === 'YOUR_PUBLIC_KEY_HERE') {
    console.warn('⚠️ EmailJS not configured!');
  } else {
    emailjs.init(publicKey);
    console.log('✅ EmailJS initialized');
  }
};

export const EMAIL_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',      // ← Replace with your service ID
  templateId: 'YOUR_TEMPLATE_ID',    // ← Replace with your template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // ← Replace with your public key
};
```

**Example (with fake credentials):**
```javascript
export const initEmailJS = () => {
  const publicKey = 'abcdefGHIJKL123456';
  
  if (publicKey === 'YOUR_PUBLIC_KEY_HERE') {
    console.warn('⚠️ EmailJS not configured!');
  } else {
    emailjs.init(publicKey);
    console.log('✅ EmailJS initialized');
  }
};

export const EMAIL_CONFIG = {
  serviceId: 'service_abc123',
  templateId: 'template_xyz789',
  publicKey: 'abcdefGHIJKL123456',
};
```

### Step 6: Restart the Frontend

Run this command:
```bash
sudo supervisorctl restart frontend
```

Wait 10 seconds, then refresh your browser.

### Step 7: Test the Contact Form

1. Go to: https://react-flux-1.preview.emergentagent.com/contact
2. The warning banner should be **gone** ✅
3. Fill out the form and click "Send Message"
4. Check your email inbox!

---

## Troubleshooting

### ❌ "Email service not configured" error
- Make sure you replaced ALL three values in the config file
- Check for typos in your credentials
- Restart the frontend after making changes

### ❌ Email not arriving
- Check your spam folder
- Verify your email address in the EmailJS template settings
- Test the template in EmailJS dashboard first

### ❌ "Failed to send message" error
- Open browser console (F12) to see detailed error
- Make sure your EmailJS service is active
- Check if you've exceeded the free tier limit (200 emails/month)

### ✅ Success indicators
- No warning banner on contact page
- Console shows: "✅ EmailJS initialized"
- Toast notification: "Message sent successfully!"
- Form clears after submission

---

## Free Tier Limits

EmailJS Free Plan includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Standard support

This is perfect for getting started! You can upgrade later if needed.

---

## Security Notes

✅ **Safe to commit:**
- Public Key (it's meant to be public)
- Service ID
- Template ID

❌ **DO NOT commit:**
- Your Gmail app password
- Any private API keys (EmailJS doesn't have any)

The EmailJS Public Key is designed to be used in client-side code and is safe to include in your repository.

---

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
- Project README: `/app/PROJECT_README.md`

---

**That's it! Your contact form will be live in 5 minutes.** 🚀
