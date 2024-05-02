
import { Link } from "react-router-dom";
import workimg from "../assets/work.jpg"; // Import your image file

const DemonstrateCard = () => {
  return (
    <div className=" bg-white sm:px-8">
      <div className="flex flex-col lg:flex-row h-full lg:px-7">
        {/* Left Column */}
        <div className="lg:w-1/2 bg-white text-black flex justify-center items-center">
          <div className="p-8">
            <h1 className="text-3xl pt-5 font-semibold sm:text-5xl">
              Demonstrate branding consequently think outside
            </h1>

            <p className="mt-5 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-2">
                {/* Your SVG icon and text content */}
              </li>
              {/* Other list items */}
            </ul>

            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Get Started &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 relative">
          {/* Image */}
          <img
            src={workimg}
            alt="Work Image"
            className="h-full w-full object-cover"
          />
          {/* Overlay content */}
          <div className="absolute h-[250px] bottom-12 left-10 right-10 bg-white bg-opacity-70  text-black p-4 ">
            {/* Content at the bottom of the image */}
            <div className="relative">
              <h2 className="text-2xl pt-5 text-center font-semibold">
                Check Us Out
              </h2>
              <div className="absolute top-40 text-center justify-center items-center left-10 right-10">
                <Link
                  to="/contact-us"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-12 rounded-lg transition duration-300"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemonstrateCard;
