import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="p-10 bg-[#131517]">
      <div className="flex flex-wrap gap-6 justify-between">
        <div className="w-full md:w-[56%]">
          <motion.h1
            className="text-4xl md:text-[55px] text-[#F7FAFF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Join Us Today! <span className="text-[#CFD3DA]">And Build Your Best Career</span>
          </motion.h1>
          <motion.p
            className="font-mono text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </motion.p>
          <div className="bg-[#131517] mt-6 flex flex-wrap gap-4 items-center">
            <input
              type="text"
              className="p-3 w-full sm:w-1/3 bg-[#6464641A] border-2 border-gray-400"
              placeholder="Search Location"
            />
            <button className="w-full sm:w-1/6 p-3 text-white bg-[#1B70F1] rounded-md">
              Search
            </button>
          </div>

          {/* Animated Stats Section */}
          <motion.div
            className="flex justify-between gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="text-center border-r border-gray-400 pr-4">
              <p className="text-5xl text-white font-semibold">10M +</p>
              <p className="text-gray-300">Trusted Users</p>
            </div>
            <div className="text-center border-r border-gray-400 pr-4">
              <p className="text-5xl text-white font-semibold">₹ 20B +</p>
              <p className="text-gray-300">Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-white font-semibold">10M +</p>
              <p className="text-gray-300">Trusted Users</p>
            </div>
          </motion.div>
        </div>

        {/* Image Section with Animation */}
        <motion.img
          src="/src/pages/About/aboutImg/3D illustration baru char lama (8) 1.png"
          alt="About Illustration"
          className="w-full md:w-[41%] mt-6 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </div>

      <div className="mt-[100px]">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-3xl text-white">Select Your Team For Job</p>
          <input
            type="text"
            placeholder="Search here"
            className="w-full sm:w-[310px] p-2 bg-[#131517] border-2 border-gray-400"
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-5 pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {['Legal', 'Legal', 'Legal'].map((role, index) => (
            <div
              key={index}
              className="w-full sm:w-[270px] text-center text-gray-300 border border-gray-400 p-2 mt-5"
            >
              {role} (10)
            </div>
          ))}
        </motion.div>

        <p className="text-center text-3xl text-white mt-16">Open Job Roles</p>
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          {Array(9).fill().map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-6 justify-center p-3 w-full sm:w-[80%] lg:w-[80%] border border-gray-400 h-[80px] mt-4"
            >
              <p className="text-gray-400 text-2xl w-[400px]">Executive Marketing Manager</p>
              <p className="text-gray-400 text-xl">Marketing | New Delhi, India | Full Time, Remote</p>
              <button className="text-blue-500 p-2 w-[140px] border-2 border-[#1B70F1]">
                Apply Now
              </button>
            </div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <div className="flex justify-center items-center mt-6">
          <motion.button
            className="text-white bg-blue-500 p-3 w-[200px] text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Load More
          </motion.button>
        </div>
      </div>

      {/* Apply Now Section with Animation */}
      <div className="flex items-center justify-between p-3 h-[480px] bg-[#1E222C]">
        <motion.div
          className="w-full sm:w-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <p className="text-white text-4xl font-semibold">
            Hurry Up! Apply Now Your Job Role
          </p>
          <p className="font-mono text-gray-300 text-xs pt-8">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <button className="text-white bg-blue-500 p-3 w-[200px] mt-5 rounded-md">
            Apply Now
          </button>
        </motion.div>
        <div>
          <img
            src="/src/pages/About/aboutImg/work_from_home_for_landing_page_5_home_page_3d_rendering_Premium_Psd 2.png"
            alt="Work from home"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* FAQ Section with Animation */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <h1 className="text-white text-4xl font-semibold">Frequently Asked Questions</h1>
        <p className="font-mono text-gray-300 text-sm pt-3">
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-between mt-10 lg:m-auto">
        {Array(6).fill().map((_, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-[530px] p-3 border border-gray-400 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 + index * 0.2, duration: 1 }}
          >
            <h1 className="font-semibold text-xl text-white">What is the difference between Defi and Metaverse?</h1>
            <p className="font-semibold text-xs text-gray-300 mt-2">
              When an unknown printer took a galley of type and scrambled it to make a type specimen book...
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
