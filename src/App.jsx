import { BrowserRouter, Routes, Route } from "react-router-dom";

//task import layout
import DefaultLayout from "./layouts/DefaultLayout";

//task importo le pages
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route Component={DefaultLayout}>

            {/* qui importo le pages */}
            <Route path="/" Component={HomePage} />
            <Route path="/aboutus" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
