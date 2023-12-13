import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navagiation from "./routes/navigation/navigation.component";


const Shop = () => {
  return (
    <div>
      <h1>Lets BUY</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navagiation/> }>
        <Route index element={ <Home /> } />
        <Route path="shop" element={ <Shop /> } />
      </Route>
    </Routes>
  );
}

export default App;
