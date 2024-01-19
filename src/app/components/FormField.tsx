import { Field } from "formik"

interface Props {
  label: string
  id: string
  as?: string
  required?: boolean
  type?: string
  className?: string
}

export default function FormField({
  label,
  id,
  as,
  required,
  type = "text",
  className,
}: Props) {
  return (
    <div className="flex flex-col flex-grow gap-1">
      <label htmlFor={id} className="text-neutral-700 text-xs font-light">
        {label}
      </label>
      <Field
        {...{ type, id, required, as }}
        name={id}
        className={
          "border-gray-300 border rounded-sm p-1 w-full text-neutral-500 font-light text-sm " +
          className
        }
      />
    </div>
  )
}
