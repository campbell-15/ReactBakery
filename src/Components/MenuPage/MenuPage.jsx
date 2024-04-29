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
            tagLine: ["Fancy a sweet treat? We don't blame you..."],
            imageURL: "https://www.halfbakedharvest.com/wp-content/uploads/2018/08/Better-Together-Chocolate-Vanilla-Birthday-Cake-1.jpg"
        },
        {
            id: 4,
            title: "Banana Bread",
            description: "Most delicious banana bread that's perfect for anyones palette",
            tagLine: ["Yummiest Banana Bread in South Africa. It's fact"],
            imageURL: "https://www.simplyrecipes.com/thmb/tR-5eHAZ3lgNR6Yvu3yxdHMNpk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg"
        },
        {
            id: 5,
            title: "Carrot Cake",
            description: "Indulge is some fantastic carrot cake at a buy a slice and get one slice free!",
            tagLine: ["Quick and easy meal for the family"],
            imageURL: "https://www.spoonforkbacon.com/wp-content/uploads/2021/03/carrot_cake_recipe_card.jpg"
        },
        {
            id: 6,
            title: "Donuts",
            description: "Dive into your favorite lunch time treat with our hundreds of donut flavours to chose from.",
            tagLine: ["Give it a whirl, you might just be surprised by how amazing life feels after eating one."],
            imageURL: "https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg"
        },
        {
            id: 7,
            title: "Pepper & Steak Pie",
            description: "Indulge in a savory delight with our Pepper & Steak Pie – A harmonious blend of tender steak and flavorful peppers baked to perfection in a flaky crust.",
            ingredients: ["steak", "bell peppers", "onion", "flour", "beef broth", "puff pastry"],
            tagLine: ["Try something new! You won't regret it..."],
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuCXkwS6WKizF3JRIPyJ3wkKG_VTNj9tHeenCLp7hlg&s"
        },
        {
            id: 8,
            title: "Chocolate Brownie",
            description: "Indulge in a savory delight with our chocolate brownie, designed to fill your satisfaction",
            tagLine: ["Try something new! You won't regret it...We promise you that."],
            imageURL: "https://cafedelites.com/wp-content/uploads/2016/08/Fudgy-Cocoa-Brownies-44-1.jpg"
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
    <div>
        <Navbar/>    
        <div className="recipes">
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
    </div>    
    )
}

export default MenuPage
