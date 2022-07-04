const navBar =  document.querySelector('.container');

const showNavbar = () => {
    setTimeout(() =>{
        navBar.classList.toggle('d-none');
    },300);

    setTimeout(() =>{
        navBar.classList.toggle('animationOn');
    },310);

    navBar.classList.toggle('animationOff');

}