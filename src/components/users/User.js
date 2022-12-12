import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    booktitle: "",
    author: "",
    price: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    //read the data
    const res = await axios.get(`https://621394c689fad53b1ff9c4b9.mockapi.io/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.booktitle}</li>
        <li className="list-group-item">user name: {user.author}</li>
        <li className="list-group-item">email: {user.price}</li>
      </ul>
    </div>
  );
};

export default User;
