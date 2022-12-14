import { useState } from "react";
import GlobalSearchContext from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/component/scss/styles.scss";
import Home from "./component/pages/home/Home";


function App() {
  const [searchData, setSearchData] = useState();
   console.log("i am search data", searchData);
  return (
    <div className="App">
      <GlobalSearchContext.Provider value={{ searchData, setSearchData }}>
        <BrowserRouter>
          <Routes>
               <Route path="/" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalSearchContext.Provider>

    </div>
  );
}

export default App;
