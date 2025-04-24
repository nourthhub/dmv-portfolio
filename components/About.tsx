import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <section className="lg:mx-28 mx-20 py-14">
      <div className="flex-wrap lg:flex justify-center gap-4">
        <div className="flex md:flex-wrap w-2/3 m-auto lg:w-5/12  lg:ml-0">
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            src="/about-image-2.png"
            alt="A group of People"
          />
        </div>
        <div className="flex w-full lg:w-6/12 md:flex-wrap place-items-center mr-0">
          <div className="flex-row ">
            <div className="flex max-[1023px]:m-auto">
              <span className="flex mt-3 font-normal after:text-slate-500">
                <hr className="rounded border-0 w-20 h-0.5 max-[1023px]:w-0 max-[1023px]:h-0 bg-black mt-1" />
              </span>
              <h1 className="text-2xl leading-9 pl-0 lg:pl-4 pb-4 md:justify-center">
                Know More
              </h1>
            </div>
            <h1 className="text-4xl leading-9 pb-4 font-bold">About Michael</h1>
            <h1 className="text-xl leading-9 pb-4">
              Specializing in the creation of immersive and visually striking
              digital experiences, I am driven by a discerning eye for design
              and a comprehensive understanding of user interface principles. I
              seamlessly fuse creativity and technical expertise into the core
              of every project.
              <br /> <br />
              With a degree in Computer Science from the National College of
              Business and Arts, I have honed my skills in translating abstract
              concepts into compelling websites. Proficient in CSS frameworks
              such as Tailwind and Bootstrap, along with technologies like
              ReactJS, Typescript, and NextJS, I excel in transforming design
              concepts into user interfaces that are both seamless and
              interactive.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
