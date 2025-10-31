import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Dockerized React App</h1>
        <h2>Multi-Stage Build Demo</h2>
        <div className="container">
          <div className="card">
            <h3>🐳 Docker</h3>
            <p>This app is running inside a Docker container</p>
          </div>
          <div className="card">
            <h3>⚛️ React</h3>
            <p>Built with React 18 and modern JavaScript</p>
          </div>
          <div className="card">
            <h3>🚀 Nginx</h3>
            <p>Served efficiently with Nginx web server</p>
          </div>
        </div>
        <div className="info">
          <p>🏗️ Built using multi-stage Docker build</p>
          <p>✨ Optimized for production deployment</p>
          <p>💻 Created by Ranjeet Sahu</p>
        </div>
      </header>
    </div>
  );
}

export default App;
