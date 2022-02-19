import Image from 'next/image';
import React from 'react'
import styles from './goods.module.scss';

const Goods = () => {
  return (
    <div className="container">
      <h1>Товары</h1>
      
      <div className={styles.goods}>

        {/* 1 */}
        <div className={styles.good}>
          <div className={styles.promo}>- 50%</div>
          {/* Image */}
          <Image
            src="/img/phone.png"
            alt="Телефон"
            width="220"
            height="240"
          />

          {/* Title */}
          <h2 className={styles.title}>Hippychick Комбинезон Лесли</h2>

          {/* Description */}
          <p className={styles.desc}>Ноутбук Xiaomi RedmiBook II 14 Ruilong Edition (AMD Ryzen 7 4700U 2000 MHz / 1920x1080 / 16Gb / 512Gb SSD / AMD Radeon Vega 7 / Win10 Home) Испания/ серебряный
          </p>

          {/* Sum */}
          <div className={styles.sum}>
            <span className={styles["new-price"]}>10 620 ₽</span>
            <span className={styles.discount}>5 310 ₽ </span>
          </div>

          {/* Btn */}
          <a className={styles.btn} href="#">
            Подробнее
          </a>
        </div>
        
        {/* 2 */}
        <div className={styles.good}>
          {/* Image */}
          <Image
            src="/img/phone.png"
            alt="Телефон"
            width="220"
            height="240"
          />

          {/* Title */}
          <h2 className={styles.title}>Hippychick Комбинезон Лесли</h2>

          {/* Description */}
          <p className={styles.desc}>Ноутбук Xiaomi RedmiBook II 14 Ruilong Edition (AMD Ryzen 7 4700U 2000 MHz / 1920x1080 / 16Gb / 512Gb SSD / AMD Radeon Vega 7 / Win10 Home) Испания/ серебряный
          </p>

          {/* Sum */}
          <div className={styles.sum}>
            <span className={styles.amount}>10 620 ₽</span>
          </div>

          {/* Btn */}
          <a className={styles.btn} href="#">
            Подробнее
          </a>
        </div>

        {/* 3 */}
        <div className={styles.good}>
          <div className={styles.promo}>- 50%</div>
          {/* Image */}
          <Image
            src="/img/phone-rotate.png"
            alt="Телефон"
            width="220"
            height="240"
          />

          {/* Title */}
          <h2 className={styles.title}>Hippychick Комбинезон Лесли</h2>

          {/* Description */}
          <p className={styles.desc}>Ноутбук Xiaomi RedmiBook II 14 Ruilong Edition (AMD Ryzen 7 4700U 2000 MHz / 1920x1080 / 16Gb / 512Gb SSD / AMD Radeon Vega 7 / Win10 Home) Испания/ серебряный
          </p>

          {/* Sum */}
          <div className={styles.sum}>
            <span className={styles["new-price"]}>10 620 ₽</span>
            <span className={styles.discount}>5 310 ₽ </span>
          </div>

          {/* Btn */}
          <a className={styles.btn} href="#">
            Подробнее
          </a>
        </div>

        {/* 4 */}
        <div className={styles.good}>
          <div className={styles.promo}>- 50%</div>
          {/* Image */}
          <Image
            src="/img/phone.png"
            alt="Телефон"
            width="220"
            height="240"
          />

          {/* Title */}
          <h2 className={styles.title}>Hippychick Комбинезон Лесли</h2>

          {/* Description */}
          <p className={styles.desc}>Ноутбук Xiaomi RedmiBook II 14 Ruilong Edition (AMD Ryzen 7 4700U 2000 MHz / 1920x1080 / 16Gb / 512Gb SSD / AMD Radeon Vega 7 / Win10 Home) Испания/ серебряный
          </p>

          {/* Sum */}
          <div className={styles.sum}>
            <span className={styles["new-price"]}>10 620 ₽</span>
            <span className={styles.discount}>5 310 ₽ </span>
          </div>

          {/* Btn */}
          <a className={styles.btn} href="#">
            Подробнее
          </a>
        </div>

        {/* 5 */}
        <div className={styles.good}>
          <div className={styles.promo}>- 50%</div>
          {/* Image */}
          <Image
            src="/img/phone.png"
            alt="Телефон"
            width="220"
            height="240"
          />

          {/* Title */}
          <h2 className={styles.title}>Hippychick Комбинезон Лесли</h2>

          {/* Description */}
          <p className={styles.desc}>Ноутбук Xiaomi RedmiBook II 14 Ruilong Edition (AMD Ryzen 7 4700U 2000 MHz / 1920x1080 / 16Gb / 512Gb SSD / AMD Radeon Vega 7 / Win10 Home) Испания/ серебряный
          </p>

          {/* Sum */}
          <div className={styles.sum}>
            <span className={styles["new-price"]}>10 620 ₽</span>
            <span className={styles.discount}>5 310 ₽ </span>
          </div>

          {/* Btn */}
          <a className={styles.btn} href="#">
            Подробнее
          </a>
        </div>

        {/* 6 */}
        <div className={styles.good}>
          <div className={styles.promo}>- 50%</div>
          <div className={styles.tag}>HIT</div>
          {/* Image */}
          <Image
            src="/img/phone.png"
            alt="Телефон"
            width="220"
            height="240"
          />

          {/* Title */}
          <h2 className={styles.title}>Hippychick Комбинезон Лесли</h2>

          {/* Description */}
          <p className={styles.desc}>Ноутбук Xiaomi RedmiBook II 14 Ruilong Edition (AMD Ryzen 7 4700U 2000 MHz / 1920x1080 / 16Gb / 512Gb SSD / AMD Radeon Vega 7 / Win10 Home) Испания/ серебряный
          </p>

          {/* Sum */}
          <div className={styles.sum}>
            <span className={styles["new-price"]}>10 620 ₽</span>
            <span className={styles.discount}>5 310 ₽ </span>
          </div>

          {/* Btn */}
          <a className={styles.btn} href="#">
            Подробнее
          </a>
        </div>

        {/* 7 */}
        <div className={styles.good}>
          <div className={styles.promo}>- 50%</div>
          <div className={styles.new}>New</div>
          {/* Image */}
          <Image
            src="/img/phone.png"
            alt="Телефон"
            width="220"
            height="240"
          />

          {/* Title */}
          <h2 className={styles.title}>Hippychick Комбинезон Лесли</h2>

          {/* Description */}
          <p className={styles.desc}>Ноутбук Xiaomi RedmiBook II 14 Ruilong Edition (AMD Ryzen 7 4700U 2000 MHz / 1920x1080 / 16Gb / 512Gb SSD / AMD Radeon Vega 7 / Win10 Home) Испания/ серебряный
          </p>

          {/* Sum */}
          <div className={styles.sum}>
            <span className={styles["new-price"]}>10 620 ₽</span>
            <span className={styles.discount}>5 310 ₽ </span>
          </div>

          {/* Btn */}
          <a className={styles.btn} href="#">
            Подробнее
          </a>
        </div>

       {/* 8 */}
       <div className={styles.good}>
        <div className={styles.promo}>- 50%</div>
          {/* Image */}
          <Image
            src="/img/phone.png"
            alt="Телефон"
            width="220"
            height="240"
          />

          {/* Title */}
          <h2 className={styles.title}>Hippychick Комбинезон Лесли</h2>

          {/* Description */}
          <p className={styles.desc}>Ноутбук Xiaomi RedmiBook II 14 Ruilong Edition (AMD Ryzen 7 4700U 2000 MHz / 1920x1080 / 16Gb / 512Gb SSD / AMD Radeon Vega 7 / Win10 Home) Испания/ серебряный
          </p>

          {/* Sum */}
          <div className={styles.sum}>
            <span className={styles["new-price"]}>10 620 ₽</span>
            <span className={styles.discount}>5 310 ₽ </span>
          </div>

          {/* Btn */}
          <a className={styles.btn} href="#">
            Подробнее
          </a>
        </div>
      </div>
    </div>
  )
}

export default Goods;