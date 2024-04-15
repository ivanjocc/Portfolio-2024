document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.3
        });

        const sections = document.querySelectorAll('section:not(#home)');
        sections.forEach(section => {
            section.classList.add('fade-in-section');
            observer.observe(section);
        });
    }
});
