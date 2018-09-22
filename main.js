document.addEventListener('DOMContentLoaded', function () {

    var container = document.querySelector('.container');
    container.style.height = `${window.innerHeight}px`;
    window.addEventListener('resize', function() {
        container.style.height = `${window.innerHeight}px`;
    })

    var body = document.querySelector('body');
    var topContent = document.querySelector('.top-content');
    topContent.insertAdjacentHTML('afterbegin',
        `<div id="users-toggle">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
    </div>`);
    body.insertAdjacentHTML('beforeend', '<div id="toggle-mask"></div>');

    var userToggle = document.getElementById('users-toggle');
    var users = document.querySelector('.container .users');
    var toggleMask = document.getElementById('toggle-mask');

    userToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        users.classList.toggle('active');
        toggleMask.classList.toggle('active');
    });

    toggleMask.addEventListener('click', function () {
        users.classList.remove('active');
        userToggle.classList.remove('active');
        this.classList.remove('active');
    });

    var topDropdown = document.querySelector('.top-content .top-dropdown');
    var topDropdownContent = document.querySelector('.top-content .tools');
    topDropdown.addEventListener('click', function () {
        topDropdownContent.classList.toggle('active');
    });

    var middleContent = document.querySelector('.container .middle-content');
    middleContent.addEventListener('scroll', function () {
        topDropdownContent.classList.remove('active');
    });

}, false);