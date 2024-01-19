"use client"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface Props {
  question: string
  answer: string
}

export default function Question({ question, answer }: Props) {
  const [isCollapsed, setIfCollapsed] = useState<boolean>(true)

  return (
    <div className="flex flex-col border-b border-gray-300 w-full max-w-[900px] gap-2.5 p-4">
      <button
        className="flex justify-between w-full gap-4"
        onClick={() => setIfCollapsed((prev) => !prev)}
      >
        <p className="flex-grow text-neutral-600 text-sm text-left font-light">
          {question}
        </p>
        <FontAwesomeIcon
          icon={isCollapsed ? faPlus : faMinus}
          className="text-neutral-700"
        />
      </button>
      {!isCollapsed && (
        <p className="text-neutral-500 text-xs font-light">{answer}</p>
      )}
    </div>
  )
}
