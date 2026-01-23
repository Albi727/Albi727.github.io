// Small helper to toggle nav menus across pages
document.addEventListener('DOMContentLoaded', function () {
    // make images responsive if not already
    document.querySelectorAll('img, picture, video, iframe').forEach(function (el) {
        if (!el.style.maxWidth) el.style.maxWidth = '100%';
    });

    // Toggle nav-links visibility for common hamburger toggles
    var toggles = document.querySelectorAll('.hamburger, .mobile-menu, .nav-toggle');
    toggles.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var nav = btn.closest('nav') || document.querySelector('.nav') || document.querySelector('.navbar');
            if (!nav) return;
            var links = nav.querySelector('.nav-links') || nav.querySelector('ul') || nav.querySelector('.nav__links') || nav.querySelector('.nav__inner');
            if (!links) return links = null;
            links.classList.toggle('open');
            btn.classList.toggle('active');
        });
    });
});
