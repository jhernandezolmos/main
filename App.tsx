
import React from 'react';
import { CVData } from './types';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

const cvData: CVData = {
  name: 'Juan Hernandez Olmos',
  title: 'Business Process Manager - Salesforce',
  summary: 'Experienced Business Processes Manager and Salesforce Administrator with a strong track record in automating workflows and improving CRM system capabilities. Expert in collaborating with stakeholders and development teams to deliver scalable solutions that increase productivity and drive business value. Passionate about introducing new ideas and technologies to continuously enhance processes and user experience.',
  contact: {
    email: 'j.hernandezolmos@gmail.com',
    phone: '(+34) 618498326',
    location: 'Herzogenaurach, Germany',
    trailblazer: 'www.salesforce.com/trailblazer/juanhern',
    linkedin: 'linkedin.com/in/juanhernandezolmos'
  },
  skills: ['SALESFORCE', 'AGILE-JIRA', 'SOQL', 'AGENTFORCE', 'AI', 'Process Automation', 'Communication & Stakeholder Collaboration', 'n8n', 'Make'],
  languages: [
    { name: 'English', level: 5 },
    { name: 'Spanish', level: 5 },
    { name: 'German', level: 2 }
  ],
  interests: ['SPORTS', 'TECH', 'TRAVEL'],
  experience: [
    {
      role: 'Business Process Manager - Salesforce',
      company: 'Ebm-papst',
      period: '10/2023 - Present',
      location: 'Mulfingen, Germany',
      description: 'ebm-papst is a global leader in energy-efficient fans and motors, serving industries like HVAC, automotive, and electronics.',
      tasks: [
        'Act as the key interface between stakeholders and development team, ensuring clear communication of needs and priorities.',
        'Lead projects integrating Salesforce with third-party tools to enhance system capabilities.',
        'Head lead generation and management processes to optimize sales pipeline efficiency.',
        'Prioritize product backlog to maximize business value and manage project budgets.',
        'Utilize Salesforce reports and dashboards to support data-driven decisions.',
        'Implement proof of concepts (POCs) for Agentforce and Copilot Al tools to enhance CRM functionalities.'
      ]
    },
    {
      role: 'Salesforce Administrator',
      company: 'Nilfisk',
      period: '05/2022 - 10/2023',
      location: 'Budapest, Hungary',
      description: 'Danish Manufacturer of high end cleaning machines',
      tasks: [
        'Being charge of the development of new business requirements for Salesforce platform, on Service, Sales, Pardot, ServiceMax.',
        'Working on an Agile methodology, developing flows, process, LWC, HTML, reporting, data cleaning.',
        'Knowledge on SOQL, content document Creator S - Docs, CPQ, prospecting tools, data backup tools.'
      ]
    },
    {
        role: 'Salesforce Consultant',
        company: 'Capgemini',
        period: '09/2020 - 05/2022',
        location: 'Madrid, Spain',
        description: 'Two years experience working as Salesforce Consultant for multinacional companies on Salesforce Field Service and E-commerce',
        tasks: [
            'SCRUM Master Course - April 2022',
            'DEX 450 - Course ISDI - January 2021'
        ]
    }
  ],
  certificates: [
    { name: 'Salesforce Certified Platform Developer I', date: '02/2021' },
    { name: 'Salesforce Certified Administrator', date: '01/2022' }
  ],
  education: [
    {
      degree: 'Engineering of Technology of Telecommunications',
      university: 'UNIVERSIDAD CARLOS III DE MADRID',
      year: 2014,
      location: 'Leganés, Madrid, Spain',
      courses: [
        'Exchange Program- UNIVERSIDAD DEL PAIS VASCO 01/2019 - 07/2019 Bilbao, Bizcaia, Spain'
      ]
    }
  ]
};


const App: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12 font-sans">
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-lg overflow-hidden">
        <LeftColumn 
          contact={cvData.contact}
          skills={cvData.skills}
          languages={cvData.languages}
          interests={cvData.interests}
        />
        <RightColumn 
          name={cvData.name}
          title={cvData.title}
          summary={cvData.summary}
          experience={cvData.experience}
          certificates={cvData.certificates}
          education={cvData.education}
        />
      </main>
    </div>
  );
};

export default App;
