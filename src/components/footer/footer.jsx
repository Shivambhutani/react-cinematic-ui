import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo Section */}
        <div>
          <h2 className="text-3xl font-bold">
            MyBrand
          </h2>

          <p className="mt-4 text-gray-400">
            Creating modern digital solutions
            for businesses worldwide.
          </p>
        </div>


        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>


        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>


        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              FB
            </button>

            <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              IG
            </button>

            <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              IN
            </button>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-5 text-center text-gray-400">

        © 2026 MyBrand. All rights reserved.

      </div>

    </footer>
  );
};


export default Footer;