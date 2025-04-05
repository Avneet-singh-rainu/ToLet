// NoNavLayout.jsx
import React from "react";
import { Outlet } from "react-router";

const NoNavLayout = () => {
   return (
      <div>
         <Outlet />
      </div>
   );
};

export default NoNavLayout;
