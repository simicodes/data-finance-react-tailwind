import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">SIMICODES.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi,
          rem cum illum nihil unde laborum rerum praesentium totam molestiae.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagram size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <ul>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div>
          <ul>
            <h6 className="font-medium text-gray-400">Support</h6>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>

        <div>
          <ul>
            <h6 className="font-medium text-gray-400">Company</h6>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Partners</li>
          </ul>
        </div>

        <div>
          <ul>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
            <li className="py-2 text-sm">Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
