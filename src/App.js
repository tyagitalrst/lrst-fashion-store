import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navagiation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";


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
        <Route path="sign-in" element={ <SignIn /> } />
      </Route>
    </Routes>
  );
}

export default App;
