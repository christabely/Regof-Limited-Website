// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('#about .expandable').forEach(title => {
    title.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const content = document.getElementById(target);
        content.classList.toggle('show');
        const isExpanded = content.classList.contains('show');
        this.setAttribute('aria-expanded', isExpanded);
        this.querySelector('i').classList.toggle('fa-chevron-up', !isExpanded);
        this.querySelector('fa-chevron-down', isExpanded);
    });
});

// Initialize the About carousel
$('#aboutCarousel').carousel({
    interval: 3000
});

// Add animation to cards on scroll
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            card.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});

// Expand/collapse functionality for Business Consultation
document.querySelectorAll('.expandable').forEach(title => {
    title.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const subtitles = document.getElementById(target);
        subtitles.style.display = subtitles.style.display === 'none' ? 'block' : 'none';
    });
});

// Expand/collapse functionality for subtitles
document.querySelectorAll('.subtitle').forEach(subtitle => {
    subtitle.addEventListener('click', function(e) {
        e.stopPropagation();
        const target = this.getAttribute('data-target');
        const content = document.getElementById(target);
        
        // Close other open subtitle contents
        document.querySelectorAll('.subtitle-content').forEach(el => {
            if (el.id !== target) {
                el.style.display = 'none';
            }
        });

        // Toggle current subtitle content
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});
