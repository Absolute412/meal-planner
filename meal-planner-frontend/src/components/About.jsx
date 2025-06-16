import Navbar from "./Navbar";
import { Footer } from "./Footer";

const About = () =>{
    return (
        <>
            <Navbar/>

            <div className="about-section">
              <h2 className="about-title">About This App</h2>
                <p className="about-description">
                    Meal Planner is your simple solution for organizing what you eat.  
                    Add meals, track your food, and build healthy habits that last.
                </p>
            </div>

            <Footer/>
        </>
    );
}

export default About;