import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { formData } = await request.json();
    const { name, organization, email, number, subject, query } = formData;

    const subjectToEmail = {
      'Product | Quality': 'drugsafety@lupin.com',
      'Product | Adverse events': 'drugsafety@lupin.com',
      'Product | Customer service': 'CustomerService-LPI@lupin.com',
      'Product | Patient assistance': 'drugsafety@lupin.com',
      'Product | Clinical trials': 'Being created', 
      'Partner with Lupin in the U.S. | Business development': 'businessdevelopment@lupin.com',
      'Media Contact': 'info@lupin.com',
    };

   
    const recipientEmail = subjectToEmail[subject] || 'info@lupin.com'; 

    const msg = {
      to: recipientEmail, 
      from: 'info@lupin.in',
      subject: `New Contact Form Submission - ${subject}`,
      text: `
        Name: ${name}
        Organization: ${organization}
        Email: ${email}
        Contact Number: ${number}
        Subject: ${subject}
        Query: ${query}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${number}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Query:</strong></p>
        <p>${query}</p>
      `,
    };

    // Send the email using SendGrid
    await sendgrid.send(msg);

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
