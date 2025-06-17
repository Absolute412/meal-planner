import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom"

const EditMeal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meal, setMeal] = useState({
    title: "",
    description: "",
    date: ""
  });

  useEffect(() => {
    fetch(`https://meal-planner-backend-production-abea.up.railway.app/meals/${id}`)
      .then(res => res.json())
      .then(data => {
        const formattedDate = data.date ? data.date.split("T")[0] : "";
        setMeal({ ...data, date: formattedDate });
    })

      .catch(err => console.error("Error fetching meal:", err));
  }, [id]);

  const handleChange = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/meals/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(meal)
      });

      if (response.ok) {
        alert("Meal updated successfully!");
        navigate("/");
      } else {
        alert("Failed to update meal.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }

    if (!meal.title && !meal.description && !meal.date) {
        return <p>Loading meal...</p>;
    }

  };

  return (
    <>
    <Navbar/>

    <div className="edit-form-container">
      <h2>Edit Meal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Meal Title"
          value={meal.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={meal.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={meal.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Meal</button>
      </form>
    </div>

    <Footer/>
    </>
  );
};

export default EditMeal;