import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../constants/routes";

const App = () => {
  return (
    <div>
      <header>/</header>
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
