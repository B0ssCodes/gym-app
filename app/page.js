import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
   <h1>
    This is the main page!
   </h1>
   <Link href="/BenchProgram" ><h1 className='text-primary hover:text-blue-950'>Go to Bench Program</h1></Link>
   </div>
  )
}
