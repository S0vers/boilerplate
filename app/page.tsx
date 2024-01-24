import { ModeToggle } from '@/components/ui/themeButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='relative h-dvh w-screen'>
      <div className='absolute right-40 top-6'>
        <ModeToggle />
      </div>
    </main>
  )
}
