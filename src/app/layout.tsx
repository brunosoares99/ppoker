import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from '../components/Header'

const roboto = Roboto({ weight: ['100', '300','400','500','700', '900'],  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scrum Poker',
  description: 'para times de desenvolvimento ágil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} w-screen h-screen flex flex-col`}> 
        <Header />
        { children }
      </body>
    </html >
  )
}

