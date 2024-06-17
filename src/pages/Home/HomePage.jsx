import React from 'react';

function HomePage() {
  const linkText = 'building Web apps with ASP.NET Core';
  const linkUrl = 'https://docs.microsoft.com/aspnet/core';
  return (
    <main className="text-center">
      <h1 className="display-4">Proyecta</h1>
      <p>
        Learn about{' '}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </p>
    </main>
  );
}

export default HomePage;
