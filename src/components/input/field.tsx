import { HTMLAttributes } from 'react'

export type FieldProps = HTMLAttributes<HTMLDivElement>

export function Field(props: FieldProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-full bg-zinc-900 px-3 py-2 shadow-sm focus-within:border-cyan-300 focus-within:ring-2 focus-within:ring-cyan-200"
      {...props}
    />
  )
}
