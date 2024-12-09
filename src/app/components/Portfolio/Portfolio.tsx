import Link from 'next/link';
import styles from './Portfolio.module.css';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <h6 className={styles.subtitle}>Portfolio</h6>
        <h6 className={styles.sectionTitle}>Check My Wonderful Works</h6>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.
        </p>

        <div className={styles.row}>
          {['folio-1', 'folio-2', 'folio-3', 'folio-4', 'folio-5', 'folio-6'].map((folio, index) => (
            <div key={index} className={styles.col}>
              <div className={styles.imgWrapper}>
              <Image
            src={`/assets/imgs/${folio}.jpg`}
            alt={`Project ${index + 1}`}
            width={500}  // Specify appropriate width
            height={300} // Specify appropriate height
            className="project-image"
          />
                <div className={styles.overlay}>
                  <div className={styles.overlayInfos}>
                    <h5>Project Title</h5>
                    <Link href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </Link>
                    <Link href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
