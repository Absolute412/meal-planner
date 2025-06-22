import {Link} from "react-router-dom"
import MealIcon from "../assets/icons/meal.svg"
import { FaTimes, FaBars, FaMoon} from "react-icons/fa";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <div>
            <nav className="nav-container">
                <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                    <img src={MealIcon} alt="Meal Icon" style={{ width: "24px", height: "24px" }}/>
                    <span className="planner-text">
                        Planner.
                    </span>
                </Link>

                <div className="nav-right">
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === "light" ? <FaMoon /> : <FiSun style={{color: "#f0f0f0"}}/>}
                    </button>

                    <div className={`navlinks ${menuOpen ? "open" : ""}`}>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/addmeal" onClick={() => setMenuOpen(false)}>Add Meal</Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    </div>

                    <div className="burger-icon" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={22} /> : <FaBars  size={22}/>}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar