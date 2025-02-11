import sendgrid from '@sendgrid/mail';

// Set SendGrid API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST() {
  try {
    // Prepare the email message with static content
    const msg = {
      to: 'ravi.chauhan@webmaffia.com',  // Replace with the recipient's email address
      from: 'ravi.chauhan@webmaffia.com',   // Replace with your verified SendGrid sender email address
      subject: 'Static Email from Next.js',
      text: `This is a static email sent from the Next.js app.`,
      html: `<p><strong>This is a static email sent from the Next.js app.</strong></p>`,
    };

    // Send the email using SendGrid
    await sendgrid.send(msg);

    // Return a success response
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'There was an error sending the email. Please try again later.' }),
      { status: 500 }
    );
  }
}
