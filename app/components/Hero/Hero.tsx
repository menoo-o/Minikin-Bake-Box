import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.overlay}>
        <h1 className={styles.caption}>Indulge in the 
            <span  className={styles.highlight}> Sweetest Creations</span> </h1>
        <p className={styles.subCaption}>
          Our cakes are crafted with love and the finest ingredients to make every occasion special.
        </p>

        <button className={styles.orderButton}>Order a Cake</button> {/* Button placed here */}

      </div>

      <Image
        src="/hero2.png"
        alt="Delicious cake"
        layout="fill"
        objectFit="cover"
        priority
        className={styles.heroImage}
      />



    </section>
  );
}
