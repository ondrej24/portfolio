import { Experience as ExperienceType } from '../types';
import styles from './Experience.module.css';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience = ({ experience }: ExperienceProps): React.JSX.Element => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.card}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.company}>{exp.company}</div>
                  <div className={styles.period}>{exp.period}</div>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className={styles.achievement}>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
