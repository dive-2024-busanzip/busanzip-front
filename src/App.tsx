//App.js
import { Route, Routes, useLocation } from "react-router-dom";

//routing components
import { Main } from "@pages/Main";
import { Map } from "@pages/Map";
import { ROUTES } from "@constants/routes";
import MainLayout from "@components/common/Layout/Main";
import MapLayout from "@components/common/Layout/Map";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === ROUTES.MAIN ? <MainLayout /> : <MapLayout />}
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.STAY} element={<Map />} />
        <Route path={ROUTES.TEAVEL} element={<Map />} />
        <Route path={ROUTES.AROUND} element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
