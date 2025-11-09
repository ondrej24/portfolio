import { Education as EducationType } from "../types";
import styles from "./Education.module.css";

interface EducationProps {
  education: EducationType[];
}

export const Education = ({ education }: EducationProps): React.JSX.Element => {
  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.card}>
                <div className={styles.header}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <div className={styles.period}>{edu.period}</div>
                </div>
                <div className={styles.institution}>{edu.institution}</div>
                {edu.details !== undefined && edu.details !== "" && (
                  <p className={styles.details}>{edu.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
