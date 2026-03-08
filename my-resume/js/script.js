document.addEventListener('DOMContentLoaded', () => {
    const folders = document.querySelectorAll('.folder');

    const updateFolders = (activeIndex) => {
        folders.forEach((folder, index) => {
            // Reset all shifts
            folder.classList.remove('shifted');

            // If a folder's index is greater than the one we clicked, 
            // we shift it out of the way (right on desktop, down on mobile)
            if (index > activeIndex) {
                folder.classList.add('shifted');
            }
        });
    };

    folders.forEach((folder, index) => {
        const tab = folder.querySelector('.tab');
        tab.addEventListener('click', () => {
            updateFolders(index);
        });
    });

    // Initialize by opening the first folder (shifting all others away)
    updateFolders(0);
});