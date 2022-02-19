import React from 'react'
import Image from 'next/image';
import styles from './gallery.module.scss';

const Gallery = () => {
  return (
    <div className="container">
      <div className={styles.gallery}>

        <div className={styles.picture1}>
          <Image
            src="/img/design-1.jpg"
            alt="Дизайн"
            width="390"
            height="450"
          />
        </div>

        <div className={styles.picture2}>
          <Image
            src="/img/design-3.jpg"
            alt="Дизайн"
            width="390"
            height="700"
          />
          <a href="#">
            Ванная
          </a>
        </div>

        <div className={styles.picture3}>
          <Image
            src="/img/design-5.jpg"
            alt="Дизайн"
            width="390"
            height="700"
          />
        </div>

        <div className={styles.picture4}>
          <Image
            src="/img/design-2.jpg"
            alt="Дизайн"
            width="390"
            height="450"
          />
        </div>


        <div className={styles.picture5}>
          <Image
            src="/img/design-4.jpg"
            alt="Дизайн"
            width="390"
            height="450"
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery;