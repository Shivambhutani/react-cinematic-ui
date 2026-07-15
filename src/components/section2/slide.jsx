import React from "react";

const Slide = ({ img, title, description, active }) => {
  return (
    <div
      className={`
        absolute inset-0
        transition-all duration-1000 ease-in-out
        ${
          active
            ? "opacity-100 scale-100 translate-x-0"
            : "opacity-0 scale-105 translate-x-full"
        }
      `}
    >

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="
          w-full h-full
          object-cover
          blur-[2px]
          scale-105
        "
      />


      {/* Dark + Blur overlay */}
      <div className="
        absolute inset-0
        bg-black/40
        backdrop-blur-sm
      " />


      {/* Content */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          justify-center
          items-center
          text-center
          text-white
          px-6
        "
      >

        <h3
          className="
            text-5xl
            font-bold
            mb-4
            tracking-wide
          "
        >
          {title}
        </h3>


        <p
          className="
            max-w-xl
            text-lg
            text-gray-200
          "
        >
          {description}
        </p>


        <button
          className="
            mt-8
            px-8 py-3
            rounded-full
            bg-white
            text-black
            font-semibold
            hover:bg-gray-200
            transition
          "
        >
          Explore More
        </button>

      </div>

    </div>
  );
};

export default Slide;