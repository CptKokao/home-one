import Image from 'next/image';
import React from 'react'
import styles from './adv.module.scss';

const Adv = () => {
  return (
    <div className="container">
      <ul className={styles.adv}>

        <li>
          <img src="/img/home.svg" width="20" height="20" alt="Иконка дома" />
          <p>Создан для<br/><strong>современного дома</strong></p>
        </li>

        <li>
          <img src="/img/chart.svg" width="20" height="20" alt="Иконка общения" />
          <p><strong>2000+</strong><br/>положительных отзывов</p>
        </li>

        <li>
          <img src="/img/like.svg" width="20" height="20" alt="Иконка пальца вверх" />
          <p><strong>Лучшее</strong> соотношение<br/>цена/качество</p>
        </li>

        <li>
          <img src="/img/planet.svg" width="20" height="20" alt="Иконка планеты" />
          <p>Следуем тренду<br/><strong>Save our Planet</strong></p>
        </li>
  
      </ul>

    </div>
  )
}

export default Adv;