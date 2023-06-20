import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  // Runs getUser() to check if the person is already authenticated -- gets token from localStorage
  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      // const api = TOKEN_POST({ -- JS Destructuring
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      // Using the api.jsx file: TOKEN_POST above
      const response = await fetch(url, options);
      const json = await response.json();
      // Store into local storage
      window.localStorage.setItem('token', json.token);
      // function getUser using USER_GET from api.jsx
      getUser(json.token);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='Username' type='text' name='username' {...username} />
        <Input label='Password' type='password' name='password' {...password} />
        <Button>Login</Button>
      </form>

      {/* Change in React.Router: does not need to add -- Link to='/login/...' -- (the whole path). */}
      <Link to='create'>Join</Link>
    </section>
  );
};

export default LoginForm;
