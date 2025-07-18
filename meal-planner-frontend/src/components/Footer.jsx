import { FaFacebook, FaInstagram } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri";

export const Footer =()=> {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Planner section */}
                <div className="footer-section">
                    <h2 className="footer-brand">Planner.</h2>
                    <p className="footer-description">
                        Eat better, save time, and plan your meals effortlessly.
                    </p>
                    <div className="footer-socials">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><RiTwitterXFill /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

                {/*Quick Navigation */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/addmeal">Add Meal</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>

                {/* Support section */}
                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom section */}
            <hr />
            <p className="footer-bottom">© 2025 Meal Planner. All rights reserved.</p>
        </footer>
    );
}