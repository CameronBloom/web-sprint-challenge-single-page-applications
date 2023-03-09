import imgPizza from "../images/Pizza.jpg"
import imgPizzaDog from "../images/PizzaDog.jpeg"

export default function Confirmation(props) {
  return (
    <>
      <div className="img-container">
        <img className="img" src={imgPizza} alt="good looking pizza"></img>
        <div className="img-text"><h3>Congrats! Pizza is on its way</h3></div>
      </div>
      <div className="enjoy">
        <div className="enjoy-text"><h6>Enjoy this Dog with Pizza</h6></div>
        <img className="enjoy-img" src={imgPizzaDog} alt="happy dog with pizza in mouth"/>
      </div>
    </>
  )
}