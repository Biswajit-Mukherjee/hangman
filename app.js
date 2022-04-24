const overlay = document.querySelector('#overlay')
const headerActionsButton = document.querySelector('#header-actions-btn')
const headerActionsMenu = document.querySelector('#header-actions-menu')
const gameTitle = document.querySelector('#game-title')
const guesses = 5
const resetButton = document.querySelector('#reset')

overlay.addEventListener('click', () => {
    const openElements = selectAllElementsWithClass('show')
    openElements.forEach((element) => {
        removeClassFromElement(element, 'show')
    })
    removeClassFromElement(overlay, 'show')
})

headerActionsButton.addEventListener('click', () => {
    showElement(overlay)
    showElement(headerActionsMenu)
})

const game = createNewGameInstance('Car', guesses)
startGame(game)

resetButton.addEventListener('click', () => {
    startGame(createNewGameInstance('Car Parts', guesses))
})