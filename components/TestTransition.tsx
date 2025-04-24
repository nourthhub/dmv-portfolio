"use client"
import { forwardRef, useState, Fragment, ForwardedRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const TestTransition = () => {
  let [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <Transition show={isOpen}>
        <Transition.Child
          className="absolute"
          enter="transform transition duration-[200ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <FontAwesomeIcon
              className="hover:opacity-80 border-solid border-gray-400 border-2 p-5 p-auto h-6 w-3 text-inherit flex absolute"
              icon={faBars}
            />
          </button>
        </Transition.Child>
      </Transition>
      <Transition show={!isOpen}>
        <Transition.Child
          className="absolute"
          enter="transform transition duration-[200ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <FontAwesomeIcon
              className="hover:opacity-80 border-solid border-gray-400 border-2 p-5 p-auto h-6 w-3 text-inherit flex absolute"
              icon={faXmark}
            />
          </button>
        </Transition.Child>
      </Transition>
    </>
  )
}

export default TestTransition
