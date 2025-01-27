import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.js"
import Help from "./components/Help";
import Form from "./components/Form.js";
import * as yup from 'yup';
import { useState, useEffect } from "react";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required('name must be at least 2 characters').min(2, 'name must be at least 2 characters'),
  size: yup.string().required('must select a pizza size'),
  sauce: yup.string().required('must select a pizza sauce'),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean(),
  special: yup.string()
})

const App = () => {
  
  // states
  const [form, setForm] = useState({ name:"", size:"per", sauce:"Original Red", topping1: false, topping2: false, topping3: false, topping4: false, subs:false, special:"" })
  // const [order, setOrder] = useState({ quantity: 1 })
  const [disabled, setDisabled] = useState(true);
  // const [substitute, setSubstitute] = useState(false);
  const [errors, setErrors] = useState({ name: "" })


  const handleErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: '' })
      })
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors[0] })
      })
  }

  const handleChange = (event) => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    handleErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse});
    console.log(form);
  }

  const handleSubmit = event => {
    alert( "Handler for .submit() called." );
    event.preventDefault();
    console.log("submit triggered");
    axios.post("https://reqres.in/api/orders", form)
      .then(res => {
        console.log("success =>", res.data);
      })
      .catch(err => console.error(err))
  }

  // triggers every time the "form" updates
  useEffect(() => {
    schema.isValid(form)
      .then(valid => setDisabled(!valid))
      .catch(err => console.error(err))
  }, [form])

  return (
    <>
      <div className="row top-bar">
        <div className="title"><h6>Bloomtech Eats</h6></div>
        <nav className="nav-bar">
          <Link id="btn-home" to="/">Home</Link>
          <Link id="btn-help" to="/help">Help</Link>
          {/* <Link to="/confirm">Confirmation</Link> */}
        </nav>
        
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pizza" element={<Form form={form} errors={errors} disabled={disabled} handleChange={handleChange} handleErrors={handleErrors} handleSubmit={handleSubmit} />} />
        {/* <Route path="/confirm" element={<Confirmation />} /> */}
      </Routes>
    </>
  );
};
export default App;
