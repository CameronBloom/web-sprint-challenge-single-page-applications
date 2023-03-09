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
          <label for="name">
            <p className="bold">Enter Your Name</p>
            <p>Required</p>
          </label>
          <input 
            type="text"
            id="name-input"
            name="name"
            // value={props.form["firstName"]}
            // onChange={props.handleChange}
          />


          <label for="size">
            <p className="bold">Choice of Size</p>
            <p>Required</p>
          </label>
          <label for="sauce">
            <p className="bold">Choice of Sauce</p>
            <p>Required</p>
          </label>
          <div id="radio-container">
            <div className="radio-row">
              <input type="radio" id="sauce1" name="sauce" value="Original Red" />
              <label for="sauce1" className="sauce-label">Original Red</label>
            </div>
            <div className="radio-row">
              <input type="radio" id="sauce2" name="sauce" value="Garlic Ranch" />
              <label for="sauce2">Garlic Ranch</label>
            </div>
            <div className="radio-row">
              <input type="radio" id="sauce3" name="sauce" value="BBQ Sauce" />
              <label for="sauce3">BBQ Sauce</label>
            </div>
            <div className="radio-row">
              <input type="radio" id="sauce4" name="sauce" value="Spinach Alfredo" />
              <label for="sauce4">Spinach Alfredo</label>
            </div>
          </div>



          <label for="toppings">
            <p className="bold">Add Toppings</p>
            <p>Choose up to 10.</p>
          </label>
          <label for="substitute">
            <p className="bold">Choice of Substitute</p>
            <p>Choose up to 1.</p>
          </label>
          <label for="special-text">
            <p className="bold">Special Instructions</p>
          </label>
          <div id="special-container">
            <textarea 
              type="text"
              id="special-text"
              name="special-text"
              // value={props.form["firstName"]}
              // onChange={props.handleChange}
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
        </form>
      </div>

    </>
  )
}