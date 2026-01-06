import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
}

// Store submissions in memory (for demo) - in production, use a database
const submissions: ContactFormData[] = [];

// Initialize Resend only if API key exists
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'noreply@resend.dev';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Store the submission
    submissions.push(body);

    // Send emails if Resend is configured
    if (resend) {
      try {
        // Send confirmation email to user
        await resend.emails.send({
          from: 'Adaptive Optix <onboarding@resend.dev>',
          to: body.email,
          subject: 'We Received Your Inquiry - Adaptive Optix',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(to bottom right, #6B5B95, #5a4a7e); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">Thank You, ${body.name}!</h1>
              </div>
              <div style="background-color: #F5E6D3; padding: 40px 20px;">
                <p style="color: #333; font-size: 16px; line-height: 1.6;">
                  We've received your inquiry about <strong>${getInterestLabel(body.interest)}</strong> and appreciate your interest in Adaptive Optix.
                </p>
                <p style="color: #333; font-size: 16px; line-height: 1.6;">
                  Our team will review your information and contact you shortly at <strong>${body.email}</strong>.
                </p>
                <div style="background-color: white; border-left: 4px solid #6B5B95; padding: 20px; margin: 20px 0; border-radius: 4px;">
                  <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;"><strong>Your Details:</strong></p>
                  <p style="margin: 5px 0; color: #333; font-size: 14px;">Name: ${body.name}</p>
                  ${body.company ? `<p style="margin: 5px 0; color: #333; font-size: 14px;">Company: ${body.company}</p>` : ''}
                  ${body.phone ? `<p style="margin: 5px 0; color: #333; font-size: 14px;">Phone: ${body.phone}</p>` : ''}
                </div>
                <p style="color: #666; font-size: 14px; line-height: 1.6;">
                  Thank you for your interest in Adaptive Optix. We look forward to speaking with you soon!
                </p>
              </div>
              <div style="background-color: #f0f0f0; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; color: #666;">
                <p style="margin: 0;">© 2026 Adaptive Optix. All rights reserved.</p>
              </div>
            </div>
          `,
        });

        // Send notification email to admin
        await resend.emails.send({
          from: 'Adaptive Optix <onboarding@resend.dev>',
          to: ADMIN_EMAIL,
          subject: `New Contact Form Submission: ${body.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6B5B95;">New Contact Form Submission</h2>
              <div style="background-color: #F5E6D3; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
                <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
                <p><strong>Interest:</strong> ${getInterestLabel(body.interest)}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 4px;">${body.message || 'No message provided'}</p>
                <p style="margin-top: 20px; color: #666; font-size: 12px;">
                  Submitted at: ${new Date().toISOString()}
                </p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
        // Don't fail the request if email fails, just log it
      }
    } else {
      // Log to console if Resend is not configured
      console.log('New contact form submission:', {
        timestamp: new Date().toISOString(),
        ...body,
      });
      console.log('⚠️ Resend not configured. To enable email notifications, add RESEND_API_KEY to .env.local');
    }

    return NextResponse.json(
      {
        message: 'Thank you for your inquiry. We will contact you soon.',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your inquiry. Please try again.' },
      { status: 500 }
    );
  }
}

// Helper function to get readable labels for interests
function getInterestLabel(interest: string): string {
  const labels: Record<string, string> = {
    'fx-pricing': 'FX Pricing',
    'loyalty': 'Loyalty & Rewards',
    'offers-campaigns': 'Offers & Campaigns',
    'baas': 'Banking as a Service (BaaS)',
    'saas': 'Software as a Service (SaaS)',
    'api': 'APIs & Integration',
    'general': 'General Inquiry',
  };
  return labels[interest] || interest;
}

// Optional: GET endpoint to retrieve submissions (for demo only)
export async function GET() {
  return NextResponse.json({
    submissions,
    count: submissions.length,
  });
}
