# Contact Form Backend Setup Guide

## Current Status
✅ API route created at `/api/contact`
✅ Form validation implemented
✅ Contact form connected to backend
✅ Error handling in place
✅ Ice Melt background and Ultra Violet theme applied

## How It Works
1. User fills out the contact form and clicks "Register Interest"
2. Form data is sent to `POST /api/contact` API route
3. Data is validated (required fields, email format)
4. Success/error message is shown to user
5. Form data is currently logged to Vercel console (visible in Vercel dashboard)

## Next Steps: Email Notifications

Choose ONE of these options to send email notifications:

### Option 1: Resend (Recommended - Free tier available)
1. Sign up at https://resend.com
2. Get your API key
3. Install: `npm install resend`
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   ```
5. Update `src/app/api/contact/route.ts` with:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your POST handler, add:
await resend.emails.send({
  from: 'contact@adaptiveoptix.com',
  to: body.email,
  replyTo: 'your-email@company.com',
  subject: 'We received your inquiry - Adaptive Optix',
  html: `<h2>Thank you, ${body.name}!</h2><p>We'll be in touch soon.</p>`,
});

await resend.emails.send({
  from: 'contact@adaptiveoptix.com',
  to: 'your-email@company.com',
  subject: `New Contact Form Submission: ${body.name}`,
  html: `<pre>${JSON.stringify(body, null, 2)}</pre>`,
});
```

### Option 2: SendGrid (Free tier available)
1. Sign up at https://sendgrid.com
2. Get your API key
3. Install: `npm install @sendgrid/mail`
4. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=your_api_key_here
   SENDGRID_FROM_EMAIL=contact@adaptiveoptix.com
   ```
5. Use in API route to send emails

### Option 3: Mailgun (Pay-as-you-go)
1. Sign up at https://mailgun.com
2. Get API key and domain
3. Install: `npm install mailgun.js`
4. Add to `.env.local`
5. Use in API route

### Option 4: Database Storage (PostgreSQL/MongoDB)
Store submissions in a database instead of memory:
1. Set up a database (Supabase, MongoDB Atlas, etc.)
2. Add connection string to `.env.local`
3. Update API route to save to database
4. Query from a dashboard later

### Option 5: CRM Integration (Salesforce, HubSpot, Pipedrive)
Directly sync submissions to your CRM:
1. Get API credentials from your CRM
2. Add to `.env.local`
3. Call CRM API from the contact route

## Testing Locally
```bash
npm run dev
# Navigate to http://localhost:3000
# Scroll to "Get in Touch" section
# Fill out form and submit
# Check terminal for success/error messages
# Check Vercel dashboard for logged submissions
```

## Deploy Changes
```bash
git add .
git commit -m "Add contact form backend API"
git push origin master
# Vercel automatically deploys
```

## Monitor Submissions
### Option A: View in Vercel Logs
- Go to https://vercel.com
- Select your project
- Click "Logs" tab
- See real-time form submissions

### Option B: Create Admin Dashboard
You can create a simple admin page to view all submissions:
```bash
# Create src/app/admin/submissions/page.tsx
# Fetch from /api/contact GET endpoint
# Display in a table
```

## Security Notes
- Email validation is implemented
- In production, add CSRF protection
- Consider rate limiting to prevent spam
- Add honeypot field for bot detection
- Use environment variables for sensitive data
- Enable CORS if needed for external forms

## Current File Locations
- Frontend: `src/components/ContactForm.tsx`
- API: `src/app/api/contact/route.ts`
- Config: `.env.local` (create this file for secrets)

Need help implementing email notifications? Let me know which service you prefer!
