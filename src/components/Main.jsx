import React from "react";

function Main() {
  return (
    <div className="w-full " id="hero">
      <main className="w-[90%] mx-auto pt-3 ">
        <div className="">
          <h1 className="text-4xl md:text-7xl text-center" id="name">
            Hii There. I'm Nitin
          </h1>
          <h1 className="text-4xl md:text-7xl text-center mt-5" id="prof">
            A FullStack Developer
          </h1>

          <p className="text-[#bbbbbb] text-base md:text-xl text-center leading-7 w-[70%] mx-auto py-12 ">
            I'm passionate about creating experiences that are easy to use,
            accessible and that meet the use's needs.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Main;
