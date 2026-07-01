// --- Timeline Data ---
const timeline = [
  {
    title: "Senior Software Engineer",
    company: "Five9",
    date: "Sep 2025 - Present",
    location: "Bengaluru, India",
    bullets: [
      "Architecting and developing microservices for analytics and telco data streaming platforms",
      "Optimizing events with SLO targets <10s for 1M events/hour",
      "Orchestrating GCP infrastructure for scalable deployments",
      "Custom lab environments (Asterisk) for call flow management",
      "Leading telco analytics product initiatives"
    ]
  },
  {
    title: "Software Engineer III",
    company: "Cisco",
    date: "Oct 2023 - Sep 2025",
    location: "Bengaluru, India",
    bullets: [
      "Collaborated with Product, DevOps, and security teams",
      "Architected scalable data streaming apps with Spring Boot & Kafka",
      "Managed AWS Kubernetes, OpenSearch, IAM",
      "Developed dashboards, alerts, and monitoring tools",
      "Maintained high app availability and rapid deployments"
    ]
  },
  {
    title: "Software Engineer II",
    company: "Cisco",
    date: "Nov 2020 - Oct 2023",
    location: "Chennai, India",
    bullets: [
      "Developed Data Streaming Application (SpringBoot + Kafka)",
      "Handled AWS Kubernetes, OpenSearch, IAM",
      "Monitored data in Elastic Stack/OpenSearch",
      "CI/CD DevOps for metrics app"
    ]
  },
  {
    title: "Software Engineer",
    company: "Cisco",
    date: "Aug 2020 - Nov 2020",
    location: "Chennai, India",
    bullets: [
      "Automation portal with Cypress, Docker, Jenkins",
      "Dashboards in Grafana",
      "Angular 11 WAP development",
      "Webex SDK for calling, messaging, screen-sharing"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Cisco",
    date: "Jan 2020 - Jun 2020",
    location: "Chennai, India",
    bullets: [
      "Python library (GraphReport) for Jenkins logs",
      "MongoDB backend for team apps",
      "Trained on SIP, VoIP, networking"
    ]
  },
  {
    title: "Project Intern",
    company: "Gmetri",
    date: "Dec 2018 - Jan 2019",
    location: "Bengaluru, India",
    bullets: [
      "Hapi.js, GraphQL, Swagger UI for backend/APIs",
      "VR/AR product solutions"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "EISystems Technologies",
    date: "Jun 2018 - Jul 2018",
    location: "IIT-BHU, India",
    bullets: [
      "ML libraries for churn modeling",
      "Face detection module"
    ]
  }
];

const skills = [
  "Java 21+","Spring Boot","Next.js 16+","React 19","Tailwind CSS","Kubernetes","Kafka","Docker","Elasticsearch","OpenSearch","Grafana","Prometheus","Jenkins","GitHub","Apache Flink","Python","GraphQL","Postman","IntelliJ IDEA","VS Code","Jira","Confluence","Nginx","Helm","Wireshark","Apache Iceberg","AWS","Google Cloud (GCP)","Asterisk PBX","Redis","LLM Integration","RAG Systems","Hugging Face","Ollama LLM","Enterprise Security","Audit Logging","Data Sovereignty"
];

const projects = [
  {
    title: "AI IAM Gateway",
    description: "Enterprise-grade AI Identity & Access Management Gateway with LLM, RAG, and advanced security.",
    tech: ["Spring Boot","Next.js","Mistral LLM","PostgreSQL","Redis"],
    link: "https://github.com/vaibhav-mishra/ai-iam-gateway"
  }
];

// --- Render Timeline ---
const timelineDiv = document.querySelector('.timeline');
timeline.forEach(item => {
  const el = document.createElement('div');
  el.className = 'timeline-item';
  el.innerHTML = `
    <h3>${item.title} <span class="company">@ ${item.company}</span></h3>
    <div class="date-loc">${item.date} &mdash; <span>${item.location}</span></div>
    <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
  `;
  timelineDiv.appendChild(el);
});

// --- Render Skills ---
const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
  const el = document.createElement('div');
  el.className = 'skill-card';
  el.textContent = skill;
  skillsGrid.appendChild(el);
});

// --- Render Projects ---
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
  const el = document.createElement('div');
  el.className = 'project-card';
  el.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-tech">${project.tech.map(t => `<span>${t}</span>`).join(' ')}</div>
    <a href="${project.link}" target="_blank">View on GitHub</a>
  `;
  projectsGrid.appendChild(el);
});
