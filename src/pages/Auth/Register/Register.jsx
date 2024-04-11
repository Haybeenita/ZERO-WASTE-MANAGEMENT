import { useState } from "react";
// import {useNavigate} from "react-router-dom"
import Button from "../../../components/Buttons";
import Input from "../../../components/Input";
import { signUp } from "../../../Firebase/Firebase.jsx";
import { useContext } from "react";
import { authContext } from "../../../Providers";
// import {Navigate} from "react-router-dom"
import {useNavigate} from "react-router-dom"
const Register = () => {
  const navigate = useNavigate()
  const [registration,setRegistration] = useState(false)
  const {loading,authUser}= useContext(authContext)

  console.log(loading,authUser)
  const [formFilled, setFormFilled] = useState({
    email: "",
    password: "",
    phonenumber: "",
    username: "",
  });
  const handleInputChange = (e) => {
    setFormFilled({
      ...formFilled,
      [e.target.name]: e.target.value,
    });
  };
  // const clearFormFilled = () => {
  //   setFormFilled({
  //     email: "",
  //     password: "",
  //     phonenumber: "",
  //     username: "",
  //   });
  // }

  // console.log(formFilled)
  
 const register = async () => {
    // console.log(formFilled);
  // let res
  // let {email, password} = formFilled
  // try {
  //    const res = await signUp(email, password)
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error);
  //   }
     signUp(formFilled.email, formFilled.password)
     setRegistration(true)
      .then((res) => {
        console.log("signup", res);
        // navigate("/Bookus");
        setFormFilled({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative h-screen bg-cover bg-center filter bg-[url('../../../src/assets/images/animation1.jpg')]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="md:w-[30rem] md:h-[40rem] w-[22rem] h-[34rem] flex items-center justify-center pt-[2.5rem] md:mt-[0.75rem] shadow-2xl md:bg-white/35 bg-white/40 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
          <div className="justify-center shadow-2xl md:w-[30rem] md:h-[40rem] w-[25rem] h-[34rem] ">
            <h1 className="flex items-center justify-center font-bold md:text-3xl text-2xl text-black mb-2">
              Register
            </h1>
            <hr className="md:w-[25rem] w-[15rem] border-black flex items-center justify-center m-auto"></hr>
            <p className="flex font-semibold text-black items-center justify-center gap-1 md:mt-[1rem] mt-[0.5rem] text-base md:text-lg">
              Create an
              <span className="text-[#0E5808] font-normal md:font-medium">
                
                Account
              </span>
              to access features
            </p>
            <div className="flex relative flex-col w-[18rem] md:w-[22rem] ml-[1.8rem] md:ml-[4rem] md:mt-[2rem] mt-[0.5rem]">
              <div>
                <p className="text-black font-normal md:font-medium">Name:</p>

                <Input
                  variant="primary"
                  padding="8px"
                  placeholder="name"
                  onChange={handleInputChange}
                  name="username"
                  value={formFilled.username}
                />

                <p className="text-black font-normal md:font-medium">Email:</p>
                <Input
                  variant="primary"
                  md:padding="8px"
                  padding="6px"
                  placeholder="@"
                  onChange={handleInputChange}
                  name="email"
                  value={formFilled.email}
                />

                <p className="text-black font-normal md:font-medium">
                  Phone Number:
                </p>
                <Input
                  variant="primary"
                  padding="8px"
                  placeholder="+234"
                  onChange={handleInputChange}
                  name="phonenumber"
                  value={formFilled.phonenumber}
                />

                <p className="text-black font-normal md:font-medium">
                  Password:
                </p>
                <Input
                  type="password"
                  variant="primary"
                  padding="8px"
                  placeholder="....."
                  onChange={handleInputChange}
                  name="password"
                  value={formFilled.password}
                />
              </div>

              <div className="flex justify-center md:mt-4 mt-4">
                <Button
                  variant="primary"
                  size="large"
                  type="submit"
                  handleClick={()=>register()}
                >
                  Register
                </Button>
              </div>
              {registration && <p className="text-black text-lg absolute font-semibold mb-[1rem] mt-[22rem] text-center">user created successfully</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
