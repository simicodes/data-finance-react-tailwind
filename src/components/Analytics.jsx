import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  // Conflicting peer dependency: react@16.14.0
  //  node_modules/react
  //    peer react@"^16.3.0" from react-typed@1.2.0
  //    node_modules/react-typed
  //      react-typed@"^1.2.0" from the root project

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            placeat veritatis perferendis unde laborum reprehenderit voluptate
            incidunt sit, eveniet earum amet? Totam autem consequatur molestias
            quod, quidem eaque illum nemo.
          </p>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
