import React from 'react'
import Image from 'next/image';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.img}>
          <Image
            src="/img/hero.png"
            alt="Лого"
            layout="fill"
            objectFit="cover"
          />

        </div>

        <div className={styles.caption}>
          <h1>Home One.<br/>The best one</h1>
          <p>Товары для обустройства дома</p>
          <p>Просто, понято, технологично</p>
          <a href="#">
            В каталог
          </a>
        </div>

      </div>

    </div>
  )
}

export default Hero;