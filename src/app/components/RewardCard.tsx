"use client"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface RewardCardProps {
  title: string
  description: string
  benefits: string[]
  cost: number
  highlighted?: boolean
}

export default function RewardCard({
  title,
  description,
  benefits,
  cost,
  highlighted,
}: RewardCardProps) {
  return (
    <div
      className={`p-6 flex flex-col gap-2.5 ${
        highlighted
          ? "border-indigo-400 border-2 w-72 h-96"
          : "border-gray-300 border w-64 h-80"
      } rounded-md max-w-full`}
    >
      <h2
        className={`${
          highlighted ? "text-indigo-500" : "text-neutral-700"
        } text-2xl font-normal`}
      >
        {title}
      </h2>

      <p className="text-neutral-500 text-sm font-light">{description}</p>

      <span className="text-neutral-700 font-bold text-4xl">${cost}</span>

      <button
        className={`w-full flex justify-center items-center rounded-md text-sm min-h-8 ${
          highlighted
            ? "text-white bg-indigo-400"
            : "border-gray-300 border text-indigo-400"
        }`}
        onClick={async () => {
          const res = await fetch("./api/donate", {
            body: JSON.stringify({
              donationAmount: cost,
              currency: "USD",
            }),
            method: "POST",
          })
          window.location.href = await res.json()
        }}
      >
        Donate Amount
      </button>

      <div className="flex flex-col py-4 gap-2.5 min-h-24">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex gap-2.5 px-1 items-center h-6">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-indigo-400 text-sm"
            />
            <span className="text-neutral-500 text-sm font-light">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
