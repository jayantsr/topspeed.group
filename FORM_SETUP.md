# Contact Form Setup Guide

## How to Enable Email Functionality on GitHub Pages

Since GitHub Pages only serves static HTML files (no server-side processing), you need to use a third-party service to handle form submissions. This website uses **Formspree** for reliable, free form handling.

---

## Option 1: Formspree (Recommended) ✅

**Formspree** is the easiest and most reliable solution for static sites.

### Setup Steps:

1. **Create a Formspree Account**
   - Go to [https://formspree.io](https://formspree.io)
   - Sign up for a free account (no credit card required)

2. **Create a New Form**
   - Click "New Form" in your dashboard
   - Give it a name: "TopSpeed Contact Form"
   - You'll receive a unique form ID (e.g., `xrgqwkzn`)

3. **Update the Contact Form**
   - Open `contact.html`
   - Find this line (around line 54):
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```html
   action="https://formspree.io/f/xrgqwkzn"
   ```

4. **Configure Email Settings**
   - In Formspree dashboard, go to Settings
   - Set "Send Emails To" to: `hello@topspeed.group`
   - Add a reply-to field if desired

5. **Test the Form**
   - Deploy to GitHub Pages
   - Submit a test message
   - Check your email inbox

### Formspree Free Plan Includes:
- ✅ 50 submissions/month
- ✅ Email notifications
- ✅ Spam protection
- ✅ Customizable email templates
- ✅ Works with GitHub Pages

---

## Option 2: EmailJS (Alternative)

If you prefer not to use Formspree, EmailJS is another good option.

### Setup Steps:

1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Follow their integration guide
3. Update the form with EmailJS JavaScript

**Note:** EmailJS requires more setup but offers more customization options.

---

## Option 3: Simple Mailto Links (Temporary)

If you want something quick and simple:

Replace the form with a simple mailto link:

```html
<a href="mailto:hello@topspeed.group?subject=Contact%20from%20TopSpeed%20Website&body=Hello," class="btn btn-primary">
  Send Email
</a>
```

**Downside:** Opens the user's email client (not as user-friendly)

---

## Current Implementation

Your contact form is already configured with Formspree. You just need to:
1. Sign up for Formspree
2. Replace `YOUR_FORM_ID` in `contact.html` with your actual form ID

---

## After Setup

Once configured, the form will:
- ✅ Send emails to `hello@topspeed.group`
- ✅ Show a success message after submission
- ✅ Include spam protection
- ✅ Work seamlessly on GitHub Pages

---

## Troubleshooting

**Form not sending emails?**
- Check that you've replaced `YOUR_FORM_ID` with your actual Formspree ID
- Verify your email in Formspree settings
- Check spam folder
- Test from different browsers

**Need more submissions?**
- Formspree offers paid plans with more submissions
- Or switch to EmailJS or another service

---

## Additional Resources

- Formspree Documentation: https://help.formspree.io/hc/en-us
- Formspree GitHub Pages Guide: https://help.formspree.io/hc/en-us/articles/360059633713-GitHub-Pages
- Alternative Form Services: https://formsubmit.co, https://getform.io

