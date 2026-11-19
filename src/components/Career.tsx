import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&amp;</span>
          <br /> education
        </h2>
        <h3 className="career-subtitle">Professional experience</h3>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HR Intern — OJT</h4>
                <h5>Tata Motors Commercial Vehicles · Pune</h5>
              </div>
              <h3>Apr 2026 – Present</h3>
            </div>
            <ul className="career-highlights">
              <li>
                Support HR Connect, a monthly cross-functional visit framework
                for 20 departments running June 2026–January 2028. The format
                includes 60-minute HOD discussions, pre-reads, action tracking,
                monthly updates, and six-month follow-up reviews.
              </li>
              <li>
                Conducted a learning needs assessment with SCM DGMs and L5
                stakeholders and am developing five NAPS induction modules:
                buyer behavior, factory and product familiarization, warehouse
                handling, safety, and the Tata Code of Conduct.
              </li>
              <li>
                Coordinate approximately 2–3 internal and external training
                sessions each week since May 2026, managing schedules,
                communications, records, attendance, logistics, and
                pre-approved budgets under mentor supervision. Proposed an
                eight-topic HR Adda calendar (Advanced Excel, People
                Analytics, Generative AI, prompt engineering, workflow
                automation, feedback intelligence, manager effectiveness, and
                Responsible AI) and a separate 20-topic safety calendar.
              </li>
              <li>
                Support LXP adoption by communicating five prescribed learning
                themes and pathway-completion requirements, following up with
                learners, identifying issues, and recommending solutions.
                Analyzed Culture Workshop surveys (approximately 30–60
                responses per department), designed three Goodwill Cards, and
                am researching a Trainee Recognition Framework.
              </li>
              <li>
                Coordinate an intern-led study to improve the Internal Job
                Posting process across SuccessFactors and TurboHire, exploring
                practical, human-centered AI-supported improvements.
              </li>
              <li>
                Manage lifecycle activities for 150+ interns in a centralized
                Excel/OneDrive tracker and developed four L6 job descriptions:
                Manufacturing/TCF, Scrap Yard, Health &amp; Safety, and CPED.
              </li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HR Assistant (I/O Psychology)</h4>
                <h5>Calida Rehab · Pune</h5>
              </div>
              <h3>Aug – Nov 2024</h3>
            </div>
            <p>
              Designed and delivered orientation and training support,
              facilitated feedback discussions and engagement initiatives, and
              coordinated recruitment logistics in Pune.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>I/O Psychology Intern</h4>
                <h5>Tata Motors · Pune</h5>
              </div>
              <h3>Feb – Apr 2024</h3>
            </div>
            <p>
              Designed the Comprehensive Intern Performance Assessment Tool
              (CIPAT), rebuilt NEEM/NAPS feedback forms, and contributed to
              competency mapping and an employee satisfaction study, from
              questionnaire design through analysis and reporting.
            </p>
          </div>
        </div>

        <div className="education-section">
          <h3 className="career-subtitle">Education &amp; certifications</h3>
          <div className="education-grid">
            <article className="education-card">
              <h4>PGD in HR &amp; Administration</h4>
              <p>Tata Institute of Social Sciences (TISS)</p>
              <span>2026 – Present · Expected Feb 2027</span>
            </article>
            <article className="education-card">
              <h4>M.A. Industrial &amp; Organizational Psychology</h4>
              <p>S.P. College, Pune University</p>
              <span>2022 – 2024 · CGPA 8.06/10</span>
            </article>
            <article className="education-card">
              <h4>B.A. Psychology</h4>
              <p>Modern College, Shivajinagar, Pune University</p>
              <span>2019 – 2022 · CGPA 8.26/10</span>
            </article>
            <article className="education-card certification-card">
              <h4>Certifications</h4>
              <p>
                LinkedIn Learning: Generative AI; HR Foundations: Core Human
                Resources; HR Systems: Features &amp; Benefits.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
