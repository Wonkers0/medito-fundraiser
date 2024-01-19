import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FundraiserProgress from "./fundraiser-progress/FundraiserProgress"
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons"
import { ReactNode } from "react"

export default function CauseCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white px-2.5 py-5 lg:py-8 lg:px-6 flex flex-col gap-8 lg:gap-4 border-gray-300 pb-16 lg:pb-20 border rounded-t-lg lg:rounded-lg max-w-[800px] lg:flex-grow lg:h-fit">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4 lg:px-2.5">
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            className="hidden lg:block text-neutral-400 text-2xl"
          />
          <h1 className="text-base lg:text-2xl font-semibold text-neutral-700">
            Create Ad Campaign in the Tram
          </h1>
        </div>

        <div className="text-neutral-600 font-light text-xs lg:text-lg lg:font-extralight">
          {children}
        </div>
      </div>

      <FundraiserProgress />
    </div>
  )
}
