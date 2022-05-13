import React from "react";
import { AppRoutes } from "./routes";
import { Header } from "./styles";
import { AppElement } from "./styles";

function App() {
  return (
    <AppElement>
      <div className="container">
        <Header>
          <h1>Task List App</h1>
        </Header>
      </div>

      <AppRoutes />
    </AppElement>
  );
}

export default App;
