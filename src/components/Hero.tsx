import { useState } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  avatarUrl?: string;
}

export const Hero = ({
  name,
  role,
  tagline,
  avatarUrl,
}: HeroProps): React.JSX.Element => {
  const [imageError, setImageError] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleAvatarClick = (): void => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 600);
  };

  const scrollToContact = (): void => {
    const element = document.getElementById("contact");
    if (element) {
      const navHeight = 60; // Approximate navigation height + padding
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {avatarUrl !== undefined && avatarUrl !== "" && !imageError && (
          <div className={styles.avatarContainer}>
            <button
              className={styles.avatarButton}
              onClick={handleAvatarClick}
              aria-label="Click for a fun animation"
            >
              <img
                src={avatarUrl}
                alt={name}
                className={`${styles.avatar} ${isSpinning ? styles.spinning : ""}`}
                onError={() => {
                  setImageError(true);
                }}
              />
            </button>
          </div>
        )}
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.role}>{role}</p>
        <p className={styles.tagline}>{tagline}</p>
        <div className={styles.buttons}>
          <button
            onClick={scrollToContact}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};
