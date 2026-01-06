import { NextRequest, NextResponse } from 'next/server';

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

    // TODO: In production, implement one of the following:
    // 1. Send email using a service like SendGrid, Mailgun, or Resend
    // 2. Save to a database (MongoDB, PostgreSQL, etc.)
    // 3. Send a Slack notification to your team
    // 4. Integrate with a CRM system

    // For now, log to console (visible in Vercel logs)
    console.log('New contact form submission:', {
      timestamp: new Date().toISOString(),
      ...body,
    });

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

// Optional: GET endpoint to retrieve submissions (for demo only)
export async function GET() {
  return NextResponse.json({
    submissions,
    count: submissions.length,
  });
}
