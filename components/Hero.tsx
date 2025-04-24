import React from "react"
import Image from "next/image"
import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { SOCIAL_MEDIA } from "@/constants"

type SocialList = {
  socicon: IconDefinition
  soclink: string
  socdesc: string
}

const SocialList = ({ socicon, soclink, socdesc }: SocialList) => {
  return (
    <div className="flex justify-center m-3 ">
      <a
        className="border-solid border-2 border-black rounded-xl hover:bg-black hover:text-white text-black aspect-square p-3 justify-center flex items-center"
        href={soclink}
        title={socdesc}
        target="_blank"
      >
        <FontAwesomeIcon className="fa-lg" icon={socicon} />
      </a>
    </div>
  )
}

const Hero = () => {
  return (
    // <div className="container">
    //   <main>
    //     <h1 className="title">
    //       <FontAwesomeIcon icon={faInstagram} />
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>
    //   </main>
    // </div>
    <section className="lg:mx-28 mx-20 py-14">
      <div className="flex-wrap lg:flexjustify-cente">
        <div className="flex flex-wrap-reverse gap-4">
          <div className=" w-full lg:w-1/12  m-auto ml-0">
            <div className="flex lg:flex-col justify-center">
              <hr className="rounded-full border-0 w-0.5 lg:h-28 max-[1023px]:w-24 max-[461px]:w-0 max-[461px]:mr-0 max-[1023px]:h-1 max-[1023px]:mr-5 bg-black lg:m-auto hidden lg:block" />

              {SOCIAL_MEDIA.map((socmed) => (
                <SocialList
                  key={socmed.socdesc}
                  socicon={socmed.socicon}
                  soclink={socmed.soclink}
                  socdesc={socmed.socdesc}
                />
              ))}
            </div>
            <hr className="rounded-full border-0 w-0.5 lg:h-28 max-[1023px]:w-24 max-[461px]:ml-0 max-[461px]:w-0 max-[1023px]:h-1  max-[1023px]:ml-5 bg-black m-auto lg:m-auto hidden lg:block" />
          </div>

          <div className="flex w-full lg:w-5/12 md:flex-wrap place-items-center">
            <div className="flex-row">
              <div className="flex max-[1023px]:m-auto">
                <span className="flex mt-3 font-normal after:text-slate-500">
                  <hr className="rounded border-0 w-20 h-0.5 max-[1023px]:w-0 max-[1023px]:h-0 bg-black mt-1" />
                </span>
                <h1 className="text-2xl leading-9 pl-0 lg:pl-4 pb-4">Meet</h1>
              </div>
              <h1 className="text-4xl leading-9 pb-4 font-bold">
                Michael Villamarin
              </h1>
              <h1 className="text-3xl leading-9 pb-4">Web Developer</h1>
            </div>
          </div>
          <div className="flex md:flex-wrap w-2/3 m-auto lg:w-5/12 lg:mr-0">
            <Image
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }} // optional
              src="/hero-image.png"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
