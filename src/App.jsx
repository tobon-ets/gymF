import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";

function App(){
    return (
        <Router>
            <nav><Link to="/">Inicio</Link></nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}
export default App;