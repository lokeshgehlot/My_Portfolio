import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Support Ticketing System</h3>
        <p>
          A full-stack MERN application where users can register, log in, and raise support tickets. Admin can view and respond to tickets.
        </p>
        <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB</p>
        <a href="https://github.com/lokeshgehlot/Support_Ticketing_System" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Optional: Add live demo link if deployed */}
      </div>

      <div className="project-card">
        <h3>Movie Explorer</h3>
        <p>
          Movie Explorer is a React web app that lets users browse popular movies, search by title, and add favorites. It uses the TMDB API for real-time movie data and features a clean UI built with React hooks and context for smooth state management and a seamless user experience.
        </p>
        <p><strong>Tech Stack:</strong> React, API Integration, CSS</p>
        <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Projects;
