'use client'
import { usePathname } from 'next/navigation'

export default function ProductPage() {
  const pathname = usePathname()
  return <h1>product:{pathname}</h1>
}
