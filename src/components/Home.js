import { Link } from "react-router-dom";
import imgPizza from "../images/Pizza.jpg"
// import { Form } from "react-router-dom";
// import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

export default function Home(props) {

  const restaurants = [
    { imageUrl: "https://source.unsplash.com/random/300x200/?img=1", placeName: "McDonald's", placePrice: "$", descriptions: ["American", "Fast Food", "Burgers"], wait: "20-30 Min", fee: "$5.99"},
    { imageUrl: "https://source.unsplash.com/random/300x200/?img=1", placeName: "Sweetgreen", placePrice: "$", descriptions: ["Healthy", "Salad"], wait: "30-45 Min", fee: "$4.99"},
    { imageUrl: "https://source.unsplash.com/random/300x200/?img=1", placeName: "Starbucks", placePrice: "$", descriptions: ["Cafe", "Coffee & Tea", "Breakfast & Brunch "], wait: "10-20 Min", fee: "$3.99"}
  
  ]

  return (
    <>
      <div className="img-container">
        <img className="img" src={imgPizza} alt="good looking pizza"></img>
        <div className="img-text"><h3>Your favorite food, delivered while coding</h3></div>
        <Link id="order-pizza" to="/pizza">Pizza?</Link>
      </div>
      <section id="rest-container">
        <div id="rest-container-title">Food Delivery in Gotham City</div>
        <div className="rest-row">
        { restaurants.map((restaurant, idx) => {
          console.log(restaurant)
          return (
            <RestaurantCard key={idx} restaurant={restaurant} />
          )
        })}
        </div>

      </section>

    </>
  )
}