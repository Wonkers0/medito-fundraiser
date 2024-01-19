import Header from "./page-sections/Header"
import Hero from "./page-sections/Hero"
import DonorRewards from "./page-sections/DonorRewards"
import FAQ from "./page-sections/FAQ"
import ContactUs from "./page-sections/ContactUs"
import Footer from "./page-sections/Footer"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 lg:gap-16 items-center">
      <Header />
      <Hero />
      <DonorRewards />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  )
}
