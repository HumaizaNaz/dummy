import Image from 'next/image';
import styles from './About.module.css';
import Link from 'next/link'
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>About Me</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.bio}>
          <h2>Hello, I m Humaiza</h2>
          <p>
          I'm human, I'm not perfect .I'm a passionate web developer with experience in building
            beautiful and functional websites using modern technologies like
            React, Next.js, and TypeScript. I enjoy learning and exploring new
            technologies, and I am always looking for ways to improve my skills.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/profile.jpg"
            alt="Humaiza's Profile"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
      </section>

    
    </div>
  );
};

export default About;
