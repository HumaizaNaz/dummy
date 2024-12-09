// testimonial.tsx

import Image from 'next/image';
import styles from './Testmonial.module.css';

const Testimonial = () => {
  return (
    <section id="testimonial" className={styles.section}>
      <div className={styles.container}>
        <h6 className={styles.subtitle}>Testimonial</h6>
        <h6 className={styles.title}>What People Say About Me</h6>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.
          <br />
          Rerum commodi corrupti, temporibus non quam.
        </p>

        {/* Carousel */}
        <div id="carouselExampleIndicators" className={`carousel slide ${styles.carousel}`}>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            {/* First Testimonial */}
            <div className="carousel-item active">
              <div className={`card ${styles.testimonialCard}`}>
                <div className="card-body">
                  <Image
                    src="/assets/imgs/avatar-1.jpg"
                    alt="Emma Re, Graphic Designer"
                    width={80}
                    height={80}
                    className={styles.avatar}
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum
                    voluptates in enim vel amet?
                  </p>
                  <h1 className={styles.name}>Emma Re</h1>
                  <h2 className={styles.role}>Graphic Designer</h2>
                </div>
              </div>
            </div>
            {/* Second Testimonial */}
            <div className="carousel-item">
              <div className={`card ${styles.testimonialCard}`}>
                <div className="card-body">
                  <Image
                    src="/assets/imgs/avatar-2.jpg"
                    alt="James Bert, Web Designer"
                    width={80}
                    height={80}
                    className={styles.avatar}
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum
                    voluptates in enim vel amet?
                  </p>
                  <h1 className={styles.name}>James Bert</h1>
                  <h2 className={styles.role}>Web Designer</h2>
                </div>
              </div>
            </div>
            {/* Third Testimonial */}
            <div className="carousel-item">
              <div className={`card ${styles.testimonialCard}`}>
                <div className="card-body">
                  <Image
                    src="/assets/imgs/avatar-3.jpg"
                    alt="Michael Abra, Web Developer"
                    width={80}
                    height={80}
                    className={styles.avatar}
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum
                    voluptates in enim vel amet?
                  </p>
                  <h1 className={styles.name}>Michael Abra</h1>
                  <h2 className={styles.role}>Web Developer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
