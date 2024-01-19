export default function Logo() {
  return (
    <div className="flex gap-1.5 h-12 items-center">
      <img className="w-12 aspect-square" src="/logo.png" alt="" />
      <div className="flex flex-col justify-center items-start">
        <span className="text-indigo-600 text-base font-medium leading-3">
          medito
        </span>
        <span className="text-indigo-300 text-xs font-light">Foundation</span>
      </div>
    </div>
  )
}
