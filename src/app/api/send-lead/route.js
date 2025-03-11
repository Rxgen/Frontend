import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { formData } = await request.json();
    const { first_name, last_name, email, confirm_email, agent_name, agent_email, state, right, query, relationship } = formData;
    const recipientEmail = 'complianceandethicsoffice@lupin.com';

    const msg = {
      to: recipientEmail, 
      from: 'info@lupin.in', 
      subject: 'Enquiry from Website', 
      text: `
        First Name: ${first_name}
        Last Name: ${last_name}
        Email: ${email}
        Confirm Email: ${confirm_email}
        Agent Name: ${agent_name}
        Agent Email: ${agent_email}
        State: ${state}
        Right: ${right}
        Query: ${query}
        Relationship: ${relationship}
      `,
      html: `
        <table style="width: 650px; margin: 0 auto; font-size: 16px; background: #f6fcf8; color: #000; font-family: Arial, Helvetica, sans-serif;">
          <tr>
            <td>
              <table style="margin: 15px;">
                <tr>
                  <td><a href="" target="blank"><img src="https://lupinus-c2cwazd8b2hggzh9.southindia-01.azurewebsites.net/images/contact/icons/pharma.webp" alt="" width="95" height="35" style="margin-bottom: 30px;"></a></td>
                </tr>
                <tr>
                  <td>
                    <table style="border-collapse: collapse;">
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">First Name :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">${first_name}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Last Name :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">${last_name}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Email :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">
                            <a href="mailto:${email}" style="color: #000;">${email}</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Confirm Email :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">
                            <a href="mailto:${confirm_email}" style="color: #000;">${confirm_email}</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Agent Name :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">${agent_name}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Agent Email :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">
                            <a href="mailto:${agent_email}" style="color: #000;">${agent_email}</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">State :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">${state}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Right :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">${right}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Request :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">${query}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">Relationship :</div>
                        </td>
                        <td style="border: 1px solid #d2d2d2;">
                          <div style="margin: 10px 15px; line-height: 1.5; letter-spacing: .5px;">${relationship}</div>
                        </td>
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

    
    await sendgrid.send(msg);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);

    // Log detailed error info
    if (error.response) {
      console.error('Response Body:', error.response.body); // Log the full error response from SendGrid
      console.error('Response Headers:', error.response.headers); // Log the headers
    }
    if (error.message) {
      console.error('Error Message:', error.message); // Log the general error message
    }
    if (error.code) {
      console.error('Error Code:', error.code); // Log the error code
    }

    return new Response(
      JSON.stringify({ message: 'There was an error sending the email. Please try again later.' }),
      { status: 500 }
    );
}
}
