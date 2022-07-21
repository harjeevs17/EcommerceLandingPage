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

  //Add a category
  export const addCategory = async(info,response)=>{
      const url = server + "/addCategory";
      axios.post(url, info).then((res) => {
        if (!res.data.error) {
            console.log(res)
        } else {
            console.log(res)
        }
    });
  }
  //Add a Product
  export const addProduct = async(info,response)=>{
    const url = server + "/addProduct";
    axios.post(url, info).then((res) => {
      if (!res.data.error) {
          console.log(res)
      } else {
          console.log(res)
      }
  });
}

//Get all categories
export const getAllCategories = async(setCategories)=>{
  const url = server + "/getAllCategories";
  axios.get(url).then((res) => {
    if (!res.data.error) {
      console.log(res)
        setCategories(res.data)
    } else {
        console.log(res)
    }
});
}
//Get all products
export const getAllProducts = async(setProducts)=>{
  const url = server + "/getAllProducts";
  axios.get(url).then((res) => {
    if (!res.data.error) {
      console.log(res)
      setProducts(res.data)
    } else {
        console.log(res)
    }
});
}
  