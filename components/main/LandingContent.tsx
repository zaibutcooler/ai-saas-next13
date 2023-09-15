import {
  Code,
  CreditCard,
  Image,
  MessageSquare,
  Music,
  SubscriptIcon,
  Video,
} from "lucide-react"
import { FaAngleDoubleLeft } from "react-icons/fa"

const features = [
  {
    title: "ChatBot",
    icon: <MessageSquare size={32} />,
    description:
      "Engage users in natural conversations and provide automated assistance.",
  },
  {
    title: "Code Generation",
    icon: <Code size={32} />,
    description:
      "Automatically generate code to save time and improve development efficiency.",
  },
  {
    title: "Image Generation",
    icon: <Image size={32} />,
    description:
      "Create stunning images algorithmically or through data-driven processes.",
  },
  {
    title: "Music Creation",
    icon: <Music size={32} />,
    description:
      "Compose and produce your own music with digital tools and software.",
  },
  {
    title: "Video Generation",
    icon: <Video size={32} />,
    description:
      "Generate videos by combining visuals, animations, and clips automatically.",
  },
  {
    title: "Subscription",
    icon: <CreditCard size={32} />,
    description:
      "Offer premium services or content through regular payment plans.",
  },
]

const LandingContent = () => {
  return (
    <section
      className="min-h-screen md:pt-12 lg:pt-14  flex justify-center pb-12 md:pb-0"
      id="root"
    >
      <div className="container w-[1100px] px-0 md:px-2">
        <div className="mx-2 lg:px-[30px]">
          <h1 className="lg:text-4xl text-2xl font-black mb-8 w-full text-center">
            Available Features
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 text-superwhite font-sans">
          {features.map((item) => (
            <div
              className="col-span-1 md:px-3 min-h-[160px] md:h-[230px] md:mb-6 mb-4 px-2"
              key={item.title}
            >
              <div className="w-full h-full bg-sky-100 dark:bg-gray-950 rounded-lg shadow-lg p-4 md:p-5">
                <div className="text-2xl  md:text-5xl lg:m-2 font-bold mb-2 md:mb-4 ">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[0.9rem] md:text-[1.1rem] mb-2">
                  {item.title}
                </h4>
                <p className="text-[0.7rem] md:text-[0.9rem] font-medium leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LandingContent
