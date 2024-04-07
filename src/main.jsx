import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import Profile from './Component/Profile/Profile'
import User from './Component/User/User'
import Blogs from './Component/Blogs/Blogs'
import Contact from './Component/Contact/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
      path: "/",
      element: <Home></Home>
    },
      {
      path: "/update",
      element: <Profile></Profile>
    },
      {
      path: "/user",
      element: <User></User>
    },
      {
      path: "/blog",
      element: <Blogs></Blogs>
    },
      {
      path: "/contact",
      element: <Contact></Contact>
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
