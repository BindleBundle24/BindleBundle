import { EmailFormTemplate } from "@/components/EmailTemplate/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.FORM_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const {
            fullName,
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
            otherSpeciality,
        } = req.body;

        try {
            const emailData = {
                from: "Bindle Bundle Movers <info@bindlebundlemovers.com>",
                to: ["henryugo@outlook.com"],
                subject: "New Moving Details Submission",
                react: EmailFormTemplate({
                    fullName,
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
                    otherSpeciality,
                }),
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
