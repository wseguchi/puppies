import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      // using Context: userLogin
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Username' type='text' name='username' {...username} />
        <Input label='Password' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Login</Button>
        )}

        <Error error={error} />
      </form>

      {/* Change in React.Router: does not need to add -- Link to='/login/...' -- (the whole path). */}

      <Link className={styles.lost} to='lost'>
        Lost your password?
      </Link>
      <div className={styles.join}>
        <h2 className={styles.subtitle}>Join</h2>
        <p>Don&apos;t have an account yet?</p>
        <Link className={stylesBtn.button} to='create'>
          Create your account
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
