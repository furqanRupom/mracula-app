import { createBrowserRouter } from "react-router-dom";
import HomePage from "../app/pages/Home/Home";
import ConverterPage from "../app/pages/Converter/Converter";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
     path:"/",
     element:<Main />,
     children:[
        {
            path:"/",
            element:<HomePage />

        },
         {
             path: "/csv-converter",
             element: <ConverterPage />
         }
     ]
    },
   
])