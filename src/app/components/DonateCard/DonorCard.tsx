import { DonorData } from "./DonateCard"

export default function DonorCard({
  name,
  timestamp,
  donationAmount,
}: DonorData) {
  return (
    <div className="flex flex-col p-2.5 h-fit">
      <div className="flex items-center gap-2">
        <span className="max-w-24 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </span>
        <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
        <span className="text-neutral-500 text-sm font-light">
          {getDonationTimeElapsedText(timestamp)}
        </span>
      </div>

      <span className="text-neutral-700 text-xl font-bold">
        ${donationAmount}
      </span>
    </div>
  )
}

const getDonationTimeElapsedText = (donationTimestamp: number) => {
  const msElapsed = Date.now() - donationTimestamp
  const unitThresholds: Record<string, number> = {
    s: 0,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 60 * 60 * 24 * 1000,
    mo: 60 * 60 * 24 * 30 * 1000,
    y: 60 * 60 * 24 * 30 * 12 * 1000,
  }

  let result = ""
  for (const [unit, threshold] of Object.entries(unitThresholds)) {
    if (msElapsed > threshold) result = Math.floor(msElapsed / threshold) + unit
  }

  return result
}
