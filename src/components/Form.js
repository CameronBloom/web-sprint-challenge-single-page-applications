import imgPizza from "../images/Pizza.jpg"

export default function Form(props) {

  /**
   * sample pizza state
   * - name:
   * - size: dropdown
   * - sauce: radio
   * - toppings: multiple checkboxes
   * - substitute: binary toggle
   * - special instructions: long text
   */

  /**
   * sample order state
   * - quantity
   * - total cost
   */
  return (
    <>
      <div id="pizza-container">
        <div id="pizza-header"><h6>Build Your Own Pizza</h6></div>
        <img id="pizza-img" src={imgPizza} alt="good looking pizza" />
        <div id="pizza-desc"><h6>Build Your Own Pizza</h6></div>
        <form id="pizza-form">
          <label htmlFor="name">
            <p className="bold">Enter Your Name</p>
            <div className="error"><p>Required...</p>&nbsp;<p>{props.errors.name}</p></div>
          </label>
          <input 
            type="text"
            id="name-input"
            name="name"
            value={props.form["name"]}
            onChange={props.handleChange}
          />
          <label htmlFor="size">
            <p className="bold">Choice of Size</p>
            <p>Required</p>
          </label>
          <select name="size" id="size-dropdown" onChange={props.handleChange} value={props.form["size"]}>
            <option value="per">Personal - 10"</option>
            <option value="sm">Small - 12"</option>
            <option value="md">Medium - 14"</option>
            <option value="lg">Large - 16"</option>
            <option value="xlg">Extra Large - 18"</option>
          </select>
          <label htmlFor="sauce">
            <p className="bold">Choice of Sauce</p>
            <p>Required</p>
          </label>
          <div id="radio-container" onChange={props.handleChange} value={props.form["sauce"]}>
            <div className="radio-row">
              <input type="radio" id="sauce1" name="sauce" value="Original Red" />
              <label htmlFor="sauce1" className="sauce-label">Original Red</label>
            </div>
            <div className="radio-row">
              <input type="radio" id="sauce2" name="sauce" value="Garlic Ranch" />
              <label htmlFor="sauce2">Garlic Ranch</label>
            </div>
            <div className="radio-row">
              <input type="radio" id="sauce3" name="sauce" value="BBQ Sauce" />
              <label htmlFor="sauce3">BBQ Sauce</label>
            </div>
            <div className="radio-row">
              <input type="radio" id="sauce4" name="sauce" value="Spinach Alfredo" />
              <label htmlFor="sauce4">Spinach Alfredo</label>
            </div>
          </div>

          <label htmlFor="toppings">
            <p className="bold">Add Toppings</p>
            <p>Choose up to 10.</p>
          </label>
          <div id="checkbox-container">
            <div id="checkbox-left">
              <div className="checkbox-row">
                <input type="checkbox" id="topping1" name="topping1" value="Pepperoni" />
                <label htmlFor="topping1">Pepperoni</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping2" name="topping2" value="Sausage" />
                <label htmlFor="topping2">Sausage</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping3" name="topping3" value="Canadian Bacon" />
                <label htmlFor="topping3">Canadian Bacon</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping4" name="topping4" value="Spicy Italian Sausage" />
                <label htmlFor="topping4">Spicy Italian Sausage</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping5" name="topping5" value="Grilled Chickens" />
                <label htmlFor="topping5">Grilled Chickens</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping6" name="topping6" value="Onions" />
                <label htmlFor="topping6">Onions</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping7" name="topping7" value="Green Pepper" />
                <label htmlFor="topping7">Green Pepper</label>
              </div>
            </div>
            <div id="checkbox-right">
              <div className="checkbox-row">
                <input type="checkbox" id="topping8" name="topping8" value="Diced Tomato" />
                <label htmlFor="topping8">Diced Tomato</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping9" name="topping9" value="Diced Tomato" />
                <label htmlFor="topping9">Black Olives</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping10" name="topping10" value="Roasted Garlic" />
                <label htmlFor="topping10">Roasted Garlic</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping11" name="topping11" value="Artichoke Hearts" />
                <label htmlFor="topping11">Artichoke Hearts</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping12" name="topping12" value="Three Cheese" />
                <label htmlFor="topping12">Three Cheese</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping13" name="topping13" value="Pineapple" />
                <label htmlFor="topping13">Pineapple</label>
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="topping14" name="topping14" value="Extra Cheese" />
                <label htmlFor="topping14">Extra Cheese</label>
              </div>
            </div>
          </div>

          <label htmlFor="substitute">
            <p className="bold">Choice of Substitute</p>
            <p>Choose up to 1.</p>
          </label>
          <label htmlFor="special-text">
            <p className="bold">Special Instructions</p>
          </label>
          <div id="special-container">
            <textarea 
              type="text"
              id="special-text"
              name="special"
              value={props.form["special"]}
              onChange={props.handleChange}
            />
          </div>
 
          {/* <input 
              type="text"
              id="name-input"
              name="name-input"
              // value={props.form["name-input"]}
              // onChange={props.handleChange}
            />
          <label>Name&nbsp;
            <input 
              type="text"
              id="name-input"
              name="name-input"
              // value={props.form["name-input"]}
              // onChange={props.handleChange}
            />
          </label> */}
          {/* <div id="pizza-total">
            <div id="pizza-counter">1</div>
            <div id="pizza-submit">Add to Order</div>
          </div> */}
          <button disabled={props.disabled}>Submit</button>
        </form>
      </div>

    </>
  )
}