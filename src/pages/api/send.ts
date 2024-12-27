import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { fullName, email, phoneNumber, pickUp, dropOff, date } = req.body;

        try {
            const emailData = {
                from: "henryugo@outlook.com",
                to: `${email}`,
                subject: "New Moving Details Submission",
                html: `
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Pick-Up Location:</strong> ${pickUp}</p>
          <p><strong>Drop-Off Location:</strong> ${dropOff}</p>
          <p><strong>Date:</strong> ${date}</p>
        `,
            };

            const response = await resend.emails.send(emailData);
            return res.status(200).json({ success: true, response });
        } catch (error: unknown) {
            console.error("Error sending email:", error);
            return res.status(500).json({ success: false, error: error.message });
        }

    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
