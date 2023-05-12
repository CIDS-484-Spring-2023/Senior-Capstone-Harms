import React, { useContext } from 'react';
import Login from "./PAGES/Login/Login";
import Home from "./PAGES/Home/Home";
import Profile from "./PAGES/Profile/Profile";
import SignUp from "./PAGES/SignUp/SignUp";
import Workouts from "./PAGES/Workouts/workouts"
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Outlet,
   Navigate,
} from 'react-router-dom';
import { Authentication } from './Context/Authentication';

const currentUser = true;

function App() {


  const {currentUser}= useContext(Authentication);

  const Layout =() =>{
    return(
      <div>
        <navBar/>
        <div style={{display: "flex"}}>
          <leftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          <rightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute =({children}) =>{
    if(!currentUser){
      return <Navigate to="/Login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/Profile/:id",
          element: <Profile/>,
        },
        {
          path: "/Workouts",
          element: <Workouts/>,
        },
      ]
    },
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/SignUp",
      element: <SignUp/>,
    },
  ]);

  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );


}

export default App;
