# Resend Email Setup Guide

## Quick Setup (5 minutes)

### Step 1: Sign Up for Resend
1. Go to https://resend.com
2. Sign up with your email address
3. Verify your email

### Step 2: Get Your API Key
1. After verification, go to the Dashboard
2. Click "API Keys" in the left sidebar
3. Copy your API Key (starts with `re_`)

### Step 3: Install Resend Package
In your project terminal:
```bash
npm install resend
```

### Step 4: Create `.env.local` File
1. In the root of your project, create a new file called `.env.local`
2. Copy the contents from `.env.local.example`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=your-email@company.com
```
3. Replace the values:
   - Paste your API key from Step 2
   - Replace `your-email@company.com` with your actual email address

### Step 5: Restart Dev Server
```bash
npm run dev
```

### Step 6: Test the Form
1. Go to http://localhost:3000
2. Scroll to "Get in Touch" section
3. Fill out the contact form
4. Click "Register Interest"

You should receive:
- ✅ **Confirmation email** to the user's email address
- ✅ **Notification email** to your email (ADMIN_EMAIL)

## Email Templates

The system sends two professional emails with your Ultra Violet brand colors:

### 1. User Confirmation Email
- Shows purple/Ultra Violet header
- Confirms their submission
- Displays what they submitted
- Professional Ice Melt background color

### 2. Admin Notification Email
- Shows all form details
- Timestamp of submission
- Ready for you to follow up

## Resend Free Tier Benefits
- ✅ 100 emails per day
- ✅ No credit card required
- ✅ Test domain included: `onboarding@resend.dev`
- ✅ Easy to upgrade when you scale

## Production Domain (Optional)
To use your own domain instead of `onboarding@resend.dev`:
1. In Resend Dashboard, add your domain
2. Follow DNS verification steps
3. Update the `from` field in `src/app/api/contact/route.ts`

Example:
```typescript
from: 'Adaptive Optix <contact@adaptiveoptix.com>',
```

## Troubleshooting

**Emails not sending?**
- Check `.env.local` file exists in project root
- Verify API key is correct (no extra spaces)
- Check Vercel dashboard logs for errors
- Ensure ADMIN_EMAIL is a valid email address

**Getting "missing API key" error?**
- Did you run `npm install resend`?
- Did you create `.env.local` file?
- Did you restart the dev server after creating `.env.local`?

**Testing on Vercel (Production)?**
- Add environment variables to Vercel:
  1. Go to https://vercel.com
  2. Select your project
  3. Go to Settings → Environment Variables
  4. Add `RESEND_API_KEY` and `ADMIN_EMAIL`
  5. Deploy again

## Monitor Submissions
You can view all submissions in:
- Your email inbox (both confirmation and admin notification)
- Vercel logs: https://vercel.com → Select project → Logs tab
- Optional: Create an admin dashboard to view in `/api/contact` GET endpoint

## File Locations
- API Route: `src/app/api/contact/route.ts`
- Contact Form: `src/components/ContactForm.tsx`
- Config: `.env.local` (create from `.env.local.example`)

## Next Steps
- Test the form locally
- Deploy to Vercel
- Monitor submissions via email and Vercel logs
- Optional: Add custom domain to Resend for professional emails

Need help? Check the Resend docs: https://resend.com/docs
