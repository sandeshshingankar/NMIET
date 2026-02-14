document.addEventListener('DOMContentLoaded', function () {
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', toggleSection);
        button.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSection.call(this);
            }
        });
    });

    function toggleSection(event) {
        const button = event.target.closest('.expand-btn');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (isExpanded) {
            button.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = '0';
            content.style.opacity = '0';
        } else {
            button.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
        }
    }
});
