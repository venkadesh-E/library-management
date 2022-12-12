import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {Formik} from 'formik';

class AddUser extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  initialValues= {
    booktitle:"",
    author:"",
    price:""
  }

  validate = (value) => {
    var error = {};
    if(value.booktitle === '') error.booktitle = 'booktitle is required'
    if(value.author === '') error.author = 'author name is required'
    if(value.price === '') error.price = 'price is required'
    return error;
  }

  handleSubmit = (value) => {
    axios.post("https://621394c689fad53b1ff9c4b9.mockapi.io/users");
    this.props.history.push("/");
  }
render(){
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Book</h2>
        {/* formik validation in forms */}
        <Formik
       initialValues={this.initialValues}
       validate={(value) => this.validate(value)}
       onSubmit={(value) => this.handleSubmit(value)}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
        
         /* and other goodies */
       }) => (
        <form onSubmit = {handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter the book title"
            name="booktitle"
            value = {values.booktitle}
            onChange = {handleChange}
            onBlur = {handleBlur}
          />
          <span style={{color:'red'}}>
            {touched.booktitle && errors.booktitle}
          </span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter author name"
            name="author"
            value={values.author}
            onChange = {handleChange}
            onBlur = {handleBlur}
          />
          <span style={{color:'red'}}>
            {touched.author && errors.author}
          </span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter the price"
            name="price"
            value = {values.price}
            onChange = {handleChange}
            onBlur = {handleBlur}
          />
          <span style={{color:'red'}}>
            {touched.price && errors.price}
          </span>
        </div>
        <button className="btn btn-primary btn-block">Add </button>
      </form>
       )}
     </Formik>  
      </div>
    </div>
  );
}};

export default AddUser;
