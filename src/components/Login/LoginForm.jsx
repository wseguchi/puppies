import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }
  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type='text'
          placeholder='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Login</button>
      </form>
      Login Form
      {/* Change in React.Router: does not need to add -- Link to='/login/...' -- (the whole path). */}
      <Link to='create'>Join</Link>
    </section>
  );
};

export default LoginForm;
