import React from "react";
import style from "./App.module.scss";
import { Calculator } from "./components/Calculator/Calculator";

const App: React.FC = () => {
  return (
    <div className={style.App}>
      <Calculator />
    </div>
  );
};

export { App };
