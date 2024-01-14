import { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  return (
    <input
      id={props.name}
      className="w-full flex-1 border-0 bg-transparent p-0 text-lg text-zinc-100 placeholder-zinc-500 outline-none placeholder:text-base"
      {...props}
    />
  )
}
