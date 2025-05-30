import Image from "next/image";

export const SupportSection = () => {
  return (
    <div className="text-black py-5 px-4 md:px-16">
      <div className="max-w-7xl flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <p className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:leading-tight font-poppins">
            <span className="relative inline-block before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#44BCFF] before:via-[#FF44EC] before:to-[#FF675E] before:blur-md before:opacity-30 before:rounded">
              <span className="relative z-10">Let us know for support</span>
            </span>
          </p>
          <p className="text-black leading-relaxed mb-8 mt-8">
            At WDIA, we're passionate about connecting music lovers with the
            best albums, fast. Our curated selection ensures quality and style,
            making it easy to discover, collect, and enjoy music that truly
            moves you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-fuchsia-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-fuchsia-800 transition"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
            >
              Call for Support
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/images/support.png"
            alt="Listen. Discover. Enjoy."
            width={600}
            height={600}
            className="rounded-lg"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};
