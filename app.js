const overlay = document.querySelector('#overlay')
const modalCloseButton = document.querySelector('.modal-close')
const aboutAppModal = document.querySelector('#about-app-modal')
const aboutAppOption = document.querySelector('#about-app')
const headerActionsButton = document.querySelector('#header-actions-btn')
const headerActionsMenu = document.querySelector('#header-actions-menu')
const gameCredits = document.querySelector('#credits')
const gameTitle = document.querySelector('#game-title')
const puzzleElement = document.querySelector('#puzzle')
const statusElement = document.querySelector('#status')
const resetButton = document.querySelector('#reset')
const difficultyLevel = 2
const guesses = 5

overlay.addEventListener('click', () => {
    const openElements = selectAllElementsWithClass('show')
    openElements.forEach((element) => {
        removeClassFromElement(element, 'show')
    })
    removeClassFromElement(overlay, 'darken')
    removeClassFromElement(overlay, 'show')
})

headerActionsButton.addEventListener('click', () => {
    showElement(overlay)
    showElement(headerActionsMenu)
})

startGame(guesses, difficultyLevel)

resetButton.addEventListener('click', () => {
    startGame(guesses, difficultyLevel)
})

modalCloseButton.addEventListener('click', () => {
    const openModals = document.querySelectorAll('.modal.show')
    openModals.forEach((modal) => {
        removeClassFromElement(modal, 'show')
    })
    removeClassFromElement(overlay, 'darken')
    removeClassFromElement(overlay, 'show')
})

aboutAppOption.addEventListener('click', () => {
    removeClassFromElement(headerActionsMenu, 'show')
    showElement(overlay)
    addClassToElement(overlay, 'darken')
    showElement(aboutAppModal)
})