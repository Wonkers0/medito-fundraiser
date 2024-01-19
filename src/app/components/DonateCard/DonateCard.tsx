import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DonorCard from "./DonorCard"
import DonateForm from "./DonateForm"

export interface DonorData {
  name: string
  timestamp: number
  donationAmount: number
}

const sampleDonorData: DonorData[] = [
  {
    name: "Anonymous",
    timestamp: Date.now() - 68400000,
    donationAmount: 50,
  },
  {
    name: "Anonymous",
    timestamp: Date.now() - 86400000,
    donationAmount: 5,
  },
  {
    name: "John Doe",
    timestamp: Date.now() - 86400000 * 3,
    donationAmount: 45,
  },
  {
    name: "Smith Chau",
    timestamp: Date.now() - 86400000 * 5,
    donationAmount: 20,
  },
]

export default function DonateCard() {
  return (
    <div className="bg-white lg:min-w-[375px] flex flex-col gap-4 rounded-b-lg h-fit px-2.5 py-6 border border-gray-300 border-t-0 lg:border-t lg:rounded-lg">
      <div className="w-full flex justify-center items-center gap-2.5">
        <FontAwesomeIcon icon={faHeart} className="text-indigo-200 text-xl" />
        <h3 className="uppercase text-indigo-400 text-lg font-bold">
          Recent Donors
        </h3>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 h-36">
        {sampleDonorData.map((data, i) => (
          <DonorCard key={i} {...data} />
        ))}
      </div>

      <DonateForm />
    </div>
  )
}
