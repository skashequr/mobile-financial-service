import { Dropdown } from "keep-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/axiousPublic";
import { toast } from 'react-toastify';
const Registration = () => {
  const navigate = useNavigate();
  const notify = () => toast("Sucessfully Signup done");
  // const {registration} = useContext(AuthContext);
  const {createUser} = useContext(AuthContext);
  console.log(createUser);
  const [selectedItem, setSelectedItem] = useState("User");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const [errorMessage,setErrorMessage] = useState("");
  const axiosPublic = useAxiosPublic([]);
  const registrationHandler = (e) => {
    
    e.preventDefault();
    const name = e.target.name.value;
    const pin = e.target.password.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const nid = e.target.nid.value;
    const userInfo = {
      name, pin, email, number, nid, selectedItem
    };
  
    axiosPublic.post("/users", userInfo)
      .then(response => {
        console.log("User added successfully:", response.data);
        // Handle success
        createUser(email, pin)
          .then((userCredential) => { 
            const user = userCredential.user;
            user && navigate("/");
            console.log(user);
            notify();
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);
            // Handle error
          });
      })
      .catch(error => {
        // Handle error
        if (error.response.status === 405) {
          setErrorMessage("This Email Already Exists");
        } else if (error.response.status === 400) {
          setErrorMessage("This NID already exists");
        } else if (error.response.status === 406) {
          setErrorMessage("This Mobile Number already exists");
        } else {
          setErrorMessage(error.response.data);
        }
      });
  };
  
  return (
    <div>
      <style>
        {`.pattern {
            background-image: url("https://i.ibb.co/NCjMz2R/45106.jpg");
            background-size: cover;
            height: 100vh; 
                }`}
      </style>

      <header className="bg-gray-900 pattern">
        <div className="container px-16 mx-auto">
          <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
            <div className="lg:w-1/2 mt-48">
              <div className=" dark:bg-gray-800 ">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                  <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-white sm:text-4xl">
                    <span className="block">Want to be millionaire ?</span>
                    <span className="block text-indigo-500">
                      It&#x27;s today or never.
                    </span>
                  </h2>
                  <p className="text-xl font-bold mt-4 max-w-md mx-auto text-black-500">
                    I had noticed that both in the very poor and very rich
                    extremes of society the mad were often allowed to mingle
                    freely
                  </p>
                  <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                      <button
                        type="button"
                        className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
              <div className="w-full max-w-md mt-48 bg-white rounded-lg dark:bg-gray-800">
                <div className="px-6 py-8 text-center">
                  <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                    Sign In
                  </h2>

                  <form onSubmit={registrationHandler}>
                    <div className="flex items-center justify-center -mx-2 sm:mt-0">
                      <a
                        href="#"
                        className="px-3 py-1 text-sm font-semibold text-black transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700"
                      >
                        Sign In
                      </a>
                      <a
                        href="#"
                        className="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800"
                      >
                        Sign Up
                      </a>
                    </div>
                    <div className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center"></div>
                    <div className="mt-4">
                      <input
                        className="block w-full px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        aria-label="Email address"
                      />
                      <input
                        className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        type="email"
                        placeholder="Email address"
                        name="email"
                        aria-label="Email address"
                      />
                      <input
                        className="block w-full px-4 mt-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        type="number"
                        placeholder="Mobile Number"
                        name="number"
                        aria-label="Email address"
                      />
                      <input
                        className="block w-full px-4 mt-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        type="number"
                        placeholder="National Id number"
                        name="nid"
                        aria-label="Email address"
                      />
                      <input
                        className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        type="password"
                        name="password"
                        placeholder="PIN"
                        aria-label="Password"
                      />
                      <p>{errorMessage}</p>
                     <div className="flex items-center justify-between">
                    
                      <div>
                      <Dropdown
                        label="Dropdown button"
                        type="primary"
                        size="sm"
                        dismissOnClick={true}
                        className="mt-4"
                      >
                        {/* Define Dropdown items */}
                        <Dropdown.Item onClick={() => handleItemClick("Agent")}>
                          Agent
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleItemClick("User")}>
                          User
                        </Dropdown.Item>
                      </Dropdown>
                      </div>
                      <div className="p-3 rounded-lg mt-2 bg-blue-600">
                      <p className="text-white">Role : {selectedItem}</p>
                      </div>
                     </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-200 hover:underline"
                      >
                        Forget Password?
                      </a>

                      <button
                        type="submit"
                        className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Registration;