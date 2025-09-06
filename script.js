document.addEventListener('DOMContentLoaded', () => {
    const developmentPaths = document.querySelectorAll('li');

    developmentPaths.forEach(path => {
        console.log(path.textContent + ' development');
    });
});