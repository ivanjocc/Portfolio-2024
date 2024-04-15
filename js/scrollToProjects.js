function scrollToProjects() {
    var projectsSection = document.getElementById('projects');

    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}
