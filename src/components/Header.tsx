import React from 'react';

export default function Header() {
  return (
    <header className="w-full py-4 bg-green-700">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl">Pixel Art</h1>

        <nav className="text-lg">
          <a
            href="https://github.com/gabrielh-silvestre"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gabrielh-silvestre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </header>
  );
}
