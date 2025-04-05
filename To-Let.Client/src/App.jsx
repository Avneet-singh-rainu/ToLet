import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NavLayout from "./layouts/NavLayout";
import NoNavLayout from "./layouts/NoNavLayout";

function App() {
   return (
      <div className="app-root">
         <Routes>
            <Route element={<NoNavLayout />}>
               <Route index element={<Home />} />
            </Route>

            <Route element={<NavLayout />}></Route>
         </Routes>
      </div>
   );
}

export default App;
