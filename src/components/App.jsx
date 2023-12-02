import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../constants/routes";
import Navigation from "./Navigation/Navigation";
import { Suspense } from "react";
import Loader from "./Loader/Loader";

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => {
              return <Route key={path} path={path} element={element} />;
            })}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
