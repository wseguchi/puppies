import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate('/social-dogs/login');
  }
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to='/social-dogs/account' end>
          <MinhasFotos />
          {mobile && 'My Photos'}
        </NavLink>
        <NavLink to='/social-dogs/account/stats'>
          <Estatisticas />
          {mobile && 'Stats'}
        </NavLink>
        <NavLink to='/social-dogs/account/post'>
          <AdicionarFoto />
          {mobile && 'Add Photo'}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Logout'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
