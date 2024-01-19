const emailTemplate = require("./emailTemplate.handlebars")
import nodemailer from "nodemailer"
import "dotenv/config"

const transporter = nodemailer.createTransport({
  service: process.env.CONTACT_EMAIL_SERVICE,
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_EMAIL_PASSWORD,
  },
})

interface ContactForm {
  emailBody: string
  firstName: string
  lastName: string
  emailAddress: string
}

const validateEmail = (email: string) =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)

function validateContactBody(obj: any): obj is ContactForm {
  const requiredFields = ["emailBody", "firstName", "lastName", "emailAddress"]

  for (const field of requiredFields)
    if (typeof obj[field] != "string") return false

  return validateEmail(obj.emailAddress)
}

export async function POST(request: Request) {
  const requestBody = await request.json()
  if (!validateContactBody(requestBody))
    return new Response(null, { status: 400 })

  await transporter.sendMail({
    from: process.env.CONTACT_EMAIL,
    to: process.env.CONTACT_EMAIL,
    subject: `[Medito Fundraiser] Contact Email`,
    text: emailTemplate(requestBody),
  })

  return new Response("Email sent", { status: 200 })
}
