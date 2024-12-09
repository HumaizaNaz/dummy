import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { FaFacebook, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';


const Header = () => {
  return (
    <header className={styles.header} id="home">
      <div className={styles.container}>
        {/* Info Section */}
        <div className={styles.infos}>
          <h6 className={styles.subtitle}>Hello, I am</h6>
          <h6 className={styles.title}>Humaiza Naz</h6>
          <p>Frontend Developer</p>

          {/* Buttons */}
          <div className={`${styles.buttons} pt-3`}>
            <button className={`${styles.button} btn-primary rounded`}>
              HIRE ME
            </button>
            <button className={`${styles.button} btn-dark rounded`}>
              DOWNLOAD CV
            </button>
          </div>

          {/* Social Links */}
          <div className={styles.socials}>
  <Link className={`${styles.socialItem} facebook`} href="#" aria-label="Facebook">
    <FaFacebook size={30} />
  </Link>
  <Link className={`${styles.socialItem} google`} href="#" aria-label="Google">
    <FaGoogle size={30} />
  </Link>
  <Link className={`${styles.socialItem} github`} href="#" aria-label="GitHub">
    <FaGithub size={30} />
  </Link>
  <Link className={`${styles.socialItem} twitter`} href="#" aria-label="Twitter">
    <FaTwitter size={30} />
  </Link>
</div>
        </div>

        {/* Image Holder */}
        <div className={styles.imgHolder}>
          <Image
            src="/my.png"
            alt="Humaiza Naz illustration"
            width={200}
            height={500}
          />
        </div>
      </div>

      {/* Header Widget */}
      <div className={styles.widget}>
        <div className={styles.widgetItem}>
          <h2>124</h2>
          <p>Happy Clients</p>
        </div>
        <div className={styles.widgetItem}>
          <h2>456</h2>
          <p>Project Completed</p>
        </div>
        <div className={styles.widgetItem}>
          <h2>789</h2>
          <p>Awards Won</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
