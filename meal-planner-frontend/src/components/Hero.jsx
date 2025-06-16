import { Link } from "react-router-dom"

const Hero =()=> {
    return (
    <>
        <div className="hero-container">
            <div className="hero-overlay">
                <h1 className="hero-title">Plan Your Meals</h1>
                <p className="hero-description">Simplify your daily routine. Plan your meals, reduce stress, and build healthier eating habits — all in one place.</p>
                <button className="hero-btn">
                    <Link to="/addmeal" style={{textDecoration: "none", color: "inherit"}}>
                        Get Started
                    </Link>
                </button>
            </div>
        </div>
    </>);
};

export default Hero;