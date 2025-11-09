import styles from './About.module.css';

interface AboutProps {
  summary: string[];
  highlights: string[];
}

export const About = ({ summary, highlights }: AboutProps): React.JSX.Element => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.summary}>
            {summary.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.highlights}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightText}>{highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
