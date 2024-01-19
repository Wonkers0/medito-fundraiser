interface Props {
  title: string
  stat: string
  className?: string
}

export default function ProgressStat({ title, stat, className }: Props) {
  return (
    <div className={"flex flex-col text-center " + className}>
      <h3 className="text-indigo-400 text-xs font-light">{title}</h3>
      <span className="text-indigo-500 text-lg font-semibold">{stat}</span>
    </div>
  )
}
