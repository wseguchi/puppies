import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>
        <span>Social Dogs</span>
        <br /> A project by{' '}
        <a href='https://www.origamid.com/' target='_blank' rel='noreferrer'>
          Origamid
        </a>
        <br /> Coded by{' '}
        <a href='https://github.com/wseguchi/' target='_blank' rel='noreferrer'>
          Wildson Seguchi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
