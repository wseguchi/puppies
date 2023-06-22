import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to='/account' end>
        <MinhasFotos />
        {mobile && 'My Photos'}
      </NavLink>
      <NavLink to='/account/stats'>
        <Estatisticas />
        {mobile && 'Stats'}
      </NavLink>
      <NavLink to='/account/post'>
        <AdicionarFoto />
        {mobile && 'Add Photo'}
      </NavLink>
      <button onClick={handleLogout}>
        <Sair />
        {mobile && 'Logout'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
