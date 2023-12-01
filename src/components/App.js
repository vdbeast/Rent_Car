import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../constants/routes";
import Navigation from "./Navigation/Navigation";

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          {appRoutes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
