import {Link} from "react-router-dom"
import MealIcon from "../assets/icons/meal.svg"

const Navbar = () => {
    return (
        <div>
            <nav className="nav-container">
                <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                    <img src={MealIcon} alt="Meal Icon" style={{ width: "24px", height: "24px" }}/>
                    <span 
                        style={{
                            color: "#333", 
                            fontSize: "1.5rem", 
                            fontWeight: "bold",
                            textDecoration: "underline",
                            textDecorationColor: "#f0c040",
                            textUnderlineOffset: "4px"
                            }}>
                                Planner.
                    </span>
                </Link>

                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="/addmeal">Add Meal</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar