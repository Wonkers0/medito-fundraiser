interface Props {
  text: string
}

export default function Divider({ text }: Props) {
  return (
    <div className="flex w-screen max-w-[900px] p-2.5 gap-5 items-center">
      <div className="h-px flex-grow bg-neutral-400"></div>
      <h1>{text}</h1>
      <div className="h-px flex-grow bg-neutral-400"></div>
    </div>
  )
}
