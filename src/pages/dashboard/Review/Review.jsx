import React from "react";
// import { FaPen } from "react-icons/fa";

export const Review = () => {
  return (
    <div>

    <div className="relative">
      <h1 className="text-xl text-[#212122] font-bold mt-[1rem] ml-[2rem]">
        Reviews
      </h1>
      <p className="text-lg text-[#212122] font-bold mt-[1rem] ml-[2rem]">
        You can Leave your reviews here 👇🏽
      </p>
      <textarea
        className="textarea textarea-bordered ml-[5rem] bg-zero-50 shadow-xl mt-[2rem] w-[45rem] h-[25rem] text-[#212122] text-semibold"
        style={{ resize: "both", overflow: "auto" }}
        placeholder="Write a Message"
      >
      </textarea>
    </div>
     <div>
     <button className="bg-zero-500 ml-[40rem] w-[9rem] h-[3rem] rounded-lg mt-[1rem] text-white">
         Submit

     </button>
 </div>
    </div>

  );
};
