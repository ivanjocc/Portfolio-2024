document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});
