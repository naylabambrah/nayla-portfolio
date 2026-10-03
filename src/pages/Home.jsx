import { Link } from 'react-router-dom';

// Home page: welcome message, mission statement and links to other pages
function Home() {
  return (
    <section className="hero">
      <h1>Hi, I'm Nayla Bambrah. I build AI tools for healthcare.</h1>
      <p className="mission">
        My mission is to combine my health studies background with AI and
        software engineering to build diagnostic tools that catch disease
        earlier. For example, machine learning models that can flag cancer risk
        years before symptoms appear, assistive technology for surgery like robotic arms, and chatbots that can help patients navigate the healthcare system.
      </p>
      <div className="actions">
        <Link className="btn" to="/about">About me || </Link>
        <Link className="btn btn-outline" to="/projects"> See my projects</Link>
      </div>
    </section>
  );
}

export default Home;