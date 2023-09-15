import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { FaEnvelope, FaGlobe, FaLink, FaPhoneAlt } from "react-icons/fa"
import { IoLocation, IoMail } from "react-icons/io5"

const ContactSection = () => {
  return (
    <section className="flex justify-center pt-16" id="contact">
      <main className="w-[1300px] min-h-screen flex items-center px-3 md:px-2 flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full  flex items-center md:border-r">
          <section className="h-3/4   w-full md:p-6 lg:p-8">
            <h1 className="font-bold text-3xl mb-6">Get in touch</h1>
            <p className="font-medium text-gray-500 leading-8 mb-8">
              Have any questions or feedback? I'd love to hear from you. Reach
              out to me using one of the methods below. I am a software engineer
              who loves making everyone's lives easier. Thanks for exploring!
            </p>
            <div className="text-gray-500 font-medium">
              <div className="flex items-center mb-5">
                <FaGlobe className="text-xl font-semibold mr-8" />
                <p className="">
                  <a href="https://zaiyellyintaung.github.io/">
                    zaiYellYintAung.github.io
                  </a>
                </p>
              </div>
              <div className="flex items-center mb-5">
                <AiOutlinePhone className="text-xl font-semibold mr-8" />
                <p>
                  <a>+95-9987304010</a>
                </p>
              </div>
              <div className="flex items-center mb-5">
                <IoMail className="text-xl font-semibold mr-8" />
                <p>
                  <a>zaiyellyintaung@gmail.com</a>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/2 h-full flex items-center">
          <section className="h-3/4  w-full py-6 px-2 md:p-8 flex flex-col ">
            <div className="mb-6 flex gap-4">
              <div className="w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="px-3 py-2 border rounded w-full"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-3"
                  htmlFor="firstName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="px-3 py-2 border rounded w-full"
                  required
                />
              </div>
            </div>

            <div className="mb-6 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-6 w-full flex-grow">
              <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="px-3 py-2 border rounded w-full h-full"
                required
              ></textarea>
            </div>
            <div className="w-full flex justify-end mt-8 sm:mb-12">
              <button className="px-4 py-2 text-sm bg-superwhite font-semibold rounded-md border border-black">
                Send Message
              </button>
            </div>
          </section>
        </div>
      </main>
    </section>
  )
}

export default ContactSection
