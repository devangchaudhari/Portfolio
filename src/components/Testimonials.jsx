import React from "react";
import { MailIcon, PhoneIcon, GlobeAltIcon, AnnotationIcon, ChatAlt2Icon } from "@heroicons/react/solid";


export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Devang Chaudhari
        </h1>
        <div className="flex justify-center items-center">
          {/* Email */}
          <a href="mailto:devangchaudhari2003@gmail.com" target="_blank" rel="noopener noreferrer" className="mr-4">
            <MailIcon className="w-8 h-8 text-white hover:text-gray-300" />
          </a>
          {/* Phone number */}
          <a href="tel:9405193251" className="mr-4">
            <PhoneIcon className="w-8 h-8 text-white hover:text-gray-300" />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <AnnotationIcon className="w-8 h-8 text-white hover:text-gray-300" />
          </a>
          {/* GitHub */}
          <a href="https://github.com/devangchaudhari" target="_blank" rel="noopener noreferrer" className="mr-4">
            <ChatAlt2Icon className="w-8 h-8 text-white hover:text-gray-300" />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/devangchaudhari/" target="_blank" rel="noopener noreferrer">
            <GlobeAltIcon className="w-8 h-8 text-white hover:text-gray-300" />
          </a>
        </div><br />
        Devang &copy; 2024 My Portfolio
      </div>
    </section>
  );
}
