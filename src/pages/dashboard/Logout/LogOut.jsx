import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const LogOut = () => {
    const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const closeModalYes = () => {
    setShowModal(false);
    navigate('/')
  };

  return (
    <>
    <div className="w-full p-6 mx-auto max-w-full px-3 lg:flex-0 shrink-0 relative">
      {showModal && (
        <div className="bg-white shadow-2xl h-[15rem] w-[25rem] rounded-2xl mx-auto">
          <h3 className="text-lg text-center font-bold pt-8">
            You Sure Say You Wan Log Out?
          </h3>
          <div className="flex flex-row justify-center w-full items-center mt-[6rem]">
            <button
              onClick={() => closeModalYes()}
              className="btn bg-[#51AD44] text-white text-[13px] border-0 outline-0 mr-[10rem]"
            >
              YES
            </button>
            <button
              onClick={() => closeModal()}
              className="btn bg-[#51AD44] text-white text-[13px] border-0 outline-0"
            >
              No
            </button>
          </div>
        </div>
      )}
      <button className="btn bg-[#51AD44] text-white text-[13px] border-0 outline-0 " onClick={()=> toggleModal()}>Logout</button>
    </div>
    </>
  );
};

// export {toggleModal}; 
