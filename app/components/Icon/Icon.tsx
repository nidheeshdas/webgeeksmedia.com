import React from 'react';

export type IconName = 'arrow-right' | 'star' | 'compass' | 'search' | 'wordpress' | 'document' | 'link' | 'graph' | 'price-tag' | 'chat-bubbles' | 'puzzle-pieces' | 'lightning-bolt' | 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'pen' | 'rocket' | 'check' | 'whatsapp';

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const icons: Record<IconName, React.ReactNode> = {
    'arrow-right': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ),
    'star': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    'compass': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    'search': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    'wordpress': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5v-3.34l-1.84.62.8 2.72h-1.92l-.8-2.72-1.84-.62v3.34H3.5V8.5h3.34l.62 1.84-2.72.8v1.92l2.72-.8-.62-1.84H3.5v-1.5h3.34l.62 1.84-2.72.8v1.92l2.72-.8-.62-1.84H3.5V8.5h3.34l.62 1.84-2.72.8v1.92l2.72-.8-.62-1.84H3.5v-1.5h3.34l.62 1.84-2.72.8v1.92l2.72-.8L8.5 8.5h1.5v3.34l1.84-.62-.8-2.72h1.92l.8 2.72 1.84.62V8.5h1.5v7h-1.5v-3.34l-1.84.62.8 2.72h-1.92l-.8-2.72-1.84-.62v3.34h-1.5zm7.5 0h-1.5V8.5h1.5v7z" />
        </svg>
    ),
    'document': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'link': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    'pen': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
      </svg>
    ),
    'graph': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    'price-tag': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zm0 0l6.707 6.707a1 1 0 001.414-1.414L8.414 4.414A1 1 0 007 3z" />
      </svg>
    ),
    'chat-bubbles': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8zM7 4h6a2 2 0 012 2v2" />
      </svg>
    ),
    'puzzle-pieces': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    'lightning-bolt': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    'facebook': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    'twitter': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.7-.02-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.35 0-.69-.02-1.03-.06A12.02 12.02 0 0 0 8.29 20c7.55 0 11.68-6.25 11.68-11.68l-.01-.53c.8-.58 1.49-1.3 2.04-2.13z" />
      </svg>
    ),
    'linkedin': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-7 6.67h-2.5v7h2.5v-7zm-1.25-2.08a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34zM17.5 9.67h-2.3v1.52c0 .87-.02 2-.6 2s-2.1-.28-3.1-1.28v-2.24h-2.5v7h2.5v-3.5c0-.88.17-1.75 1.25-1.75s1.45.82 1.45 2v3.25h2.5v-4.58z" />
      </svg>
    ),
    'instagram': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.14 0-3.491.012-4.702.068-2.7.123-3.976 1.4-4.1 4.1-.056 1.21-.067 1.551-.067 4.665s.011 3.455.067 4.665c.123 2.7 1.4 3.976 4.1 4.1 1.21.056 1.561.067 4.702.067s3.491-.011 4.702-.067c2.7-.123 3.976-1.4 4.1-4.1.056-1.21.067-1.551.067-4.665s-.011-3.455-.067-4.665c-.123-2.7-1.4-3.976-4.1-4.1-1.21-.056-1.561-.067-4.702-.067zm0 3.604a4.433 4.433 0 1 0 0 8.866 4.433 4.433 0 0 0 0-8.866zm0 6.664a2.231 2.231 0 1 1 0-4.462 2.231 2.231 0 0 1 0 4.462zm4.602-7.332a1.063 1.063 0 1 0 0-2.126 1.063 1.063 0 0 0 0 2.126z" />
      </svg>
    ),
    'rocket': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    'check': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    'whatsapp': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.77 3.05 1.2 4.79 1.2 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.88 12.14c-.28.52-.92.84-1.28.87-.32.03-.66.04-1.02-.05-.4-.1-2.43-1.01-4.64-2.9-1.73-1.47-2.87-3.28-3.14-3.82-.27-.54-.04-1.1.2-1.44.2-.28.44-.45.64-.45.2 0 .39.01.56.01.17 0 .38.01.55.36.2.37.68 1.65.74 1.77.06.12.1.26.01.41-.09.15-.19.26-.33.41-.15.15-.29.33-.41.43-.12.1-.2.2-.08.39.14.21.64.89 1.28 1.48.85.81 1.63 1.17 1.86 1.28.23.11.36.09.49-.05.13-.14.55-.64.7-1.05.14-.4.28-.33.49-.22.21.11 1.36.64 1.59.76.23.12.38.18.43.28.05.1.03.56-.25 1.08z"/>
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;