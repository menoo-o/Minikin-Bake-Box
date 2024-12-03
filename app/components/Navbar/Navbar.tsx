// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">      
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={125} 
              height={115} 
            />
          
        </Link>
      </div>
      <ul className={styles.navLinks}>

        <li>
          <Link href="/" className={styles.navItem}>
            Home
          </Link>
        </li>

        <li>
        <Link href="/cakes" className={styles.navItem}>
            Cakes
        </Link>
        </li>


        <li>
        <Link href="/sweettreats" className={styles.navItem}>
            Sweet Treats
        </Link>
        </li>


        <li>
        <Link href="/contact" className={styles.navItem}>
            Contact
        </Link>
        </li>

        <li>
        <Link href="/about" className={styles.navItem}>
            About Us
        </Link>
        </li>

        
      </ul>
    </nav>
  );
};

export default Navbar;
