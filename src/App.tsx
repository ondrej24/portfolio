import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { content } from "./constants/content";
import "./styles/global.css";

const App = (): React.JSX.Element => {
  return (
    <>
      <Navigation />
      <main>
        <Hero
          name={content.hero.name}
          role={content.hero.role}
          tagline={content.hero.tagline}
          avatarUrl={content.hero.avatarUrl}
        />
        <About
          summary={content.about.summary}
          highlights={content.about.highlights}
        />
        <Skills skills={content.skills} />
        <Experience experience={content.experience} />
        <Education education={content.education} />
        <Contact
          email={content.contact.email}
          social={content.contact.social}
        />
      </main>
    </>
  );
};

export default App;
