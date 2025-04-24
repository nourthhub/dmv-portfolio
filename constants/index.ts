export const NAV_LINKS = [
    { href: '/', key: 'about', label: 'About' },
    { href: '/', key: 'projects', label: 'Projects' },
    { href: '/', key: 'testimonials ', label: 'Testimonials' },
    { href: '/', key: 'contact_us', label: "Let's Connect" },
  ];

  export const TESTI_INFO = [
    {
        author: 'John Doe',
        jobdesc: 'Web Consultant',
        authimage: '/dmv-small-2.png',
        description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    },
    {
        author: 'John Doe 2',
        jobdesc: 'Web Consultant',
        authimage: '/dmv-small-2.png',
        description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    },
];

import TestimonialImg01 from "@/public/testimonial-01.jpg"
import TestimonialImg02 from "@/public/testimonial-02.jpg"
import TestimonialImg03 from "@/public/testimonial-03.jpg";



export const testimonials = [
    {
        img: TestimonialImg01,
        quote:
          "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
        name: "Jessie J",
        role: "Acme LTD",
    },
    {
        img: TestimonialImg02,
        quote:
          "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
        name: "Nick V",
        role: "Malika Inc.",
    },
    {
        img: TestimonialImg03,
        quote:
          "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: "Amelia W",
        role: "Panda AI",
    },
];


import ProjectImage01 from "@/public/proj-1-light.jpg"
import ProjectImage02 from "@/public/proj-2-light.jpg"
import ProjectImage03 from "@/public/proj-2-light.jpg"

import ProjectGIF01 from "@/public/proj-1-gif.gif"
import ProjectGIF02 from "@/public/proj-1-gif.gif"
import ProjectGIF03 from "@/public/proj-1-gif.gif"

export const PROJECT_INFO = [
    {
        projimage: ProjectImage01,
        projgif: ProjectGIF01,
        description:
          "Dark Modern Design",
        title: "Fred Renna",
    },
    {
        projimage: ProjectImage02,
        projgif: ProjectGIF02,
        description:
          "Project 2",
          title: "Project 2",
    },
    {
        projimage: ProjectImage03,
        projgif: ProjectGIF03,
        description:
          "Project 3",
          title: "Project 3",
    },
];


import {
  faInstagram,
  faLinkedin,
  faGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons"

export const SOCIAL_MEDIA = [
  {
      socicon: faLinkedin,
      soclink: "https://www.linkedin.com/in/dan-michael-villamarin-666692130/",
      socdesc:
        "LinkedIn",
  },
  {
    socicon: faGithub,
    soclink: "https://github.com/astronawt",
    socdesc:
      "Github",
  },
  {
  socicon: faInstagram,
  soclink: "https://www.instagram.com/dmnourth/",
  socdesc:
    "Instagrab",
  },
];


export const WHAT_I_DO = [
  {
    title: "Web Designing",
    description:
      "I craft captivating, user-friendly websites tailored to your brand, blending creativity and technical expertise for an impactful online presence.",
  },
  {
    title: "Web Development",
    description:
      "I create and manage websites, using coding, design, and functionality to make them dynamic and interactive.",
  },
  {
    title: "Project Management",
    description:
      "I manage tasks, resources, and timelines effectively to achieve specific goals, while coordinating and delegating tasks within my own team.",
  },
  {
    title: "Consultancy",
    description:
      "I offer expert advice and guidance to individuals or organizations, assisting them in problem-solving, enhancing performance, and achieving their objectives.",
  },
  {
    title: "Graphic Designing",
    description:
      "I craft impactful designs through visual communication, using images, typography, and layout.",
  },
  {
    title: "Video Editing",
    description:
      "I edit videos to create compelling narratives, involving tasks such as trimming, adding effects, and enhancing audio for a polished result.",
  },
];

export const EXPERIENCE = [
  {
    title: "BS Computer Science",
    subtitle: "NCBA Taytay",
    description:
      "My education at NCBA Taytay has equipped me with the knowledge and expertise to excel in a variety of roles and make meaningful contributions to the field of computer science.",
    category: "Education",
  },
  {
    title: "Title",
    description:
      "Lorem Ipsum",
    category: "Education",
  },
  {
    title: "Title",
    description:
      "Lorem Ipsum",
      category: "Education",
  },
];