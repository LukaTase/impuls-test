import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-red-600 font-bold text-xl">
                Impuls
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="#"
                className="border-transparent text-gray-500 hover:border-red-600 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="#"
                className="border-transparent text-gray-500 hover:border-red-600 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="#"
                className="border-transparent text-gray-500 hover:border-red-600 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="#"
                className="border-transparent text-gray-500 hover:border-red-600 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
