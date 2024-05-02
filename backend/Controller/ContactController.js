const ContactModel = require("../Models/ContactSchema");
const sendReceivedMail = require("../mail/mail");

async function ContactController(req, res) {
  try {
    const { firstName, email } = req.body;
    const contactData = new ContactModel(req.body);

    const savedContact = await contactData.save();

    await sendReceivedMail(firstName, email, savedContact._id);

    res.status(201).json({
      success: true,
      message: "Successfully added contact and sent verification email",
      data: savedContact,
    });
  } catch (error) {
    console.error("Error adding contact and sending email:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
}

module.exports = ContactController;
