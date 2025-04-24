import About from "@/components/About"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Instagram from "@/components/Instagram"
import PageLink from "@/components/PageLink"
import Pagination from "@/components/Pagination"
import Projects from "@/components/Projects"

import Services from "@/components/Services"
import WorkWithMe from "@/components/WorkWithMe"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Experience />
      <Pagination />
      <WorkWithMe />
    </>
  )
}
