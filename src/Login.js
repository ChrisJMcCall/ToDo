import React, { useState } from 'react';
import axios from 'axios';

const apiLocation = process.env.REACT_APP_API_LOCATION;
const apiPostToken = apiLocation+'auth/token';

async function loginUser(credentials, token) {
  let formdata = new FormData();
  formdata.append('userLogin', credentials.username);
  formdata.append('password', credentials.password);

  try {
    await axios.post(apiPostToken, formdata)
    .then(function(response) {
      token(response.data);
    })
  } catch(error) {

  }

 }

function Login(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    }, props.token);
  };

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="user" inputMode="email" onChange={e => setUserName(e.target.value)} />
      <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
      <input type="submit" value="Log in" />
    </form>
  );
}

export default Login;