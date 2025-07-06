
import React from 'react';
import { Language } from '../types';
import Section from './Section';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';
import LinkIcon from './icons/LinkIcon';
import LinkedInIcon from './icons/LinkedInIcon';

interface RatingDotsProps {
    level: number;
}

const RatingDots: React.FC<RatingDotsProps> = ({ level }) => (
    <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
            <span
                key={i}
                className={`h-4 w-4 rounded-full mr-1 border-2 border-slate-300 ${
                    i < level ? 'bg-slate-100' : 'bg-transparent'
                }`}
            ></span>
        ))}
    </div>
);

interface LeftColumnProps {
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
}

const LeftColumn: React.FC<LeftColumnProps> = ({ contact, skills, languages, interests }) => {
    return (
        <aside className="bg-slate-800 text-white p-8 col-span-1">
            <div className="flex flex-col items-center mb-10">
                <img src="https://picsum.photos/seed/juanhernandez/200" alt="Juan Hernandez Olmos" className="rounded-full w-40 h-40 object-cover border-4 border-slate-500" />
            </div>

            <div className="space-y-4 text-slate-300 text-sm mb-10">
                <a href={`mailto:${contact.email}`} className="flex items-center hover:text-white transition-colors duration-300">
                    <EmailIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{contact.email}</span>
                </a>
                <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{contact.phone}</span>
                </div>
                <div className="flex items-center">
                    <LocationIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{contact.location}</span>
                </div>
                <a href={`https://${contact.trailblazer}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors duration-300">
                    <LinkIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{contact.trailblazer}</span>
                </a>
                <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors duration-300">
                    <LinkedInIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{contact.linkedin}</span>
                </a>
            </div>

            <Section title="Skills" color="text-white" borderColor="border-slate-500" />
            <div className="flex flex-wrap -m-1 mb-8">
                {skills.map(skill => (
                    <span key={skill} className="m-1 bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full">{skill}</span>
                ))}
            </div>

            <Section title="Languages" color="text-white" borderColor="border-slate-500" />
            <div className="space-y-3 mb-8">
                {languages.map(lang => (
                    <div key={lang.name}>
                        <p className="text-slate-300 mb-1">{lang.name}</p>
                        <RatingDots level={lang.level} />
                    </div>
                ))}
            </div>

            <Section title="Interests" color="text-white" borderColor="border-slate-500" />
            <div className="flex flex-wrap -m-1">
                {interests.map(interest => (
                    <span key={interest} className="m-1 bg-transparent text-slate-300 text-sm border border-slate-500 px-4 py-1.5 rounded-full">{interest}</span>
                ))}
            </div>
        </aside>
    );
};

export default LeftColumn;
