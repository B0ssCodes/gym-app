import Link from 'next/link'
import React from 'react'

export default function BenchPRCalculatorButton() {
    return (
        <Link href="/BenchProgram" className='btn bg-[#0a3a2a] text-[#FAF9F6] hover:bg-emerald-900 rounded-3xl' >Check out our Bench Program Maker</Link>
    )
}
