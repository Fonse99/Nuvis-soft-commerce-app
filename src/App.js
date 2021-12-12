import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

const App = function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;