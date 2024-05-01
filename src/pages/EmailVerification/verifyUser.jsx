
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { verifyEmail } from "../../BACKEND/Backend";
const VerifyUserEmail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState("pending");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const extractTokenFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("token");
    };

    const verifyToken = (token) => {
      const backendEndpoint = `https://api.zerowastebin.com.ng/api/v1/users/verify-email/${token}`;

      axios
        .post(
          backendEndpoint)
        .then((response) => {
          console.log(response);
          setVerificationStatus("success");
          navigate('/login')
        })
        .catch((error) => {
          console.error("Error:", error);
          console.log(
            error.response.data.detail,
            "this is the error for timeout"
          );
          if (error.response.data.details) {
            setErrorMessage(error.response.data.details);
            setShowError(true);
          } else {
            setShowError(false);
          }
          alert(error.response.data.detail);
          setVerificationStatus("error");
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    const token = extractTokenFromURL();
    if (token) {
      verifyToken(token);
    } else {
      console.error("Token not found in URL");
      setVerificationStatus("error");
      setIsLoading(false);
      navigate("/Register")
    }
  }, []);

  useEffect(() => {
    if (!isLoading && verificationStatus === "success") {
      navigate("/login");
    }
  }, [isLoading, verificationStatus, navigate]);

  return (
    <div>
      {isLoading && <p>Verifying...</p>}
      {!isLoading && verificationStatus === "error" && (
        <div className="w-full h-screen flex items-center justify-center px-[100px] text-center">
          <h1 style={{ fontSize: "40px" }}>
            Verification failed. Please try again or contact support.
          </h1>
        </div>
      )}
      {/* {showError && <VerifyEmailInfoAlert errorMessage={errorMessage} />}{" "} */}
      {/* Pass errorMessage as a prop */}
    </div>
  );
};

export default VerifyUserEmail;