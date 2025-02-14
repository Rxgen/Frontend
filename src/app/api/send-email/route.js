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
      'Other Enquiry': 'info@lupin.com',
    };

   
    const recipientEmail = subjectToEmail[subject] || 'info@lupin.com'; 

    const msg = {
      to: recipientEmail, 
      from: 'info@lupin.in',
      subject: `${subject}`,
      text: `
        Name: ${name}
        Organization: ${organization}
        Email: ${email}
        Contact Number: ${number}
        Subject: ${subject}
        Query: ${query}
      `,
      html: `

      <table style="width: 650px; margin: 0 auto; font-size: 16px; background: #f6fcf8; color: #000; font-family: Arial, Helvetica, sans-serif;">
    <tr>
        <td>
            <table style="margin: 15px;">
                <tr>
                    <td><a href="" target="blank"><img src="assets/images/contact/icons/pharma.webp" alt="" width="95" height="35" style="margin-bottom: 30px;"></a></td>
                </tr>
                <tr>
                    <td>
                        <table style="border-collapse: collapse;">
                            <tr>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Name :</div></td>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Ravi Chauhan</div></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Organization :</div></td>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Webmaffia</div></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Email :</div></td>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;"><a href="mailto:ravi.chauhan@webmaffia.com" style="color: #000;">ravi.chauhan@webmaffia.com</a></div></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Tel No :</div></td>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;"><a href="tel:+9629021021" style="color: #000">9629021021</a></div></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Select Subject Lines :</div></td>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Other Enquiry</div></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Post your query :</div></td>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Test</div></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">I agree and accept the <a href="https://www.lupin.com/privacy-policy/" target="_blank" style="color: #000;">Privacy Policy</a> and the <a href="" target="_blank" style="color: #000;">Terms of use</a> of this website :</div></td>
                                <td style="border: 1px solid #d2d2d2;"><div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Checked</div></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
        
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
