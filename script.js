// Project data
const projects = [
  {
    title: "Weather App",
    description:
      "A web application built HTML, CSS, and JavaScript that allows users to view real-time weather data all over the world.",
    image: "./weather.png",
    github: "https://github.com/suix0/weather-app",
    demo: "https://suix0.github.io/weather-app/",
  },
  {
    title: "CV Maker",
    description:
      "Professional CV maker with real-time preview. Create and customize your resume with an intuitive form interface and export options.",
    image: "./cv.png",
    github: "https://github.com/suix0/cvmaker",
    demo: "https://cvmaker-lac.vercel.app/",
  },
  {
    title: "Todo List",
    description:
      "A feature-rich todo list application with data persistence using Local Storage. Manage your tasks efficiently with a clean and intuitive interface.",
    image: "./todo.png",
    github: "https://github.com/suix0/todo-list",
    demo: "https://suix0.github.io/todo-list/",
  },
];

// Load projects
function loadProjects() {
  const projectsContainer = document.getElementById("projectsContainer");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "col-md-4";
    projectElement.innerHTML = `
          <div class="project-card">
              <img src="${project.image}" alt="${project.title}" class="project-image">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-links">
                  <a href="${project.github}" target="_blank">GitHub</a>
                  <a href="${project.demo}" target="_blank">Live Demo</a>
              </div>
          </div>
      `;
    projectsContainer.appendChild(projectElement);
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Form submission handling
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Add your form submission logic here
  // You'll need to replace 'your-form-id' in the HTML with your actual Formspree ID
  this.submit();
});

// Initialize projects on page load
document.addEventListener("DOMContentLoaded", loadProjects);

// Add active class to navigation items based on scroll position
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
