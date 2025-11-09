export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Content {
  hero: {
    name: string;
    role: string;
    tagline: string;
    avatarUrl?: string;
  };
  about: {
    summary: string[];
    highlights: string[];
  };
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  contact: {
    email: string;
    social: SocialLink[];
  };
}
