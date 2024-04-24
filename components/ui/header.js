"use client"
import Link from 'next/link'
import Image from 'next/image'
import stratos from '@/public/images/Banner.png'

import { usePathname } from 'next/navigation'
export default function Header() {
  const pathname = usePathname()
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm ">
      <nav className="mt-6 relative max-w-[100rem] w-full bg-white border border-gray-200 drop-shadow-xl shadow-black rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link href="/" className="block" aria-label="Stratos">
            <Image className="w-40 h-12 fill-current text-purple-600" width="12px" height='12px' alt="logo" src={stratos} />
          </Link>
          <div className="md:hidden">
            <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
              <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <a className={`font-medium md:py-6 ${pathname.includes("scripts") ? "text-purple-600 hover:text-purple-500" : "text-gray-300 hover:text-gray-400"}`} href='/scripts' aria-current="page">Docker Scripts</a>
            <a className={`font-medium md:py-6 ${pathname.includes("sh") ? "text-purple-600 hover:text-purple-500" : "text-gray-300 hover:text-gray-400"}`} href='/sh' aria-current="page">Bash Scripts</a>
            {/* <a className={`font-medium md:py-6 ${pathname.includes("contact") ? "text-purple-600 hover:text-purple-500" : "text-gray-300 hover:text-gray-400"}`} href='/contact' aria-current="page">Contact</a> */}
          </div>
        </div>
      </nav>
    </header>
  )
}