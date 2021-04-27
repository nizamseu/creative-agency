import Home from "./Componants/HomePage/Home/Home"
import MenuBar from "./Componants/SharePage/MenuBar/MenuBar"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Dashboard from "./Componants/Dashboard/Dashboard/Dashboard";
import Login from "./Componants/SharePage/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Componants/SharePage/Login/PrivateRoute";
export const userAuth=createContext()

const  App= ()=> {

  const  [userInfo,setUserInfo]= useState({
    name:'',
    photo:'',
    email:'',
    islogged:false,
    error:'',
    success:false,
    isValid:''
  })
  return (
    <div>
      <userAuth.Provider value={[userInfo,setUserInfo]}>
      <Router>
          <Switch>
              <Route  exact path='/'>
                <Home></Home>
              </Route>

              <PrivateRoute path='/dashboard'>
                  <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="/login">
                  <Login></Login>
              </Route>
          </Switch>
      </Router>
      </userAuth.Provider>
    </div>
  );
}

export default App;
