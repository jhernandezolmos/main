
export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tasks: string[];
}

export interface Language {
  name: string;
  level: number; // out of 5
}

export interface Certificate {
  name: string;
  date: string;
}

export interface Education {
  degree: string;
  university: string;
  year: number;
  location: string;
  courses?: string[];
}

export interface CVData {
    name: string;
    title: string;
    summary: string;
    contact: {
        email: string;
        phone: string;
        location: string;
        trailblazer: string;
        linkedin: string;
    };
    skills: string[];
    languages: Language[];
    interests: string[];
    experience: WorkExperience[];
    certificates: Certificate[];
    education: Education[];
}
