import React from 'react'
import Image from 'next/image';
import styles from './gallery.module.scss';

const Gallery = () => {
  return (
    <div className="container">
      <div className={styles.gallery}>
        <div className={styles.div1}>
          <Image
            src="/img/design-1.jpg"
            alt="Лого"
            width="390"
            height="450"
          />
          <Image
            src="/img/design-2.jpg"
            alt="Лого"
            width="390"
            height="450"
          />
        </div>

        <div className={styles.div3}>
          <div className="link">
            <Image
              src="/img/design-3.jpg"
              alt="Лого"
              width="390"
              height="700"
            />
            {/* <a className={styles.div3} href="#">
              Ванная
            </a> */}
          </div>
          
          <Image
            src="/img/design-4.jpg"
            alt="Лого"
            width="390"
            height="450"
          />
        </div>
        <div className={styles.div5}>
          <Image
            src="/img/design-5.jpg"
            alt="Лого"
            width="390"
            height="700"
          />
        </div>

    

      </div>

    </div>
  )
}

export default Gallery;