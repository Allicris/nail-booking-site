import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import signupPage from "../assets/images/signuppage.png";

const Signup = () => {
  const containerStyle = {
    fontFamily: "DM Sans, serif",
    color: "white",
    padding: "20px",
    paddingLeft: "175px",
    paddingRight: "175px",
    paddingBottom: "90px",
    textAlign: "center",
  };

  const submitBtn = {
    background: "#F133B9",
    color: "white",
    borderRadius: "25px",
    cursor: "pointer",
    margin: "30px",
    padding: "10px",
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={containerStyle}>
      <h3>
      <img 
        src={signupPage} 
        alt="sign up" 
        style={{maxWidth: "150px"}}
        />
      </h3>
      <div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Full Name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              style={submitBtn}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}

        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
};

export default Signup;
