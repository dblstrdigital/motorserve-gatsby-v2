const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

function getEnquiryMessage(body) {
  const motorserveEmail = `${body.store}`;
  const testingEmail = 'dev@primemotive.com.au';
  const clientEmail = 'enquiries@motorserve.com.au';
  const customerEmail = `${body.email}`;
  return {
    // to: testingEmail,
    // for staging testing, change this to
    to: motorserveEmail,
    from: clientEmail,
    replyTo: customerEmail,
    subject: `Customer Enquiry: ${body.formSubmitId}`,
    text: `<strong>Enquiry reference:</strong><br/><p>${body.formSubmitId}</p><br/><strong>Name:</strong><br/> <p>${body.fullname}</p><br/> <strong>Email:</strong><br/> <p>${body.email}</p><br/> <strong>Contact Number:</strong><br/> <p>${body.phone}</p><br/> <strong>Registration number:</strong><br/> <p>${body.rego}</p><br/> <strong>State:</strong><br/> <p>${body.state}</p><br/> <strong>Store</strong><br/> <p>${body.store}</p><br/> <strong>Message:</strong><br/> <p>${body.message}</p>`,
    // TODO: Finalise formatting of email
    html: `
      <strong>Enquiry reference:</strong><br/>
      <p>${body.formSubmitId}</p>
      <br/>
      <strong>Name:</strong><br/>
      <p>${body.fullname}</p>
      <br/>
      <strong>Email:</strong><br/>
      <p>${body.email}</p>
      <br/>
      <strong>Contact Number:</strong><br/>
      <p>${body.phone}</p>
      <br/>
      <strong>Registration number:</strong><br/>
      <p>${body.rego}</p>
      <br/>
      <strong>State:</strong><br/>
      <p>${body.state}</p>
      <br/>
      <strong>Store</strong><br/>
      <p>${body.store}</p>
      <br/>
      <strong>Message:</strong><br/>
      <p>${body.message}</p>
    `,
  };
}

export default async function handler(req, res) {
  // TODO: Breaks in production? - CORS ISSUES
  // res.setHeader('Access-Control-Allow-Origin', '*');
  const body = await req.body;
  // https://flaviocopes.com/express-send-response/
  // Remember to add .end() after setting status
  try {
    await sendGridMail.send(getEnquiryMessage(body));
    res.status(200).end();
  } catch (error) {
    res.status(error.code).send({ error });
  }
}
