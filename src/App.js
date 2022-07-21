import { Route, Router,Routes,BrowserRouter,useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import { reducer, initialState } from "./reducers/userReducer";
import './scss/main.scss';
import { createContext, useContext, useEffect, useReducer } from 'react';
import Admin from './pages/admin/Admin';
export const UserContext = createContext();
const Routing = ()=>{
  let history = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history("/signIn", { replace: true });
    }
  }, [dispatch, history]);
  return (
    <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/signin" element={<Onboarding/>} />
          <Route  path="/admin" element={<Admin/>} />
      </Routes>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      <BrowserRouter>
          <Routing/>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
