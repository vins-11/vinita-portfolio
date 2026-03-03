# EmailJS Setup Instructions

Follow these steps to enable email functionality in your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Add Email Service

1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account: `vinitasuthar1199@gmail.com`
5. Click **Create Service**
6. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Contact Form

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Vinita,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Click **Save**
5. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key** section
3. **Copy your Public Key** (you'll need this)

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',        // From Step 2
  TEMPLATE_ID: 'your_template_id_here',      // From Step 3
  PUBLIC_KEY: 'your_public_key_here',        // From Step 4
}
```

## Step 6: Install Dependencies

Run this command in your terminal:

```bash
npm install
```

## Step 7: Test

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your Gmail inbox (`vinitasuthar1199@gmail.com`)

## Troubleshooting

- **Emails not sending?** Check that all IDs are correct in `emailjs.js`
- **Service ID not found?** Make sure you copied the correct Service ID from EmailJS dashboard
- **Template not found?** Verify the Template ID matches your template in EmailJS
- **Public Key error?** Ensure your Public Key is correct in the config file

## Security Note

The Public Key is safe to expose in frontend code. EmailJS handles security on their end. Never share your Private Key or API keys.

## Free Tier Limits

- 200 emails per month (free tier)
- Upgrade if you need more emails

---

That's it! Your contact form will now send emails directly to your Gmail inbox.

