import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../constants/routes";
import Navigation from "./Navigation/Navigation";
import { Suspense } from "react";

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense>
          <Routes>
            {appRoutes.map(({ path, element }) => {
              return <Route key={path} path={path} element={element} />
            })}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
