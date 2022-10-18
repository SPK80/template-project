import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { TestComponent } from "./TestComponent";

export const PageNotFoundPath = "*";
export const DefaultPath = "";
export const TeatPath = "test";

export const RoutesComponent: React.FC = () => {
  const routes = [
    { path: PageNotFoundPath, componentLayout: <div>Page Not Found</div> },
    { path: TeatPath, componentLayout: <TestComponent /> },
    // add route
  ];

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Navigate to={TeatPath} />} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.componentLayout}
          />
        ))}
      </Routes>
    </div>
  );
};
