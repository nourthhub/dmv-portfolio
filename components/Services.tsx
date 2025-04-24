import { WHAT_I_DO } from "@/constants"
import React from "react"

type WidList = {
  title: string
  description: string
}

const WidList = ({ title, description }: WidList) => {
  return (
    <div className="bg-gray-400 py-10">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 ">
        <dt className="text-base leading-7 text-gray-600">{description}</dt>
        <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
          {title}
        </dd>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className=" bg-gray-200">
      <div className="lg:mx-28 py-14">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            What I Do
          </h2>
          <hr className="rounded-full w-20 h-1 bg-black m-auto my-8" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {WHAT_I_DO.map((wid) => (
              <WidList
                key={wid.title}
                title={wid.title}
                description={wid.description}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Services
