<<<<<<< HEAD
function toggleCollapse(contentId) {
    const content = document.getElementById(contentId);
    const isVisible = content.style.display === 'block';

    // Colapsar todos los contenidos
    const allContents = document.querySelectorAll('.content');
    allContents.forEach((item) => {
        item.style.display = 'none';
    });

    // Si el contenido no era visible, mostrarlo y hacer scroll
    if (!isVisible) {
        content.style.display = 'block';
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
=======
function toggleCollapse(contentId) {
    const content = document.getElementById(contentId);
    const isVisible = content.style.display === 'block';

    // Colapsar todos los contenidos
    const allContents = document.querySelectorAll('.content');
    allContents.forEach((item) => {
        item.style.display = 'none';
    });

    // Si el contenido no era visible, mostrarlo y hacer scroll
    if (!isVisible) {
        content.style.display = 'block';
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
>>>>>>> 6d7455b1e2ff10c4895ec8986ad7dc87e33b743a
