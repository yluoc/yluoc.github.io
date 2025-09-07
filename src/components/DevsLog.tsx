import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface LogEntry {
  id: number;
  title: string;
  description: string;
  // type: 'feature' | 'bugfix' | 'update' | 'refactor';
  page?: string; // Optional page to navigate to
  externalUrl?: string; // Optional external URL
}

const DevsLog: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const logEntries: LogEntry[] = [
    {
      id: 1,
      title: 'Dyson Sphere Program Editable 3D Planet Model',
      description: 'A editable 3D planet model for DSP player, you can click the planet to get the shortest point between all points on the planet and you can select a specific section of the planet model to get building options.',
      // type: 'feature',
      page: '/projects/nextjs-migration'
    }
  ];

  const getTypeIcon = (type: string) => {
    return ''; // No icons for minimal design
  };

  const handleEntryClick = (entry: LogEntry) => {
    if (entry.externalUrl) {
      window.open(entry.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (entry.page) {
      router.push(entry.page);
    }
  };

  return (
    <div className="devs-log-container">
      <div 
        className="devs-log-header" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="devs-log-title">
          Project Dev Logs
        </span>
      </div>
      
      {isExpanded && (
        <div className="devs-log-content">
           <div className="devs-log-list">
             {logEntries.map((entry) => (
               <div 
                 key={entry.id} 
                 className={`devs-log-entry ${entry.page || entry.externalUrl ? 'clickable' : ''}`}
                 onClick={() => handleEntryClick(entry)}
               >
                 <div className="devs-log-entry-header">
                   
                 </div>
                 <h4 className="devs-log-entry-title">
                   {entry.title}
                   {(entry.page || entry.externalUrl) && <span className="devs-log-link-icon">🔗</span>}
                 </h4>
                 <p className="devs-log-entry-description">{entry.description}</p>
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default DevsLog;
