import React, { useState } from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './MenuPage.css'

const MenuPage = () => {
    // setRecipes is not used yet
    const [recipes] = useState([
        {
            id: 1,
            title: "Chocolate Croissant",
            description: "Savor the incredible frech origin Chocolate Croissant straight out of the oven.",
            tagLine: ["Best Croissant on the menu hands down."],
            imageURL: "https://recipes.net/wp-content/uploads/2023/07/chocolate-almond-croissants_cb945b2cb622c48b38ae8fea40223f0f.jpeg"
        },
        {
            id: 2,
            title: "Sausage Roll",
            description: "Deliciously savory suasage roll designed to full your belly - a perfect treat.",
            tagLine: ["Exactly what you need for lunch on a Thursday"],
            imageURL: "https://images.themodernproper.com/billowy-turkey/production/posts/Sausage-Rolls_8.jpg?w=960&h=720&q=82&fm=jpg&fit=crop&crop=focalpoint&fp-x=0.4966&fp-y=0.5974&dm=1679173107&s=f7591a29b84b26df8617d383bffb38d9"
        },
        {
            id: 3,
            title: "Chocolate Cake",
            description: "Indulge in decadence with our rich and moist chocolate cake, a timeless treat for any occasion.",
            ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Butter", "Milk"],
            tagLine: ["Fancy a sweet treat? We don't blame you..."],
            imageURL: "https://www.halfbakedharvest.com/wp-content/uploads/2018/08/Better-Together-Chocolate-Vanilla-Birthday-Cake-1.jpg"
        },
        {
            id: 4,
            title: "T-Bone Steak",
            description: "T-Bone steak: Juicy, flavorful beef cut showcasing both tenderloin and strip loin.",
            ingredients: ["T-Bone steak", "Salt", "Pepper", "Olive oil"],
            tagLine: ["Yummiest T-Bone Steak in South Africa"],
            imageURL: "https://images.immediate.co.uk/production/volatile/sites/2/2018/10/Pan-Fried-T-Bone-Steak-284bfa5.jpg"
        },
        {
            id: 5,
            title: "Lasagna",
            description: "Savory layers of pasta, rich tomato sauce, creamy cheese, and seasoned ground meat come together in this classic Italian comfort dish.",
            ingredients: ["lasagna noodles", "ground beef", "tomato sauce", "ricotta cheese", "mozzarella cheese"],
            tagLine: ["Quick and easy meal for the family"],
            imageURL: "https://assets.epicurious.com/photos/6508a14155b19af4200459c7/4:6/w_1932,h_2898,c_limit/Sausage-Cheese-Basil-Lasanga_RECIPE.jpg"
        },
        {
            id: 6,
            title: "Pepper & Steak Pie",
            description: "Indulge in a savory delight with our Pepper & Steak Pie – A harmonious blend of tender steak and flavorful peppers baked to perfection in a flaky crust.",
            ingredients: ["steak", "bell peppers", "onion", "flour", "beef broth", "puff pastry"],
            tagLine: ["Try something new! You won't regret it..."],
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuCXkwS6WKizF3JRIPyJ3wkKG_VTNj9tHeenCLp7hlg&s"
        }
    ]);

    const handleRecipeDetails = (recipeId) => {
        // Navigate to the RecipeDetails page for the specific recipe
        window.location.href = `/recipe/${recipeId}`;
    };

    const [searchQuery, setSearchQuery] = useState("");

    // Function to handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter recipes based on search query
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        
        <div className="recipes">
        <Navbar/>
        <form className="form-container">
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for a recipe..." />
        <button type="button">
            <FontAwesomeIcon icon={faSearch} />
        </button>
        </form>
        <ul className="cards">
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id} className="card">
                        <img src={recipe.imageURL} className="card__image" alt={recipe.title} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">{recipe.title}</h3>
                                    <span className="card__tagline">{recipe.tagLine}</span>
                                    <button type="button" className="ingredients" onClick={() => handleRecipeDetails(recipe.id)}>Order Now</button>
                                </div>
                            </div>
                            <p className="card__description">{recipe.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default MenuPage
