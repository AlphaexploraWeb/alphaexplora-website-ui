import { Resend } from 'resend';

// Vercel Serverless Function
export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = req.body;

    const {
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      company,
      details,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate Reference Number: AE-YYMMDD-RANDOM4
    const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randomHex = Math.floor(Math.random() * 65535).toString(16).toUpperCase().padStart(4, '0');
    const referenceNumber = `AE-${dateStr}-${randomHex}`;

    // HTML Email to the Client
    const clientEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #010314; color: #fff; padding: 40px; border-radius: 8px; border: 1px solid #22d3ee33;">
        <h2 style="color: #22d3ee; margin-top: 0;">Inquiry Received: ${referenceNumber}</h2>
        <p style="color: #cbd5e1;">Hi ${firstName},</p>
        <p style="color: #cbd5e1;">Thank you for getting in touch with Alphaexplora. We have received your inquiry and our team is reviewing your requirements.</p>
        
        <div style="background: #ffffff05; padding: 20px; border-radius: 4px; margin: 20px 0; border: 1px solid #ffffff10;">
          <p style="margin: 5px 0; color: #94a3b8;"><strong style="color: #fff;">Reference Number:</strong> ${referenceNumber}</p>
          <p style="margin: 5px 0; color: #94a3b8;"><strong style="color: #fff;">Service Interested:</strong> ${serviceType || 'General Consultation'}</p>
          <p style="margin: 5px 0; color: #94a3b8;"><strong style="color: #fff;">Company:</strong> ${company || 'N/A'}</p>
        </div>

        <p style="color: #cbd5e1;">One of our consultants will reach out to you shortly at ${email} or ${phone || 'the provided contact number'}.</p>
        <p style="color: #cbd5e1;">Best regards,<br/><strong>The Alphaexplora Team</strong></p>
      </div>
    `;

    // HTML Email to Internal Alphaexplora Team
    const internalEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; color: #0f172a; padding: 40px; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #22d3ee; padding-bottom: 10px;">New Inquiry [${referenceNumber}]</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; width: 150px;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${email}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${phone || 'N/A'}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Company:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${company || 'N/A'}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Service:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${serviceType || 'Not specified'}</td></tr>
        </table>

        <h3 style="margin-top: 30px; color: #334155;">Inquiry Details:</h3>
        <div style="background: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 4px; white-space: pre-wrap;">${details || 'No details provided.'}</div>
      </div>
    `;

    // Send both emails using Resend Batch API or sequentially
    await resend.batch.send([
      {
        from: 'Alphaexplora <no-reply@alphaexplora.com>',
        to: [email],
        subject: `Your Inquiry is Received [${referenceNumber}]`,
        html: clientEmailHtml,
      },
      {
        from: 'Alphaexplora Website <no-reply@alphaexplora.com>',
        to: ['inquire@alphaexplora.com'], // The team's email
        subject: `New Lead: ${firstName} ${lastName} - ${serviceType || 'General'}`,
        html: internalEmailHtml,
        replyTo: email,
      }
    ]);

    // Return success with the reference number
    return res.status(200).json({ 
      success: true, 
      referenceNumber 
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
