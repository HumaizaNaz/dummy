import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Humaiza Wellness</h2>
          <p>Your health, our priority.</p>
        </div>
        <div className={styles.links}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <ul>
            <li><a href="#" className={styles.facebook}>Facebook</a></li>
            <li><a href="#" className={styles.twitter}>Twitter</a></li>
            <li><a href="#" className={styles.instagram}>Instagram</a></li>
            <li><a href="#" className={styles.linkedin}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 Humaiza Wellness. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
