import nodemailer from "nodemailer";

export const welcomeMessage = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Welcome to Road2Tech 👋" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🎉 Welcome to Road2Tech!",
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; background-color: #f9fbfc; padding: 30px; border-radius: 10px; color: #2d3748;">
        <div style="text-align: center;">
          <img src="https://i.ibb.co/MZt7xKm/road2tech-logo.png" alt="Road2Tech Logo" style="width: 120px; margin-bottom: 20px;" />
          <h1 style="color: #2b6cb0;">Welcome to <span style="color: #1a202c;">Road2Tech</span></h1>
          <p style="font-size: 16px; margin-top: 10px;">We're thrilled to have you on board! 🎉</p>
        </div>

        <div style="margin: 30px 0; padding: 20px; background: #edf2f7; border-left: 5px solid #2b6cb0; border-radius: 6px;">
          <p style="margin: 0;">You've successfully registered on <strong>Road2Tech</strong>, your platform to grow, learn, and connect with the tech community. Get ready to build something amazing with us.</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <a href="https://road2tech.in/" style="background-color: #2b6cb0; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; font-weight: 500;">
            🚀 Go to Dashboard
          </a>
        </div>

        <p style="margin-top: 40px; font-size: 14px; text-align: center; color: #718096;">
          If you have any questions, feel free to reach out to us anytime.
        </p>

        <p style="text-align: center; font-size: 14px; margin-top: 30px;">
          Cheers,<br />
          <strong>Team Road2Tech</strong>
        </p>

        <hr style="margin-top: 40px; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="font-size: 12px; text-align: center; color: #a0aec0;">You received this email because you signed up on Road2Tech.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
