// List of projects: edit this array to add, remove, or update projects
const projectList = [
  {
    title: "Car Rental System",
    status: "Completed",
    text: "Created a car rental system using Oracle SQL Developer to organize and retrive rental data",
    link: "/CarRentalDatabase.pdf",
  },
  {
    title: "End to End Medical Chatbot",
    status: "In progress",
    text: "Currently building a medical chatbot using Python",
  },
  {
    title: "Healthcare website",
    status: "In progress",
    text: "Currently building a full-stack responsive appointment booking website with MERN stack (MongoDB, Express, React, Node.js) for a healthcare clinic",
  },
];

// Projects page: shows each project as a card
function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <div className="grid">
        {projectList.map((project) => (
          <article className="card" key={project.title}>
            <h3>{project.title}</h3>
            <span className="tag">{project.status}</span>
            <p>{project.text}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                View slide deck
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;