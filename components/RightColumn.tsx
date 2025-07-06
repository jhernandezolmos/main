import React from 'react';
import { WorkExperience, Certificate, Education } from '../types';
import Section from './Section';
import TableauPortfolio from './TableauPortfolio';

interface RightColumnProps {
    name: string;
    title: string;
    summary: string;
    experience: WorkExperience[];
    certificates: Certificate[];
    education: Education[];
}

const RightColumn: React.FC<RightColumnProps> = ({ name, title, summary, experience, certificates, education }) => {
    return (
        <div className="bg-white p-8 md:p-12 col-span-2">
            <header className="mb-12">
                <h1 className="text-5xl font-bold text-slate-800">{name}</h1>
                <h2 className="text-2xl font-light text-slate-600 mt-2 pb-4 border-b-2">{title}</h2>
                <p className="text-slate-600 mt-6 text-base leading-relaxed">{summary}</p>
            </header>

            <section className="mb-10">
                <Section title="Work Experience" />
                <div className="space-y-8">
                    {experience.map((job, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-xl font-bold text-slate-800">{job.role}</h3>
                                <p className="text-sm text-slate-500 font-medium">{job.location}</p>
                            </div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h4 className="text-lg font-semibold text-slate-600">{job.company}</h4>
                                <p className="text-sm text-slate-500">{job.period}</p>
                            </div>
                            <p className="text-sm text-slate-500 italic mb-3">{job.description}</p>
                            <ul className="list-none space-y-2">
                                {job.tasks.map((task, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-slate-500 mr-3 mt-1">&#9642;</span>
                                        <span className="text-slate-700 text-sm">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <Section title="Portfolio" />
                <TableauPortfolio />
            </section>

            <section className="mb-10">
                <Section title="Certificates" />
                 <div className="space-y-2">
                    {certificates.map((cert, index) => (
                        <div key={index} className="flex justify-between items-baseline">
                            <p className="text-slate-700 font-medium">{cert.name}</p>
                            <p className="text-sm text-slate-500">{cert.date}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <Section title="Education" />
                {education.map((edu, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                            <p className="text-sm text-slate-500 font-medium">{edu.year}</p>
                        </div>
                        <div className="flex justify-between items-baseline mb-2">
                             <h4 className="text-lg font-semibold text-slate-600">{edu.university}</h4>
                             <p className="text-sm text-slate-500">{edu.location}</p>
                        </div>
                        {edu.courses && (
                             <div>
                                <h5 className="text-sm font-semibold text-slate-600 mt-2">Courses</h5>
                                <ul className="list-none space-y-1 mt-1">
                                {edu.courses.map((course, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-slate-500 mr-3 mt-1">&#9642;</span>
                                        <span className="text-slate-700 text-sm">{course}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default RightColumn;