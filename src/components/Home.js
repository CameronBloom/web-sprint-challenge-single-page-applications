import { Routes, Route, Link } from "react-router-dom";
import imgPizza from "../images/Pizza.jpg"

export default function Home(props) {
  return (
    <>
      <div className="img-container">
        <img className="img" src={imgPizza} alt="good looking pizza"></img>
        <div className="img-text"><h3>Your favorite food, delivered while coding</h3></div>
        <Link id="order-pizza" to="/">Pizza?</Link><span />
      </div>
    </>
  )
}