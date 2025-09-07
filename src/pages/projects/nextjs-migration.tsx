import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface ProjectEntry {
  id: number;
  date: string;
  title: string;
  details: string;
}

const NextJSMigration: React.FC = () => {
  const projectEntries: ProjectEntry[] = [
    {
      id: 0,
      date: '2025-09-01',
      title: 'DSP deep learning model Devs Logs: Beginning Idea',
      details: `It has been 400 hrs since I started to play DSP, even though there are blueprints and some onlice calculators, I still feel hard when planning the layout on a new planet of new continent. 
      So I decided to build a tool to help DSP players to enjoy the game more.`
    },
    {
      id: 1,
      date: '2025-09-06',
      title: 'DSP deep learning model Devs Logs: training process',
      details: `Successfully preprocess the training dataset: 2d captured frames from 3d models. The deep learning still need to optimize and I need more 3d model to train the model`
    }
  ];


  return (
    <>
      <Head>
        <title>Next.js Migration Project - Yicheng Luo</title>
        <meta name="description" content="Details about the Next.js migration project" />
      </Head>
      
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '40px 20px',
        backgroundColor: '#ffffff',
        minHeight: '100vh'
      }}>
        <Link href="/" style={{ 
          color: '#3498db', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '500',
          marginBottom: '20px',
          display: 'inline-block'
        }}>
          ← Back to Home
        </Link>
        
        {projectEntries.map((entry) => (
          <div key={entry.id} style={{
            border: '2px solid #000000',
            borderRadius: '8px',
            padding: '30px',
            marginBottom: '20px',
            backgroundColor: '#ffffff'
          }}>
            {/* Date */}
            <div style={{
              fontSize: '0.9rem',
              color: '#666666',
              marginBottom: '8px',
              fontWeight: '400'
            }}>
              {entry.date}
            </div>

            {/* Title */}
            <h1 style={{
              color: '#000000',
              fontSize: '2rem',
              marginBottom: '30px',
              fontWeight: '600',
              lineHeight: '1.2'
            }}>
              {entry.title}
            </h1>

            {/* Details */}
            <div className="project-content" style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#333333'
            }}>
              <ReactMarkdown>{entry.details}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NextJSMigration;
