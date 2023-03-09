import imgPizza from "../images/Pizza.jpg"
import imgPizzaDog from "../images/PizzaDog.jpeg"

export default function Confirmation(props) {
  return (
    <>
      <div class="img-container">
        <img class="img" src={imgPizza} alt="good looking pizza"></img>
        <div class="img-text"><h3>Congrats! Pizza is on its way</h3></div>
      </div>
      <div class="enjoy">
        <div class="enjoy-text"><h5>Enjoy this Dog with Pizza</h5></div>
        <img class="enjoy-img" src={imgPizzaDog} alt="happy dog with pizza in mouth"/>
      </div>
    </>
  )
}