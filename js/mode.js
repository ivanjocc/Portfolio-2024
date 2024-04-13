document.querySelector('.theme-toggle').addEventListener('click', function() {
    let icon = this.querySelector('i');
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        document.body.classList.add('light-theme');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        document.body.classList.remove('light-theme');
    }
});