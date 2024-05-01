import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../../Providers/index.jsx";
import { PostReviews } from "../../../BACKEND/Backend.js";
import axios from "axios";
import { useEffect } from "react";
// import { FaPen } from "react-icons/fa";

export const Review = () => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const { authUser } = useContext(authContext);
  const token = localStorage.getItem('token')

  const handleInputChange = (event) => {
    setReview(event.target.value);
  };
 
  const createReview = (e) => {
    const token = localStorage.getItem('token')
    console.log(token)
    e.preventDefault();
    axios
      .post(`${PostReviews}?comment=${review}&reviewer_name=${authUser?.first_name}`,{
        comment: review,
        reviewer_name: authUser?.first_name,
      },{headers:{
        accept:'application/json',
        Authorization: `Bearer ${token}`,
        ContentType: 'application/json',
      },})
      .then(function (response) {
        console.log(response, "response from db");

        // console.log(reviews,'current review')
        setReview('')
      })
      .catch(function (error) {
        console.log(error, "error from db");
      });
  };

  //getting user reviews 

   useEffect(()=>{
    if(token){
      // console.log(token)
        axios.get(`http://37.27.82.158:8000/api/v1/reviews/review/`,{
          headers:{
            accept:'application/json',
            Authorization: `Bearer ${token}`
          }
        })
       .then(function (response) {
      // handle success
      console.log(response.data,'users reviews')
      setReviews(response.data)
      })
     .catch(function (error) {
      // handle error
      console.log(error);
       });
       return
    }
    // setBookingDetails('')
  },[])

console.log(reviews,'all reviews by user')



  return (
    <div>
      <div className="relative">
        <h1 className="text-xl text-[#212122] font-bold mt-[1rem] ml-[2rem]">
          Reviews
        </h1>
        <p className="text-lg text-[#212122] font-bold mt-[1rem] ml-[2rem]">
          <span className="text-zero-400">
            Hello {authUser?.first_name}, 
          </span>
            you can Leave your reviews here 👇🏽
        </p>
        <form onSubmit={createReview}>
          <div className="flex">
          <textarea
            className="textarea textarea-bordered ml-[3rem] bg-zero-50 shadow-xl mt-[2rem] md:w-[45rem] w-[20rem] h-[15rem] lg:h-[25rem] text-[#212122] text-semibold"
            style={{ resize: "none", overflow: "auto" }}
            placeholder="Write a Message"
            value={review}
            onChange={handleInputChange}
          ></textarea>
          <div  className="flex flex-col ml-[6rem]">
              {
                reviews.map((review,index)=>{
                  return <div key={index} className="bg-zero-50 shadow-xl mt-[2rem] ">
                    <p className="font-medium text-zero-400">{review.reviewer_name}</p>
                    <p  className="font-medium">Review: {review.comment}</p>
                  </div>
                })
              }
          </div>
          </div>
          <div>
            <button className="bg-zero-500 md:ml-[39rem] ml-[14rem] w-[9rem] h-[3rem] rounded-lg mt-[1rem] text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
