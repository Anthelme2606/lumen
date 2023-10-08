const nodemailer = require("nodemailer");

async function main() {
  // Créez un transporteur SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Serveur SMTP
    port: 587, // Port SMTP
    secure: false, // false pour le port 587, true pour le port 465
    auth: {
      user: "tekoanthelmekpodar@gmail.com",
      pass: "Anth@2606",
    },
  });

  // Définissez les détails du message
  let info = await transporter.sendMail({
    from: "tekoanthelmekpodar@gmail.com",
    to: "tekoanthelmek@gmail.com",
    subject: "Sujet de votre e-mail",
    text: "Corps de votre message",
  });

  console.log("Message envoyé : %s", info.messageId);
}

main().catch(console.error);