document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-accordion');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-dropdown-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-dropdown-body');
        const icon = groupHeader.querySelector('img');

        // Toggle current clicked FAQ
        groupBody.classList.toggle('open');
        icon.src = groupBody.classList.contains('open')
            ? './assets/images/icon-minus.svg'
            : './assets/images/icon-plus.svg';

        // Close other FAQs
        const otherGroups = faqContainer.querySelectorAll('.faq-dropdown');
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-dropdown-body');
                const otherIcon = otherGroup.querySelector('img');

                otherGroupBody.classList.remove('open');
                otherIcon.src = './assets/images/icon-plus.svg';
            }
        });
    });
});
