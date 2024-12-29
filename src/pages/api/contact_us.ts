import { EmailContactUsTemplate } from "@/components/EmailTemplate/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.CONTACT_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { fullName,
            email,
            phoneNumber,
            message } = req.body;

        try {
            const emailData = {
                from: "Bindle Bundle Movers <info@bindlebundlemovers.com>",
                to: "henryugo@outlook.com",
                subject: "A new message from Bindle Bundle Movers",
                react: EmailContactUsTemplate(
                    { fullName, email, phoneNumber, message }),

            };

            const { data, error } = await resend.emails.send(emailData);

            if (error) {
                console.error("Error from Resend:", error);
                return res.status(400).json({ success: false, error });
            }

            return res.status(200).json({ success: true, data });
        } catch (error: unknown) {
            console.error("Unexpected server error:", error);
            return res.status(500).json({
                success: false,
                error: (error as Error).message || "Unknown error occurred",
            });
        }
    } else {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }
}

