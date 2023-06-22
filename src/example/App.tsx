import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SimpleForm from "./SimpleForm";
import HugeForm from "./HugeForm";
import "../lib/styles.css";
import Home from "./Home";
import "./App.css";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/simple" element={<SimpleForm />} />
                <Route path="/huge" element={<HugeForm />} />
            </Routes>
        </Router>
    );
}
