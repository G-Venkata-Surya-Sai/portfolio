export default function Home() {
    return (
      <section className="home">
        <p className="prompt">$ whoami</p>
  
        <h1 className="name">G Venkata Surya Sai</h1>
  
        <p className="summary">
          Full Stack Developer with strong experience in building scalable web
          platforms, REST APIs, and async systems. Currently working at Providence
          Global Center and actively preparing for SDE-2 roles.
        </p>
  
        <div className="resume-buttons">
          <a href="/resume.pdf" target="_blank" className="btn">
            View Resume
          </a>
          <a href="/resume.pdf" download className="btn outline">
            Download Resume
          </a>
        </div>
      </section>
    );
  }
  