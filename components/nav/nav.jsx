import Image from 'next/image';
import React from 'react'
import styles from './nav.module.scss';

const Nav = () => {
  return (
    <div className="container">
      <div className={styles.wrap}>
        <img src="/img/logo.svg" width="175" height="30" alt="Лого" />

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <a href="#">Все товары</a>
            </li>
            <li>
              <a href="#">Текстиль для дома</a>
            </li>
            <li>
              <a href="#">Хранение и порядок</a>
            </li>
            <li>
              <a href="#">Кухня</a>
            </li>
            <li>
              <a href="#">Ванная</a>
            </li>
            <li className={styles.promo}>
              <a href="#">Акции</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav;