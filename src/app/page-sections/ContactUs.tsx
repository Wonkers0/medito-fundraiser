import ContactForm from "../components/ContactForm"
import Divider from "../components/Divider"

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center gap-7 w-full">
      <Divider text="Contact Us" />

      <h2 className="text-center text-neutral-500 font-extralight text-sm px-7 max-w-96">
        Is your question not in the FAQ? Fill out this form and we'll email you
        back as soon as possible.
      </h2>

      <ContactForm />
    </div>
  )
}
