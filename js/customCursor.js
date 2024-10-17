document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.getElementById('custom-cursor');
    let enableCustomCursor = window.innerWidth > 768;

    function updateCustomCursorVisibility() {
        enableCustomCursor = window.innerWidth > 768;
        if (!enableCustomCursor) {
            customCursor.style.display = 'none';
        }
    }

    window.addEventListener('resize', updateCustomCursorVisibility);

    if (enableCustomCursor) {
        const banner = document.getElementById('home');
        
        banner.addEventListener('mousemove', function(e) {
            if (!enableCustomCursor) return;
            const bannerRect = banner.getBoundingClientRect();
            const x = e.clientX - bannerRect.left - customCursor.offsetWidth / 2;
            const y = e.clientY - bannerRect.top - customCursor.offsetHeight / 2;
            customCursor.style.left = x + 'px';
            customCursor.style.top = y + 'px';
            customCursor.style.display = 'block';
        });

        banner.addEventListener('mouseleave', function() {
            customCursor.style.display = 'none';
        });
    }
});
