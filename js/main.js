const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const sideBar = document.querySelector('.sidebar');

mobileNavBtn.addEventListener('click', function () {
    // console.log(sideBar);
    sideBar.classList.toggle('sidebar--active');

})
