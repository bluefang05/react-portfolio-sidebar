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
      case 'learning':
        return <LearningPage />;
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

function LearningPage() {
  return (
    <div>
      <h2>Learning Journey</h2>
      <p>Here are the technologies and skills I'm currently learning:</p>
      <ul>
        <li><strong>React</strong> - Building modern user interfaces</li>
        <li><strong>JavaScript ES6+</strong> - Advanced JavaScript concepts</li>
        <li><strong>CSS & Responsive Design</strong> - Creating beautiful layouts</li>
        <li><strong>Node.js</strong> - Backend development</li>
        <li><strong>Git & Version Control</strong> - Collaborative development</li>
      </ul>
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