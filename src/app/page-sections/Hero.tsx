import CauseCard from "../components/CauseCard"
import DonateCard from "../components/DonateCard/DonateCard"

export default function Hero() {
  return (
    <section className="flex flex-col max-w-[500px] lg:max-w-none lg:flex-row px-5 lg:gap-6 lg:drop-shadow-sm">
      <CauseCard>
        <>
          <h2 className="description-heading">Introduction</h2>
          <p>
            Join our community-driven "Riding Together" fundraising initiative
            with a Tram Ad Campaign. Your support not only raises funds but also
            builds a sense of togetherness during the daily commute.
          </p>

          <h2 className="description-heading">Why we need your support</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint ut
            provident, perspiciatis incidunt reprehenderit fuga quae esse
            tenetur nobis ducimus quisquam vero praesentium! Odit sit iste
            assumenda facere dolorem?
          </p>
        </>
      </CauseCard>
      <DonateCard />
    </section>
  )
}
