
import { lazy } from "react";
import Loadable from "../utils/Loadable"
import UserLayout from "../layout/UserLayout";

const Clearance = Loadable(lazy(() => import('../pages/Clearance')));
const Wishlist = Loadable(lazy(() => import('../pages/Wishlist')));
const ShoppingBag = Loadable(lazy(() => import('../pages/ShoppingBag')));

const UserRoutes = {
  path: '/',
  element: <UserLayout />,
  children: [
    {
      path: 'clearance',
      element: <Clearance />,
      children: [
        {
          path: 'women',
          element: <></>
        },
        {
          path: 'men',
          element: <></>
        },
        {
          path: 'kids',
          element: <></>
        },
        {
          path: 'wishlist',
          element: <Wishlist />
        },
        {
          path: 'shoppingbag',
          element: <ShoppingBag />
        }
      ]
    },
  ]
}

export default UserRoutes;