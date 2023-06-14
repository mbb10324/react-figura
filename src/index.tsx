import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import SimpleForm from "./SimpleForm";
import HugeForm from "./HugeForm";
import React from "react";
import Home from "./Home";
import "./index.css";

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/simple' element={<SimpleForm />} />
                <Route path='/huge' element={<HugeForm />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <App />
);