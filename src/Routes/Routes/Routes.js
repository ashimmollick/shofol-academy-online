import { createBrowserRouter, Router } from "react-router-dom";
import Main from "../../layoute/Main";
import Blog from "../../Pages/Blog/Blog";
import Catagories from "../../Pages/Catagoris/Catagories";
import EduDeacrip from "../../Pages/EduDeacrip/EduDeacrip";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ClassDescription from "../../Pages/shares/ClassDescription/ClassDescription";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news-catagories')

            },
            {
                path: '/catagory/:id',
                element: <Catagories></Catagories>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {
                path: '/education/:id',
                element: <EduDeacrip></EduDeacrip>

            },
            {
                path: '/classdescription/:id',
                element: <PrivateRoute><ClassDescription></ClassDescription></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],

    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }
])