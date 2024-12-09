import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <header className={styles.header}>
        <h6 className={styles.subtitle}>Skills</h6>
        <h6 className={styles.sectionTitle}>Why Choose Me</h6>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.
        </p>
      </header>

      <section className={styles.skillsContent}>
        <div className={styles.skillRow}>
          <div className={styles.skillItem}>
            <h6>Photoshop</h6>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '89%' }}>
                <span>89%</span>
              </div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <h6>Web Design</h6>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '83%' }}>
                <span>83%</span>
              </div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <h6>App Design</h6>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '95%' }}>
                <span>95%</span>
              </div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <h6>SEO</h6>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '90%' }}>
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
