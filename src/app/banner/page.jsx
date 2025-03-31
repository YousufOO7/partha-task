// import Image from "next/image";
import { motion } from "framer-motion";

const BannerPage = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400">
      {/* Background Layer with Motion Effect */}
      {/* <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/WaveLinesDesktop1.svg')" }}
        animate={{ x: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div> */}

      {/* Left Side Content */}
      <div className="relative z-10 text-white px-6 md:px-20 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">Embrace the future of finance</h1>
        <p className="mt-4 text-lg">
          Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
          Reach Out to Us &gt;
        </button>
      </div>

      {/* Right Side Image */}
      {/* <motion.div
        className="absolute bottom-0 right-0 w-1/2 hidden md:block"
        initial={{ x: 30 }}
        whileHover={{ x: 15 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image
        //   src="/business-woman.png" // Replace with your image in the public folder
          alt="Business Woman"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </motion.div> */}
    </section>
    );
};

export default BannerPage;