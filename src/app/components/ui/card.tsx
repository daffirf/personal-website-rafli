import { cn } from "@/lib/utils";
import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl shadow-md p-4 bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  )
}