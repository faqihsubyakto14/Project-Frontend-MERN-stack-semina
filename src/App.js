import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { listen } from "./redux/listener";
import { AppRoutes } from "./router/index";

function App() {
  useEffect(() => {
    console.log('First')
    listen();
  });

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
