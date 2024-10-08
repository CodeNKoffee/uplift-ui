import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';

interface CommandProps {
  command: string;
}

export default function CommandPrompt({ command }: CommandProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(command);
  };

  return (
    <div className="bg-gray-800 rounded-lg px-8 text-white text-lg flex justify-between items-center gap-8">
      <pre className='py-4'>{command}</pre>
      <button onClick={handleCopy}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
}