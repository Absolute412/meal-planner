import Navbar from "./Navbar";
import Hero from "./Hero";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export const Home = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals();
    }, []);

        const fetchMeals = async () => {
            try {
                const response = await fetch("https://meal-planner-backend-production-abea.up.railway.app/api/meals");
                const data = await response.json();
                setMeals(data);
            } catch (error) {
                console.error("Failed to fetch meals:", error)
            }
        };

       const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this meal?");
        if (!confirmDelete) return;

        try {
        const response = await fetch(`https://meal-planner-backend-production-abea.up.railway.app/api/meals/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            // Remove deleted meal from UI
            setMeals(meals.filter((meal) => meal.id !== id));
            alert("Meal deleted successfully.");
        } else {
            alert("Failed to delete meal.");
        }
    } catch (error) {
        console.error("Error deleting meal:", error);
        alert("Something went wrong.");
    }
  };

    return (
        <>
        <Navbar/>
        <Hero/>

        <section className="meals-section">
            <h2 className="meals-section-h2">All Meals</h2>
            <div className="meals-list">
                {meals.length === 0 ? (
                <p className="meals-section-p">No meals added yet.</p>
            ) : (
                meals.map((meal) => (
                    <div key={meal.id} className="meal-card">
                        <h3>{meal.title}</h3>
                        <p>{meal.description}</p>
                        <small>{meal.date}</small>
                        <Link to={`editmeal/${meal.id}`} className="edit-btn">
                            Edit
                        </Link>
                        <button className="delete-btn" onClick={() => handleDelete(meal.id)}>
                            Delete
                        </button>
                    </div>
                ))
            )}
            </div>
        </section>

        <Footer/>
    </>
    );
};