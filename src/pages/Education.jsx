// Education history, from resume
const educationHistory = [
  {
    credential: "Software Engineering Technology | Artificial Intelligence",
    school: "Centennial College, Scarborough, ON",
    dates: "January 2026 – Present",
    points: [
      "Studying AI systems design, programming logic, and database concepts in Python, Java, C# and Unix/Linux",
      "Building full-stack web applications, covering both front-end and back-end development",
      "Coursework in database concepts, including designing, querying, and managing relational databases",
      "Applying AI and software design principles through hands-on academic projects",
    ],
  },
  {
    credential: "Bachelor of Health Studies",
    school: "York University, Toronto, ON",
    dates: "September 2021 – October 2025",
    points: [
      "Analyzed how political and institutional power structures shape health policy decisions and outcomes",
      "Learned principles of managing health care organizations, including resource allocation and planning",
      "Used statistical methods to analyze data sets and interpret trends",
      "Applied economic principles including cost-benefit analysis and market forces",
    ],
  },
];

// Education page: shows each school as a card with bullet points
function Education() {
  return (
    <section className="page">
      <h1>Education</h1>
      {educationHistory.map((entry) => (
        <article className="card wide" key={entry.credential}>
          <h3>{entry.credential}</h3>
          <p className="meta">{entry.school} | {entry.dates}</p>
          <ul>
            {entry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Education;