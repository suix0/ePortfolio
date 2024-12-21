// Array of project data containing information about each project
const projects = [
  {
    // Details for the Weather App project
    title: "Weather App",
    description:
      "A web application built HTML, CSS, and JavaScript that allows users to view real-time weather data all over the world.",
    image: "./weather.png", // Path to the project image
    github: "https://github.com/suix0/weather-app", // GitHub repository link
    demo: "https://suix0.github.io/weather-app/", // Live demo link
  },
  {
    // Details for the CV Maker project
    title: "CV Maker",
    description:
      "Professional CV maker with real-time preview. Create and customize your resume with an intuitive form interface and export options.",
    image: "./cv.png", // Path to the project image
    github: "https://github.com/suix0/cvmaker", // GitHub repository link
    demo: "https://cvmaker-lac.vercel.app/", // Live demo link
  },
  {
    // Details for the Todo List project
    title: "Todo List",
    description:
      "A feature-rich todo list application with data persistence using Local Storage. Manage your tasks efficiently with a clean and intuitive interface.",
    image: "./todo.png", // Path to the project image
    github: "https://github.com/suix0/todo-list", // GitHub repository link
    demo: "https://suix0.github.io/todo-list/", // Live demo link
  },
];

// Function to dynamically load and display the projects on the page
function loadProjects() {
  const projectsContainer = document.getElementById("projectsContainer"); // Container for project cards

  projects.forEach((project) => {
    // Create a new div for each project
    const projectElement = document.createElement("div");
    projectElement.className = "col-md-4"; // Set column class for layout

    // Populate the project card with image, title, description, and links
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
    projectsContainer.appendChild(projectElement); // Append the project card to the container
  });
}

// Add smooth scrolling behavior to navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor link behavior

    // Scroll to the target section smoothly
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Handle form submission to display a mock success message
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Display an alert message indicating success
  alert("Form submitted successfully!");

  // Reset the form fields
  this.reset();
});

// Load projects when the document has fully loaded
document.addEventListener("DOMContentLoaded", loadProjects);

// Update navigation link active state based on scroll position
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section"); // Select all sections
  const navLinks = document.querySelectorAll(".nav-link"); // Select all navigation links

  let current = ""; // Keep track of the currently visible section

  // Check the scroll position relative to each section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); // Get the ID of the current section
    }
  });

  // Update the active state of navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active"); // Remove active class from all links
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active"); // Add active class to the link for the current section
    }
  });
});
