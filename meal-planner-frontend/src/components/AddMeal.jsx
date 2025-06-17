import { useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom"

const AddMeal = () => {
    const navigate = useNavigate();

    const [meal, setMeal] = useState({
        title: "",
        description: "",
        date: "" ,
    });

    const handleChange = (e) => {
        setMeal({ ...meal, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://meal-planner-backend-production-abea.up.railway.app/meals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(meal),
            });

            if (response.ok) {
                alert("Meal added successfully!");
                setMeal({title: "", description: "", date: ""});

                navigate("/"); //Redirects to Home
            } else {
                alert("Failed to add meal");
            }
        } catch (error) {
            console.error("Error:", error);;
            alert("something went wrong");
        }
    };

    return (
        <>
        <Navbar/>

        <div className="form-container">
            <h2>Add a New Meal</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="title"
                    placeholder="Meal Title"
                    value={meal.title}
                    onChange={handleChange}
                    required
                 />
                 <textarea name="description" 
                        placeholder="Description"
                        value={meal.description}
                        onChange={handleChange}
                        required
                 />
                 <input type="date" 
                        name="date"
                        value={meal.date}
                        onChange={handleChange}
                        required
                 />

                 <button type="submit">Add Meal</button>
            </form>
        </div>

        <Footer/>
        </>
    );
}

export default AddMeal;