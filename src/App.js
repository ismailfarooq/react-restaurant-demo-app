import { useRoutes } from "react-router-dom";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import './index.scss';

import routes from "./routes";
// import Routes from "./RouteApi";

function App() {
  // const routeResult = useRoutes(routes);
  return (
    <main>
      {/* You can use by useRoutes like this (I prefer it): */}
      {useRoutes(routes)}
      {/* Or use by defining it */}
      {/* <Routes /> */}
    </main>
  );
}

export default App;