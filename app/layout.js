import './css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: "Easy Scripts",
  description: "Discover and utilize pre-made Docker Compose and Bash scripts for a smoother development experience.",
};
export default function RootLayout({
  children
}) {
  return (
    <html lang="en"  >
      <body className={`${inter.variable} ${architects_daughter.variable} [&::-webkit-scrollbar]:[width:12px] [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-purple-600 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-track]:rounded-xl font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden" >
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
