document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButton = document.getElementById("loadMore");
    const hiddenProjects = document.querySelectorAll(".project-card.hidden");

    let projectsShown = 0;
    const projectsPerClick = 6;

    loadMoreButton.addEventListener("click", function () {
        for (let i = projectsShown; i < projectsShown + projectsPerClick; i++) {
            if (hiddenProjects[i]) {
                hiddenProjects[i].classList.remove("hidden");
            }
        }
        projectsShown += projectsPerClick;

        if (projectsShown >= hiddenProjects.length) {
            loadMoreButton.style.display = "none";
        }
    });
});
