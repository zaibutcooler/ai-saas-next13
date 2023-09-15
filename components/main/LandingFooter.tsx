import React from "react"
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

const LandingFooter = () => {
  return (
    <div className="text-gray-500 h-[20vh] px-6 md:px-16 py-8 md:py-0 border-t flex flex-col md:flex-row md:justify-between md:items-center border-gray-200 md:mt-0 mt-20">
      <div className="text-sm font-medium mb-4 md:mb-0 w-full md:w-1/2 justify-center md:justify-start">
        <p className="w-full text-center md:text-start">
          © 2023 Unicorn, Inc. All rights reserved.
        </p>
      </div>
      <div className="flex gap-6 md:gap-8 text-2xl w-full md:w-1/2 justify-center md:justify-end">
        <a
          href="https://www.facebook.com/profile.php?id=100031240690311&mibextid=LQQJ4d"
          className="hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/_u/zai_yellyintaung?fbclid=IwAR1tyatbESPwWEQUYfq_ufB8QBrJXLzaZqVto67tX-tEj4bXKR-pVLc8UeU"
          className="hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/zaibutcooler"
          className="hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/zaiYellYintAung"
          className="hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/@ooo0zai0ooo"
          className="hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  )
}

export default LandingFooter
