import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full z-30 flex justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-12">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src="/images/logo-dark.svg" alt="Logo" width={32} height={32} className="w-28 h-28 fill-current" />
            </Link>
          </div>

          {/* Desktop navigation */}
            {/* Desktop sign in links */}
          {/* <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav> */}

          {/* <MobileMenu /> */}

        </div>
      </div>
    </header>
  )
}
