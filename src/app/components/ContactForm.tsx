"use client"
import { Form, Formik } from "formik"
import FormField from "./FormField"

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        emailAddress: "",
        emailBody: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await fetch("./api/contact", {
          body: JSON.stringify(values),
          method: "POST",
        })

        setSubmitting(false)
        resetForm()
      }}
    >
      {({ isSubmitting }) => (
        <Form className="px-4 max-w-[500px] w-full flex flex-col gap-2.5">
          <div className="flex gap-4">
            <FormField label="First Name" id="firstName" required />
            <FormField label="Last Name" id="lastName" required />
          </div>

          <FormField
            label="Email address"
            id="emailAddress"
            required
            type="email"
          />

          <FormField
            className="max-h-64 min-h-12 h-24"
            label="Email body"
            as="textarea"
            id="emailBody"
            required
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-indigo-500 disabled:opacity-25 h-9 mt-2.5 flex justify-center items-center rounded-md text-white text-sm font-semibold"
          >
            Send message
          </button>
        </Form>
      )}
    </Formik>
  )
}
