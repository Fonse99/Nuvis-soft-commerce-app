import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import PointOfSale from "./pages/PointOfSale";
import Home from "./pages/Home"
import Login from "./pages/Login"

const App = function () {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pos" element={<PointOfSale />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;