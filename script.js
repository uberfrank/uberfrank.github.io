// Linktree style - minimal JavaScript interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking for analytics (placeholder)
    const linkButtons = document.querySelectorAll('.link-button');
    linkButtons.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Link clicked:', this.href);
            // Here you could add Google Analytics or other tracking
        });
    });

    // Print welcome message to console
    console.log('%c👋 Bienvenue!', 'font-size: 20px; color: #2d7a4f; font-weight: bold;');
    console.log('%cFrançois Richard - Développeur · Visionnaire · Rassembleur', 'font-size: 14px; color: #666;');
});
