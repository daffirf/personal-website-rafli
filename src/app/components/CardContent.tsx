import { ReactNode } from 'react'

type CardContentProps = {
  children: ReactNode
}

export function CardContent({ children }: CardContentProps) {
  return <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
}