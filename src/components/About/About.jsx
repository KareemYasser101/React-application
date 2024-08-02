import React from "react";

export default function About() {
  return (
    <>
      <div className="about flex flex-col justify-center items-center min-h-screen bg-[#1ABC9C]">
        <h2 className="uppercase text-white text-5xl font-bold">
          about component
        </h2>
        <div className="underline flex justify-center items-center my-5">
          <div className="line w-32 h-1 bg-white"></div>
          <i className="fa-solid fa-star text-white mx-5"></i>
          <div className="line w-32 h-1 bg-white"></div>
        </div>
        <div className="description my-2 text-center text-white">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download <br />
            includes the complete source files including HTML, CSS, and <br />
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
