'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <button onClick={() => router.push('/product/1')}>go to product1</button>
        <Link href="/event">go to event</Link>
      </footer>
    </div>
  )
}
