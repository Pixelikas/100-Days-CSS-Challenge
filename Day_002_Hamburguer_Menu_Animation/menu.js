var hamburguerMenu = document.querySelector('.hamburguerIcon')

function menuToggle(){

	hamburguerMenu.classList.toggle('active')

}

hamburguerMenu.addEventListener('click', menuToggle)