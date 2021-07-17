import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const initialState = {
    credentials: {
      username: '',
      password: '',
      // error: ''
    },
    error: ''
  }

  const [ loginForm, setLoginForm ] = useState(initialState);
  const { push } = useHistory();

  const error = loginForm.error;

  // const error = e => {
  //   this.setState({
  //     credentials: {
  //       ...state.credentials,
  //       error: e.target.value
  //     }
  //   })
  // };
  //replace with error state

  const handleChange = e => {
    setLoginForm({
      credentials: {
        ...loginForm.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  const loginSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', loginForm.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        console.log("login was successful!", res);
        // push("/protected");
      })
      .catch(err => console.log("Error encountered!", err))
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login</h2>
        <form onSubmit={loginSubmit}>
          <input 
            type="text"
            name="username"
            placeholder="username"
            id="username"
            value={error}
            onChange={handleChange}
          />{' '}
          <input 
            type="password"
            name="password"
            placeholder="password"
            id="password"
            value={error}
            onChange={handleChange}
          />{' '}
          <button id="submit">Submit</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"