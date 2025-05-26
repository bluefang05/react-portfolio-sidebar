import React from 'react';
import './MainContent.css'; // optional styling

function MainContent({ page }) {
  const renderContent = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <main className="main-content">
      {renderContent()}
    </main>
  );
}

// --- Page Components ---

function HomePage() {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <p>This is the homepage. Select something from the sidebar!</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h2>About Me</h2>
      <p>I'm a web developer passionate about building modern UI/UX experiences.</p>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div>
      <h2>My Projects</h2>
      <p>Here are some of my recent work samples and personal projects.</p>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <h2>Contact</h2>
      <p>You can reach me at email@example.com or connect via LinkedIn.</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found.</p>
    </div>
  );
}

export default MainContent;