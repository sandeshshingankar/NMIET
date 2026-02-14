document.addEventListener('DOMContentLoaded', function () {

    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', function () {

            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const contentId = this.getAttribute('aria-controls');
            const content = document.getElementById(contentId);

            // Close all sections first
            expandButtons.forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                const id = btn.getAttribute('aria-controls');
                const section = document.getElementById(id);
                if (section) {
                    section.style.maxHeight = '0';
                    section.style.opacity = '0';
                }
            });

            // Open clicked section
            if (!isExpanded && content) {
                this.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
            }

        });
    });

});
