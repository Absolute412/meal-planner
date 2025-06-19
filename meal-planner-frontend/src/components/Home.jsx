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

  const groupedMeals = meals.reduce((acc, meal) => {
    const date = meal.date;
    if (!acc[date]) {
        acc[date] = [];
    }
    acc[date].push(meal);
    return acc;
  }, {});

  const formatDate = (rawDate => {
    const options = {year: "numeric", month: "long", day: "numeric"};
    return new Date(rawDate).toLocaleDateString(undefined, options);
  })

    return (
        <>
        <Navbar/>
        <Hero/>

        <section className="meals-section">
            <h2 className="meals-section-h2">All Meals</h2>

            {meals.length === 0 ? (
                <p className="meals-section-p">No meals added yet.</p>
            ) : (
                Object.keys(groupedMeals)
                .sort((a, b) => new Date(a) - new Date(b))
                .map((date) => (
                    <div key={date} className="meal-date-group">
                        <h3 className="meal-date">{formatDate(date)}</h3>
                        <div className="meals-list">
                            {groupedMeals[date].map((meal) => (
                                <div key={meal.id} className="meal-card">
                                    <h4>{meal.title}</h4>
                                    <p>{meal.description}</p>
                                    <div className="meal-card-footer">
                                        <small>{meal.date}</small>
                                    <div className="meal-buttons">
                                        <Link to={`editmeal/${meal.id}`} className="edit-btn">
                                            Edit
                                        </Link>
                                    <button className="delete-btn" onClick={() => handleDelete(meal.id)}>
                                        Delete
                                    </button>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </section>

        <Footer/>
    </>
    );
};