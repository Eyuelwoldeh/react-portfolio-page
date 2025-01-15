import React from 'react';
import '../CV.css';

function CV() {
  return (
    <div className="cv-container">
      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-item">
          <h3>St. Olaf College</h3>
          <p>Northfield, MN | Expected May 2027</p>
          <p>
            <strong>Bachelor of Arts:</strong> Computer Science & Quantitative Economics
            <br />
            <strong>GPA:</strong> 3.81 / 4.00 | Dean's List | Presidential Scholar
            <br />
            <strong>Activities:</strong> Algorithms Club, Chess Club, East African Student Association (EASA)
            <br />
            <strong>Relevant Coursework:</strong> Machine Learning in Python, Data Structures & Algorithms, Software Design, Hardware Design
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Technical Skills</h2>
        <div className="cv-item">
          <p>
            <strong>Programming Languages:</strong> Python, Java, SQL (MySQL, Postgres), C#, C++, JavaScript, MATLAB
          </p>
          <p>
            <strong>Tools & Frameworks:</strong> AWS, MongoDB, Cassandra, Azure, ASP.NET Core, React.js, PySpark, Node.js
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Professional Experience</h2>
        <div className="cv-item">
          <h3>Jmol - Molecular Visualization Software</h3>
          <p><em>Software Development & UX Design Intern</em></p>
          <ul>
            <li>Redesigned UI/UX for 2.4M+ monthly users using Java, JSmol, and WebGL.</li>
            <li>Streamlined documentation processes, reducing data entry times by 30%.</li>
            <li>Processed server-side data for 70,000+ daily requests to prioritize development.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>LIWOT Engineering</h3>
          <p><em>Full-Stack Software Engineering Intern</em> | Aug. 2024 - Dec. 2024</p>
          <ul>
            <li>Developed a modular inventory system with C# and PostgreSQL.</li>
            <li>Designed a React.js dashboard, reducing logging times by 75%.</li>
            <li>Enhanced deployment cycles by 20% with CI/CD pipeline improvements.</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h2>Projects</h2>
        <div className="cv-item">
          <h3>AI-Driven Fraud Detection Engine</h3>
          <p>St. Olaf College | Nov. 2024 - Present</p>
          <ul>
            <li>Deployed fraud detection pipeline using Kafka, PySpark, and AWS with 91.3% precision.</li>
            <li>Reduced false positives by 26% with an ML model built in scikit-learn.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>Full-Stack Sentiment Analysis Pipeline</h3>
          <p>St. Olaf College | Oct. 2024 - Dec. 2024</p>
          <ul>
            <li>Implemented Reddit sentiment analysis pipeline using Kafka and PySpark.</li>
            <li>Built React and D3.js dashboard for trend visualization.</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h2>Leadership & Co-Curricular</h2>
        <div className="cv-item">
          <h3>The Street Smarts</h3>
          <p><em>Junior Board Member</em> | Nov. 2024 - Present</p>
          <ul>
            <li>Supported financial literacy programs for 500+ students nationwide.</li>
            <li>Collaborated with senior board members on diversity-focused initiatives.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>St. Olaf Consulting Group</h3>
          <p><em>Strategy Consulting Analyst</em> | Sept. 2024 - Present</p>
          <ul>
            <li>Assisted in divestiture efforts for a legacy business.</li>
            <li>Developed centralized SQL database and delivered key reports.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CV;