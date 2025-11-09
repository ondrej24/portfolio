import { Skill } from '../types';
import styles from './Skills.module.css';

interface SkillsProps {
  skills: Skill[];
}

export const Skills = ({ skills }: SkillsProps): React.JSX.Element => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className={styles.heading}>Skills & Technologies</h2>
        <div className={styles.categories}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryTitle}>{skill.category}</h3>
              <ul className={styles.skillList}>
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.skillItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
