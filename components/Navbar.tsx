"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, Fragment, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Console, log } from "console"
import { NAV_LINKS } from "@/constants"
import { Transition } from "@headlessui/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <Link href="/">
              <Image
                src="/logo-light-x.png"
                alt="logo"
                width={150}
                height={29}
                className="static"
              />
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={handleClick}
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <FontAwesomeIcon
                    className="hover:opacity-80 border-solid border-gray-400 border-2 p-5 p-auto h-6 w-3 text-inherit flex "
                    icon={faXmark}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="hover:opacity-80 border-solid border-gray-400 border-2 p-5 p-auto h-6 w-3 text-inherit flex "
                    icon={faBars}
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0">
          <a
            href="#"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            List your property
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            Trips
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            Messages
          </a>
        </nav> */}

        <nav
          className={`px-2 pt-2 pb-0 sm:flex sm:p-0`}
          // ${
          //   isOpen ? "block" : "hidden"
          // }
        >
          <div className="hidden sm:flex ">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="block px-2 py-1 text-white transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Transition
            show={isOpen}
            className="transition-all duration-500 overflow-hidden"
            enterFrom="transform scale-95 opacity-0 max-h-0"
            enterTo="transform scale-100 opacity-100 max-h-96"
            leaveFrom="transform scale-100 opacity-100 max-h-96"
            leaveTo="transform scale-95 opacity-0 max-h-0"
          >
            <div className="pb-4">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="block px-2 py-1 text-white transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Transition>
        </nav>
      </header>
    </>
  )
}

export default Navbar
