
import React from 'react';

interface SectionProps {
    title: string;
    color?: string;
    borderColor?: string;
}

const Section: React.FC<SectionProps> = ({ title, color = 'text-slate-700', borderColor = 'border-slate-300' }) => {
    return (
        <div className="mb-4">
            <h3 className={`text-lg font-bold uppercase tracking-wider ${color}`}>{title}</h3>
            <div className={`w-16 h-0.5 mt-1 ${borderColor.replace('border-', 'bg-')}`}></div>
        </div>
    );
};

export default Section;
