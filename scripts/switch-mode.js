
const buttonMode = document.getElementById('switch-mode');
const iconMode = document.getElementById('switch-ico');
const buttonBox = document.getElementById('switch-box');

const titles = document.querySelectorAll('.title');
const icons = document.querySelectorAll('.icon');

const body = document.body;

buttonMode.addEventListener('click', () => {
    /**
     * First change the switch element styles
     */
    if (! iconMode.classList.replace('fa-sun', 'fa-moon')){
        iconMode.classList.replace('fa-moon', 'fa-sun')
    }
    buttonMode.classList.toggle('switch-btn-dark-mode');
    buttonBox.classList.toggle('switch-box-bg');

    /**
     * Here on insert your toggle to dark mode to anything you like
     */
    body.classList.toggle('dark-mode');
    titles.forEach(element => {
        element.classList.toggle('title-dark-mode');
    });
    icons.forEach(element => {
        element.classList.toggle('icon-dark-mode');
    });
});