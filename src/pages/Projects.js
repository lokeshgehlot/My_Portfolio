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
        <h3>Weather App</h3>
        <p>
          A simple React app that fetches live weather data using a public API and displays temperature, humidity, and forecast by city.
        </p>
        <p><strong>Tech Stack:</strong> React, API Integration, CSS</p>
        <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Projects;
