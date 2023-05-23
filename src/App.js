import { useRoutes } from "react-router-dom";

import routes from "./routes";
// import Routes from "./RouteApi";

function App() {
  // const routeResult = useRoutes(routes);
  return (
    <>
      <header>
        <strong>App Js content</strong>
      </header>

      <main>
        {/* You can use by useRoutes like this (I prefer it): */}
        {useRoutes(routes)}
        {/* Or use by defining it */}
        {/* <Routes /> */}
      </main>
    </>
  );
}

export default App;