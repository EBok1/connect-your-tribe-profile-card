const cardButton = document.querySelector('#card-open')
cardButton.addEventListener('click', toggleCard)
function toggleCard() {
    cardButton.classList.toggle('open')
}