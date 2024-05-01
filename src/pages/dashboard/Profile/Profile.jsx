import { useContext, useRef, useState,useEffect} from "react";
import { authContext } from "../../../Providers/index.jsx";
import axios from "axios";
import { profileImage } from "../../../BACKEND/Backend.js";
// import { data } from "autoprefixer";
function Profile() {
  const fileInputRef = useRef(null);
  const {authUser,bookingDetails,userProfileImage,setuserProfileImage} = useContext(authContext)
  const defaultImg= 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303093.jpg?w=740&t=st=1714383402~exp=1714384002~hmac=a7006916eebb9e0d64a21d87218a9a225e0ed5879ef11d25468f8fab66f1de82'
 
const token = localStorage.getItem("token");
// console.log(token);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profile_picture", file);
    axios.post(`${profileImage}`, formData,{headers:{
      accept:'application/json',
      Authorization: `Bearer ${token}`,
      ContentType: 'multipart/form-data',
    },})
    .then(function (response) {
      console.log(response,'from upload')
      alert(response.data.message)
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  //get profile image
  useEffect(()=>{
    if(token && profileImage){
        axios.get(`${profileImage}`,{
          headers:{
            // accept:'application/json',
            Authorization: `Bearer ${token}`
          },
          responseType:'blob'
        })
       .then(function (response) {
        const url =URL.createObjectURL(response.data)
      console.log(response,'users image')
      setuserProfileImage(url)
      // console.log(userProfileImage);
      })
     .catch(function (error) {

      console.log(error);
       });
       return
    }
  },[token,userProfileImage])
 
  return (
    <div className="w-full lg:p-6 p-10 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 lg:flex-0 shrink-0">
          <div className="flex flex-wrap -mx-3 gap-6">
            <div className="card w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12 bg-white shadow-lg">
              <div className="flex flex-col items-center py-10">
                {
                  userProfileImage ?
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={userProfileImage}
                  alt="Bonnie image" onError={(e)=> e.target.src= defaultImg}/> 
                  
                  : <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={ defaultImg}
                alt="Bonnie image"
              /> 
                }
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  {authUser?.first_name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                 {authUser?.email}
                </span>
                <div className="flex mt-4 md:mt-[4.3rem]">
                
                <input type="file"accept="image/*"onChange={handleFileChange} ref={fileInputRef}style={{ display: "none" }}  />
                       <button className="inline-flex items-center px-4 py-2 
                    text-sm font-medium text-center text-white bg-zero-500 rounded-lg
                     hover:bg-zero-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "  onClick={handleButtonClick}>Change Profile Image</button>
                  
                </div>
              </div>
            </div>
            <div className="card w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12 bg-white shadow-lg p-4 sm:p-8">
              <div className="flex items-center justify-between mb-4 p-4 lg:p-0">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">
                  Address Book
                </h5>
                <a
                  href="#"
                  className="text-sm font-medium text-zero-600 hover:underline "
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 "
                >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                        <h3 className="text-[#212122] text-lg font-semibold first-letter:">
                          Default Address:
                        </h3>
                        <p className="text-sm font-medium text-gray-900 truncate  mt-[1rem]">
                         {bookingDetails[0]?.address}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white mt-[7.6rem] bg-zero-500 rounded-lg hover:bg-zero-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                          Change Address
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
