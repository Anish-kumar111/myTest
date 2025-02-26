import React from 'react'

function Navbar() {
  return (
    <div>
    <body className="bg-gray-100">
    
      <nav className=" top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-black font-bold text-2xl">
                <svg className="h-6 w-auto" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/services" className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300">Services</a>
                <a href="/about" className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300">About</a>
                <a href="/login" className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300">Log in</a>

              </div>
            </div>

          </div>
        </div>
    
        <div id="menu" className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Model S</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Model 3</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Model X</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Model Y</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Solar Roof</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Solar Panels</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Shop</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Account</a>
          </div>
        </div>
      </nav>
    
    </body></div>
  )
}

export default Navbar