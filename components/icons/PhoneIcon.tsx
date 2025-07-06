
import React from 'react';

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.998-.58-1.35l-3.952-3.952a2.25 2.25 0 0 0-3.182 0l-1.172 1.172a.75.75 0 0 1-1.061 0l-6.18-6.18a.75.75 0 0 1 0-1.061l1.172-1.172a2.25 2.25 0 0 0 0-3.182L6.45 2.83A2.25 2.25 0 0 0 5.078 2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v.75Z" />
    </svg>
);

export default PhoneIcon;
