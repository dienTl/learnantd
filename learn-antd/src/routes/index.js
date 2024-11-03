
import LayoutDefault from "../components/layout/LayoutDefault";
import BookRoom from "../pages/BookRoom";
import CreateRoom from "../pages/CrateRoom";
import Dashboard from "../pages/Dashbroard";
import ListRoom from "../pages/ListRoom";


export const  routes =[
    {
        path:"/",
        element: <LayoutDefault />,
        children : [
            {
                path:"/",
                element:<Dashboard />
            },
            {
                path:"/book-room",
                element:<BookRoom />
            },
            {
                path:"/create-room",
                element:<CreateRoom />
            },
            {
                path:"/List-room",
                element:<ListRoom />
            }
        ]
    }
]; 
