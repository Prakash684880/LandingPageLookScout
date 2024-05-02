const nodemailer = require("nodemailer");
const util = require("util");
require("dotenv").config();

const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.USER, 
    pass: process.env.PASS, 
  },
});

const sendMailPromise = util.promisify(mailTransporter.sendMail);

const sendReceivedMail = async (firstName, email, _id) => {
  try {
    const details = {
      from: "exploremate310@gmail.com", 
      to: email, 
      subject: "Response Email", 
      html: generateEmailTemplate(firstName, _id), 
    };

    await sendMailPromise.call(mailTransporter, details);
    console.log("Response email has been sent.");
  } catch (error) {
    console.error("Error sending Response email:", error);
    throw error;
  }
};

const generateEmailTemplate = (firstName, _id) => {
  return `
    <body style="background-color: grey">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="550" bgcolor="white" style="border: 2px solid black">
        <tbody>
          <tr>
            <td align="center">
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="col-550" width="550">
                <tbody>
                  <tr>
                    <td align="center" style="background-color: #8acafb; height: 50px;">
                      <a href="#" style="text-decoration: none;">
                        <p style="color: white; font-weight: bold;">Lookscout</p>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr style="height: 300px;">
            <td align="center" style="border: none; border-bottom: 2px solid #8acafb; padding-right: 20px; padding-left: 20px;">
              <p style="font-weight: bolder; font-size: 42px; letter-spacing: 0.025em; color: black;">
                Hello ${firstName}<br/>
                Welcome to Lookscout
              </p>
            </td>
          </tr>
          <tr style="display: inline-block;">
            <td style="height: 150px; padding: 20px; border: none; border-bottom: 2px solid #361b0e; background-color: white;">
              <h2 style="margin-left: 100px; align-items: center;">
                <a href="http://localhost:5173/?id=${_id}">Click here</a> to Visit our Website
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  `;
};

module.exports = sendReceivedMail;
