import { createBrowserRouter, Router } from "react-router-dom";
import Main from "../../layoute/Main";
import Catagories from "../../Pages/Catagoris/Catagories";
import EduDeacrip from "../../Pages/EduDeacrip/EduDeacrip";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagories/:id',
                element: <Catagories></Catagories>
            },
            {
                path: '/education/:id',
                element: <EduDeacrip></EduDeacrip>

            }
        ]
    }
])