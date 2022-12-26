import Body1 from "./components/Body1";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { Routes, Route } from 'react-router-dom'
import Applications from "./components/Applications";

function App() {

  return (
    <div className="">
      <Header />
      <div className=" bg-slate-100 pt-20">
        <Routes>
              <Route path='/' element={ <Body1 />} />
              <Route path='/apply' element={<Applications />} />
            </Routes>
      </div>
    </div>
  );
}

export default App;
