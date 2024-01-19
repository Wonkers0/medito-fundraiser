import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
import ProgressBar from "./ProgressBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProgressStat from "./ProgressStat"

export default function FundraiserProgress() {
  return (
    <div className="flex flex-col gap-5 lg:gap-0">
      <div className="hidden lg:flex flex-col">
        <ProgressStat title="Goal" stat="$5,500" className="text-right" />
      </div>

      <ProgressBar />

      <div className="flex justify-center items-center w-full gap-6 lg:hidden">
        <ProgressStat title="Raised" stat="$3,532" />
        <FontAwesomeIcon
          icon={faArrowRightArrowLeft}
          className="text-sm text-indigo-200"
        />
        <ProgressStat title="Goal" stat="$5,500" />
      </div>
    </div>
  )
}
