
import Login from "component/login/login";
import Data from "component/login/data";
import { Routes, Route } from "react-router-dom";

const App = (): JSX.Element => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/data" element={<Data/>}/>
      </Routes>
    </div>
  );
};

export default App;
