import { Navigate } from "react-router-dom";
import UserDetails from "../Sidebar Pages/Users/UserDetails";
import Error from "../Error";
import { AdminLayout } from "./FullLayoutAdmin";
import Statistics from "../Sidebar Pages/Statistics";
import Users from "../Sidebar Pages/Users/Users";
import { PrivateRouteAdmin } from "./PrivateRouteAdmin";
import AdminUserChat from "../Sidebar Pages/adminUserChat/AdminUserChat";
import VenueDetail from "../Sidebar Pages/adminUserChat/venueDetail";
import { Addadmin } from "../Sidebar Pages/admins/AddAdmin";
import { AdminDetails } from "../Sidebar Pages/admins/adminDetails";
import { Admins } from "../Sidebar Pages/admins/admins";
import UserChat from "../Sidebar Pages/userChat/UserChat";


export const ThemeRoutes = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/", element: <Navigate to="starter" /> },

      { path: "starter", exact: true, element: <PrivateRouteAdmin element={<Statistics />} /> },
      { path: "userdetails/:id", exact: true, element: <PrivateRouteAdmin element={<UserDetails />} /> },
      { path: 'usermanagment', exact: true, element: <PrivateRouteAdmin element={<Users />} /> },
      
      { path: 'adminuserchat', exact: true, element: <PrivateRouteAdmin element={<AdminUserChat/>} /> },
      { path: 'userchat', exact: true, element: <PrivateRouteAdmin element={<UserChat/>} /> },
      // { path: 'usermanagment', exact: true, element: <PrivateRouteAdmin element={<Addvenues />} /> },
      { path: 'VenueDetail/:docId', exact: true, element: <PrivateRouteAdmin element={<VenueDetail />} /> },

      { path: 'Addadmins', exact: true, element: <PrivateRouteAdmin element={<Addadmin />} /> },
      { path: 'AdminDetails/:id', exact: true, element: <PrivateRouteAdmin element={<AdminDetails />} /> },
      { path: 'AdminsList', exact: true, element: <PrivateRouteAdmin element={<Admins />} /> },



      // { path: 'HelpDeskDetails/:id', exact: true, element: <PrivateRouteAdmin element={<HelpDeskDetails />} /> },


      { path: "*", exact: true, element: <Error /> },
    ],
  },
];


