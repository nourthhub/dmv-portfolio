import Image from "next/image"
import React from "react"

const WorkWithMe = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-svh text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          className="object-cover object-center w-full h-full"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          src="/work-with-me.png"
          alt="A group of People"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Work with Michael
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          I seamlessly fuse creativity and technical expertise into the core of
          every project. Connect with me today!
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Let&apos;s Connect
        </a>
      </div>
    </div>
  )
}

export default WorkWithMe
