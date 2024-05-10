import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <div
        className="bg-gradient-to-r from-purple-600 to-indigo-900 text-white py-5"
        style={{ backgroundColor: '#4B5563' }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome User!</h1>
          </div>
          <div>
            <a
              href="https://github.com/CSsangria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}