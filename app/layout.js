import { Rubik } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Gym App',
  description: 'A gym app for every need in the gym',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />

        {children}
        <Footer />
        </body>
    </html>
  )
}
