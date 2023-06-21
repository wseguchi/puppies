import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import { UserContext } from '../UserContext';
import Button from './Forms/Button';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Home'>
          <Dogs />
        </Link>

        {/* Check is data exists and show the right Link */}
        {data ? (
          <Link className={styles.login} to='/account'>
            {data.nome}
            <button onClick={userLogout}>Logout</button>
          </Link>
        ) : (
          <Link className={styles.login} to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
