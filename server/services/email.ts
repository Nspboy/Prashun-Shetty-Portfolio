import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  service: process.env.SMTP_HOST || "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const emailService = {
  /**
   * Send email notification for new lead
   */
  async sendLeadNotification(
    leadData: {
      name: string;
      email: string;
      company?: string;
      message: string;
      source: string;
    },
    adminEmail: string,
  ): Promise<void> {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: adminEmail,
      subject: `New Lead: ${leadData.name}`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${leadData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></p>
        ${leadData.company ? `<p><strong>Company:</strong> ${leadData.company}</p>` : ""}
        <p><strong>Source:</strong> ${leadData.source}</p>
        <h3>Message:</h3>
        <p>${leadData.message}</p>
        <hr />
        <p><em>This is an automated notification from your portfolio website.</em></p>
      `,
      plainText: `
Name: ${leadData.name}
Email: ${leadData.email}
${leadData.company ? `Company: ${leadData.company}` : ""}
Source: ${leadData.source}

Message:
${leadData.message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Lead notification sent to ${adminEmail}`);
    } catch (error) {
      console.error("Error sending lead notification:", error);
      throw new Error("Failed to send email notification");
    }
  },

  /**
   * Send welcome email to newsletter subscribers
   */
  async sendNewsletterWelcome(email: string): Promise<void> {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Welcome to Our Newsletter!",
      html: `
        <h2>Welcome to Prashun Shetty's Newsletter</h2>
        <p>Thank you for subscribing to our newsletter!</p>
        <p>You'll now receive updates about:</p>
        <ul>
          <li>New blog posts and articles</li>
          <li>Company announcements</li>
          <li>Exclusive educational content</li>
          <li>Special offers and events</li>
        </ul>
        <p>Best regards,<br />Prashun Shetty</p>
        <hr />
        <p><small><a href="[UNSUBSCRIBE_LINK]">Unsubscribe from this newsletter</a></small></p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Welcome email sent to ${email}`);
    } catch (error) {
      console.error("Error sending welcome email:", error);
      throw new Error("Failed to send email");
    }
  },

  /**
   * Send email to admin for new newsletter subscription
   */
  async sendAdminNotification(
    email: string,
    adminEmail: string,
  ): Promise<void> {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: adminEmail,
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <p>A new user has subscribed to your newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending admin notification:", error);
    }
  },

  /**
   * Verify email service connectivity
   */
  async verifyConnection(): Promise<boolean> {
    try {
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn("Email service not configured. Skipping verification.");
        return false;
      }
      await transporter.verify();
      console.log("Email service connected successfully");
      return true;
    } catch (error) {
      console.warn("Email service not available:", error);
      return false;
    }
  },
};
