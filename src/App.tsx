//App.js
import { Route, Link, Routes } from "react-router-dom";

//routing components
import { Main } from "@pages/Main";
import { Map } from "@pages/Map";

function App() {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  return (
    <div className="App">
      <div>
        <p>
          <Link to="/">Main</Link>
        </p>
        <p>
          <Link to="/map">Map</Link>
        </p>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
