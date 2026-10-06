import { useState } from "react";
import "./App.css";

const roadmap = [
  {
    title: "Linux",
    icon: "🐧",
    description: "Learn Linux commands, files, permissions and server basics.",
    topics: ["Commands", "Files & Directories", "Permissions", "Processes"],
  },
  {
    title: "Git & GitHub",
    icon: "🔀",
    description: "Understand version control and collaborative development.",
    topics: ["git init", "git add", "git commit", "git push", "Branches"],
  },
  {
    title: "Docker",
    icon: "🐳",
    description: "Containerize applications and run them consistently.",
    topics: ["Images", "Containers", "Dockerfile", "Docker Hub"],
  },
  {
    title: "Jenkins",
    icon: "⚙️",
    description: "Automate build, test and deployment using CI/CD pipelines.",
    topics: ["Jobs", "Pipelines", "Webhooks", "Automation"],
  },
  {
    title: "SonarQube",
    icon: "🔍",
    description: "Analyze source code and maintain code quality.",
    topics: ["Quality Gates", "Bugs", "Vulnerabilities", "Code Smells"],
  },
  {
    title: "AWS",
    icon: "☁️",
    description: "Deploy applications on cloud infrastructure.",
    topics: ["EC2", "Security Groups", "Key Pairs", "Deployment"],
  },
  {
    title: "Kubernetes",
    icon: "☸️",
    description: "Orchestrate and manage containers at scale.",
    topics: ["Pods", "Deployments", "Services", "Minikube"],
  },
  {
    title: "Monitoring",
    icon: "📊",
    description: "Monitor infrastructure and applications.",
    topics: ["Prometheus", "Grafana", "Metrics", "Alerts"],
  },
];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (title) => {
    setCompleted((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const progress = Math.round((completed.length / roadmap.length) * 100);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span>🚀</span> DevOps<span className="highlight">Lab</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#labs">Labs</a>
          <a href="#about">About</a>
        </div>

        <div className="progress-small">
          {progress}% Complete
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="badge">⚡ HANDS-ON DEVOPS LEARNING</div>

          <h1>
            Learn <span>DevOps</span>
            <br />
            Build. Automate. Deploy.
          </h1>

          <p>
            Learn modern DevOps tools and practices through practical,
            hands-on projects. From Git and Docker to Jenkins, AWS and
            Kubernetes.
          </p>

          <div className="hero-buttons">
            <a href="#roadmap" className="primary-btn">
              Start Learning 🚀
            </a>

            <a href="#labs" className="secondary-btn">
              View Labs
            </a>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">devops@learning:~</span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="green-text">$</span> git clone
              devops-project
            </p>
            <p>
              <span className="green-text">$</span> docker build -t
              devops-app .
            </p>
            <p>
              <span className="green-text">$</span> docker push
              devops-app
            </p>
            <p>
              <span className="green-text">$</span> deploy --environment
              aws
            </p>
            <p className="success">
              ✓ Deployment successful!
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div>
          <strong>8+</strong>
          <span>DevOps Tools</span>
        </div>

        <div>
          <strong>20+</strong>
          <span>Hands-on Topics</span>
        </div>

        <div>
          <strong>10+</strong>
          <span>Practical Labs</span>
        </div>

        <div>
          <strong>1</strong>
          <span>Real Project</span>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section" id="roadmap">
        <div className="section-heading">
          <span className="section-label">LEARNING PATH</span>

          <h2>DevOps Roadmap</h2>

          <p>
            Follow the roadmap and build your DevOps skills step by step.
          </p>
        </div>

        <div className="progress-container">
          <div className="progress-info">
            <span>Your Progress</span>
            <strong>{progress}%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="roadmap">
          {roadmap.map((item, index) => (
            <div
              className={`topic-card ${
                completed.includes(item.title) ? "completed" : ""
              }`}
              key={item.title}
            >
              <div className="topic-number">
                0{index + 1}
              </div>

              <div className="topic-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="topic-list">
                {item.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>

              <div className="card-actions">
                <button
                  className="learn-btn"
                  onClick={() =>
                    setSelectedTopic(
                      selectedTopic === item.title ? null : item.title
                    )
                  }
                >
                  {selectedTopic === item.title
                    ? "Hide Topics"
                    : "Explore"}
                </button>

                <button
                  className="complete-btn"
                  onClick={() => toggleComplete(item.title)}
                >
                  {completed.includes(item.title)
                    ? "✓ Completed"
                    : "Mark Complete"}
                </button>
              </div>

              {selectedTopic === item.title && (
                <div className="expanded">
                  <strong>What you will learn:</strong>

                  <ul>
                    {item.topics.map((topic) => (
                      <li key={topic}>✓ {topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Labs */}
      <section className="labs-section" id="labs">
        <div className="section-heading">
          <span className="section-label">HANDS-ON PRACTICE</span>

          <h2>Build Real Projects</h2>

          <p>
            Learning DevOps is better when you build and deploy something
            yourself.
          </p>
        </div>

        <div className="labs">
          <div className="lab-card">
            <span className="lab-icon">🐳</span>
            <h3>Dockerize a React App</h3>
            <p>
              Create a Dockerfile, build an image and run your React
              application inside a container.
            </p>
            <button>Start Lab →</button>
          </div>

          <div className="lab-card">
            <span className="lab-icon">🔄</span>
            <h3>Build a CI/CD Pipeline</h3>
            <p>
              Connect GitHub with Jenkins and automate application
              deployment.
            </p>
            <button>Start Lab →</button>
          </div>

          <div className="lab-card">
            <span className="lab-icon">☁️</span>
            <h3>Deploy on AWS EC2</h3>
            <p>
              Launch an EC2 instance and deploy your containerized
              application on AWS.
            </p>
            <button>Start Lab →</button>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow">
        <div className="section-heading">
          <span className="section-label">DEVOPS WORKFLOW</span>
          <h2>From Code to Production</h2>
        </div>

        <div className="workflow-container">
          <div className="workflow-step">
            <span>👨‍💻</span>
            <strong>Code</strong>
            <small>Developer</small>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-step">
            <span>🔀</span>
            <strong>Git</strong>
            <small>Version Control</small>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-step">
            <span>⚙️</span>
            <strong>Jenkins</strong>
            <small>CI/CD</small>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-step">
            <span>🐳</span>
            <strong>Docker</strong>
            <small>Container</small>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-step">
            <span>☁️</span>
            <strong>AWS</strong>
            <small>Deployment</small>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about">
        <div className="footer-logo">
          🚀 DevOps<span>Lab</span>
        </div>

        <p>
          Learn DevOps through practical implementation and real-world
          projects.
        </p>

        <p className="copyright">
          © 2026 DevOps Learning Lab
        </p>
      </footer>
    </div>
  );
}

export default App;