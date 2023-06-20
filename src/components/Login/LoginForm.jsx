import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  //   const [username, setUsername] = React.useState('');
  //   const [password, setPassword] = React.useState('');

  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //   body: JSON.stringify({ username, password }),
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
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
