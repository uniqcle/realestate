const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const sideBar = document.querySelector('.sidebar');

mobileNavBtn.addEventListener('click', function () {
    // console.log(sideBar);
    sideBar.classList.toggle('sidebar--active');

})

/* показать еще 3 карточки */ 
const btnMore = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.cards-link--hidden');

console.log(hiddenCards);

btnMore.addEventListener('click', function () {

    hiddenCards.forEach(card => {
        console.log(card);

        card.classList.remove('cards-link--hidden');
    })

})


/* показать/скрыть контент виджеты */ 
