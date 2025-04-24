"use client"
import { PROJECT_INFO } from "@/constants"
import Image, { StaticImageData } from "next/image"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

type ProjectList = {
  projimage: StaticImageData
  projgif: StaticImageData
  description: string
  title: string
}

const ProjectList = ({
  projimage,
  projgif,
  description,
  title,
}: ProjectList) => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <section className="py-14 mx-20 ">
        <div className="border-2 border-solid">
          <div className="rounded-full bg-white shadow-xl aspect-square ">
            <Image
              src={projimage}
              className="rounded-full"
              alt="illustration"
              loading="lazy"
              width={100}
              height={100}
              layout="responsive"
              objectFit="center"
            />
          </div>
          <div className="space-y-4 text-center mt-6">
            <h3 className="text-2xl font-semibold text-purple-900">{title}</h3>
            <p className="mb-6">{description}</p>
            <a
              className="block font-medium text-purple-600 pb-1.5 transition-all hover:font-bold"
              onClick={() => setShowModal(true)}
            >
              Know More
            </a>
          </div>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-normal outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block opacity-80 hover:opacity-60 outline-none focus:outline-none">
                        <FontAwesomeIcon icon={faXmark} />
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <Image
                      src={projgif}
                      layout={"responsive"}
                      height={175}
                      width={175}
                      alt={`A cute animal!`}
                      unoptimized={true}
                    />
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </section>
    </>
  )
}

const Projects = () => {
  return (
    <div className="bg-gray-200">
      <div className="container m-auto px-0 text-gray-500">
        <div className="mx-auto grid md:w-full lg:w-full lg:grid-cols-3">
          {PROJECT_INFO.map((project) => (
            <ProjectList
              key={project.title}
              title={project.title}
              projimage={project.projimage}
              description={project.description}
              projgif={project.projgif}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
