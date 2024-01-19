"use client"
import ProgressStat from "./ProgressStat"
import { motion } from "framer-motion"

export default function ProgressBar() {
  const progressPercent = 64.2

  return (
    <div className="h-6 lg:h-8 bg-neutral-200 rounded-md w-full">
      <motion.div
        className="bg-indigo-400 flex justify-end items-center px-1.5 h-full relative rounded-[inherit] rounded-r-none"
        initial={{ width: 0 }}
        animate={{ width: progressPercent + "%" }}
        transition={{ duration: 1 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-indigo-50 text-xs lg:text-sm font-medium lg:font-semibold"
        >
          {progressPercent}%
        </motion.span>

        <AmountRaised progress={progressPercent} />
      </motion.div>
    </div>
  )
}

function AmountRaised({ progress }: { progress: number }) {
  const reversed = progress < 25

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`absolute right-0 top-0 h-[88px] hidden lg:flex ${
        reversed ? "flex-row-reverse translate-x-full" : ""
      }`}
    >
      <ProgressStat
        title="Amount Raised"
        stat="$3,532"
        className={`${
          reversed ? "!text-left rounded-r-md" : "!text-right rounded-l-md"
        } self-end bg-indigo-50 pr-2.5 pl-1.5 p-0.5 whitespace-nowrap`}
      />
      <div className="w-px h-full bg-indigo-400"></div>
    </motion.div>
  )
}
