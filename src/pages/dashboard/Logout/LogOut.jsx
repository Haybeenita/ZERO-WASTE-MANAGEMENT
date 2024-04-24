import { useContext } from "react";
import { authContext } from "../../../Providers";
import { useNavigate } from "react-router-dom";
export const LogOut = () => {
  const navigate = useNavigate()
  const { showModal,toggleModal,setShowModal} = useContext(authContext)


   const closeModal = () => {
    setShowModal(false);
  };
  const closeModalYes = () => {
    setShowModal(false);
    localStorage.clear()
    navigate('/')
  };
  return (
    <>
    <div className="w-full p-6 mx-auto lg:max-w-full max-w-[5rem] px-3 lg:flex-0 shrink-0 relative mt-[12rem] ">
      {showModal && (
        <div className="bg-white shadow-xl h-[15rem] w-[10rem] lg:w-[25rem] rounded-2xl mx-auto">
          <h3 className="text-lg text-center text-[#212122] font-bold item pt-8">
          Are you sure you are ready to log out? Don't forget, your next adventure awaits your return!
          </h3>
          <div className="flex flex-row justify-center w-full items-center mt-[3rem]">
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
      {/* <button className="btn bg-[#51AD44] text-white flex items-center justify-center text-[13px] ml-[36rem] mt-[1.5rem] border-0 outline-0 " onClick={()=> toggleModal()}>Logout</button> */}
    </div>
    </>
  );
};

// export {toggleModal}; 
