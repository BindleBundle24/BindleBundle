import { EmailFormTemplate } from "@/components/EmailTemplate/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.FORM_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { fullName,
            email,
            phoneNumber,
            pickUp,
            dropOff,
            date,
            moveCategory,
            commercialCategory,
            specialityMove,
            customInput,
            serviceType,
            propertySize,
            otherSpeciality, } = req.body;

        try {
            const emailData = {
                from: `info@bindlebundlemovers.com`,
                to: "henryugo@outlook.com",
                subject: "New Moving Details Submission",
                react: EmailFormTemplate(
                    { fullName, email, phoneNumber, pickUp, dropOff, date, moveCategory, commercialCategory, specialityMove, customInput, serviceType, propertySize, otherSpeciality }),

            };

            const response = await resend.emails.send(emailData);
            return res.status(200).json({ success: true, response });
        } catch (error: unknown) {
            console.error("Error sending email:", error);
            // @ts-ignore - error is unknown
            return res.status(500).json({ success: false, error: error.message });
        }

    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
