"use client"
import { faCcStripe } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Field, Form, Formik, useFormikContext } from "formik"
import FormField from "../FormField"

export default function DonateForm() {
  return (
    <Formik
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await fetch("./api/donate", {
          body: JSON.stringify(values),
          method: "POST",
        })
        window.location.href = await res.json()

        resetForm()
        setSubmitting(false)
      }}
      initialValues={{
        firstName: "",
        lastName: "",
        anonymous: false,
        donationAmount: "",
        currency: "USD",
      }}
    >
      {({ isSubmitting, values }) => (
        <Form
          action="/donate"
          method="POST"
          className="flex flex-col gap-2.5 mt-8"
          id="donate-form"
        >
          <div className="flex flex-col gap-1">
            {!values.anonymous && (
              <div className="flex gap-4">
                <FormField label="First Name" id="firstName" required />
                <FormField label="Last Name" id="lastName" required />
              </div>
            )}

            <div className="flex gap-2 p-1 items-center">
              <Field type="checkbox" name="anonymous"></Field>
              <span className="text-neutral-600 text-xs font-normal">
                Keep my donation anonymous
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <DonationAmountInput />

            <div className="flex flex-col gap-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`disabled:opacity-25 h-10 rounded-md bg-indigo-600 flex justify-center items-center uppercase font-bold text-white`}
              >
                Donate
              </button>

              <p className="text-neutral-500 text-xs font-light flex items-center justify-center gap-1.5">
                Secure payments managed by{" "}
                <FontAwesomeIcon icon={faCcStripe} className="text-lg" />
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

function DonationAmountInput() {
  const { errors, touched } = useFormikContext()
  //@ts-ignore
  const hasValidationErrors = errors.donationAmount && touched.donationAmount

  return (
    <div
      className={`${
        hasValidationErrors ? "border-red-500" : "border-gray-300"
      } border rounded-sm h-11 flex overflow-hidden`}
    >
      <div className="flex flex-grow gap-2 p-1.5">
        <span
          className={`text-lg ${
            hasValidationErrors ? "text-red-400" : "text-gray-400"
          } font-light`}
        >
          $
        </span>
        <Field
          name="donationAmount"
          placeholder="20.00"
          className="font-light outline-none placeholder:text-neutral-300 text-lg h-full bg-transparent"
          validate={(value: number) =>
            value >= 0.5 ? null : "Amount must be greater than 0.5"
          }
        />
      </div>

      <Field
        as="select"
        className={`text-xs text-neutral-700 ${
          hasValidationErrors ? "border-red-500 bg-red-100" : "border-gray-300"
        } border-l flex gap-2 bg-neutral-100 w-16 rounded-none`}
        name="currency"
      >
        <option>USD</option>
        <option>CAD</option>
        <option>RON</option>
        <option>MXN</option>
      </Field>
    </div>
  )
}
