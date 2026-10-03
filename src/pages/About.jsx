// About page: photo, name, short bio and a link to the resume
function About() {
  return (
    <section className="page split">
      <img className="portrait" src="/profile.jpg" alt="Photo of Your Name" />
      <div>
        <h1>About me</h1>
        <p>
          I'm a Software Engineering Technology student specializing in
          Artificial Intelligence, with a background in health studies. I
          enjoy building full-stack applications, designing databases, and
          applying statistics to real data.
        </p>
        <p>
          I work with Python, Java, C#, Oracle SQL and the MERN stack
          (MongoDB, Express, React, Node.js).
        </p>
        <a className="btn" href="/Resume.pdf" target="_blank" rel="noreferrer">
          View my resume (PDF)
        </a>
      </div>
    </section>
  );
}

export default About;