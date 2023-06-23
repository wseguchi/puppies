import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/social-dogs/account/post':
        setTitle('Add Photo');
        break;
      case '/social-dogs/account/stats':
        setTitle('User Stats');
        break;
      default:
        setTitle('My Photos');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
