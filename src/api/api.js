import axios from "axios";
const server = "http://localhost:5000";

//Sign In into the application
export const signInCall = async (info,setUserData) => {
    const url = server + "/signin";
  
    axios.post(url, info).then((res) => {
      if (!res.data.error) {
            setUserData(res.data)
      } else {
        console.log(res)
      }
    });
  };

//Sign Uo into the application
export const signUpCall = async (info, response) => {
    const url = server + "/signup";
  
    axios.post(url, info).then((res) => {
        if (!res.data.error) {
            console.log(res)
        } else {
            console.log(res)
        }
    });
  };
  