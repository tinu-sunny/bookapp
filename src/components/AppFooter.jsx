import React from 'react'

function AppFooter() {
  return (
    <>
      <footer className="bg-[#070E27] text-white py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-3 tracking-wider">ABOUT US</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
              dolorem veniam deserunt quisquam eius ad hic maxime dicta ipsum nemo.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-3 tracking-wider">NEWSLETTER</h4>
            <p className="text-gray-300 text-sm mb-3">
              Stay updated with our latest trends
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email ID"
                className="p-2 w-full text-gray-800 rounded-l-md focus:outline-none" style={{ background: 'white' }}
              />
              <button className="bg-yellow-400 px-4 rounded-r-md text-gray-900 font-bold">
                →
              </button>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-3 tracking-wider">FOLLOW US</h4>
            <p className="text-gray-300 text-sm mb-3">Let us be social</p>
            <div className="flex space-x-4 text-gray-300 text-xl">

            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-gray-400 text-xs mt-8 border-t border-gray-700 pt-4">
          Copyright © 2025 All rights reserved | This website is made with 💛 by{" "}
          <span className="text-yellow-400 font-semibold">Tinu </span>
        </div>
      </footer>

    </>
  )
}

export default AppFooter