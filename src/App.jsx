import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Employees from "./pages/employees";

function App(){
    return (
        <Router>
            <nav><Link to="/">Inicio</Link></nav>
            <nav><Link to="/employees">Empleados</Link></nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/employees" element={<Employees/>}/>
            </Routes>
        </Router>
    )
}
export default App;