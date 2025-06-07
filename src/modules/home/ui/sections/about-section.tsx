import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="min-h-screen px-0 py-12">
      <div className="w-full bg-fuchsia-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        <div className="md:w-1/2 text-center md:text-left pt-10 pb-10">
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Fast-Track Your Listening
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Listen. Discover. Enjoy.
          </h2>
          <p className="text-gray-600">
            Fast-track your listening experience with expertly curated music
            that guides you effortlessly through diverse genres and timeless
            playlists. Whether you&apos;re seeking iconic classics or
            undiscovered gems, we make it easy to explore, connect, and enjoy
            your perfect soundtrack — all in one place.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/assets/images/one.png"
            alt="Listen. Discover. Enjoy."
            width={2424}
            height={1616}
            className="rounded-lg"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </div>
      <div className="w-full bg-blue-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/assets/images/two.png"
            alt="Streamline Your Music Haul"
            width={2048}
            height={1365}
            style={{ width: "auto", height: "auto" }}
            className="rounded-lg"
            priority
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-green-600 font-semibold text-lg mb-2">
            Streamline Your Music Haul
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Curated Sounds, Delivered with Style
          </h2>
          <p className="text-gray-600">
            Experience music like never before — handpicked tracks and playlists
            expertly curated to match your unique taste, all presented with a
            sleek, stylish touch. Discover fresh sounds and timeless favorites
            effortlessly, and elevate your listening journey with us.
          </p>
        </div>
      </div>
    </div>
  );
};
