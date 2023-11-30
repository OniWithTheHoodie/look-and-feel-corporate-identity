//timeline
// Voeg een klikgebeurtenis toe aan de cirkels (containers)
const containers = document.querySelectorAll('.timelinecontainer');
containers.forEach(container => {
    container.addEventListener('click', () => {
        // Verander de zichtbaarheid van de bijbehorende content
        const content = container.querySelector('.content');
        if (content.style.visibility === 'hidden' || content.style.visibility === '') {
            content.style.visibility = 'visible';

        } else {
            content.style.visibility = 'hidden';
        }
    });
});