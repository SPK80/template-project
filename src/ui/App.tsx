import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "bll/store";
import { RoutesComponent } from "./RoutesComponent";

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <RoutesComponent />
        </div>
      </Provider>
    </HashRouter>
  );
};
