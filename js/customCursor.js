document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        const banner = document.getElementById('home');
        const customCursor = document.getElementById('custom-cursor');
        
        banner.addEventListener('mousemove', function(e) {
            const x = e.pageX - banner.offsetLeft - 15;
            const y = e.pageY - banner.offsetTop - 15;
            customCursor.style.display = 'block';
            customCursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });

        banner.addEventListener('mouseleave', function() {
            customCursor.style.display = 'none';
        });
    } else {
        const customCursor = document.getElementById('custom-cursor');
        if (customCursor) {
            customCursor.style.display = 'none';
        }
    }
});
