import React from "react";
import ReactDOM from "react-dom";
import { Overview } from "./pods/overview";
import { AppProviders } from "./app.providers";

const App: React.FC = () => {
  return (
    <AppProviders>
      <Overview />
    </AppProviders>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
