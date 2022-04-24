const showElement = (element) => {
    element.classList.add('show')
}

const hideElement = (element) => {
    element.classList.add('hidden')
}

const addClassToElement = (element, className) => {
    element.classList.add(className)
}

const removeClassFromElement = (element, className) => {
    element.classList.remove(className)
}

const selectAllElementsWithClass = (className) => {
    return document.querySelectorAll(`.${className}`)
}

const createNewGameInstance = (puzzle, guesses) => {
    return new Hangman(puzzle, guesses)
}

const startGame = (instance) => {
    setGameTitle(instance)

    console.log(instance)
    console.log(instance.status)
}

const setGameTitle = (instance) => {
    instance.status === 'Finished' ? addClassToElement(gameTitle, 'success') : removeClassFromElement(gameTitle, 'success')
    gameTitle.textContent = instance.gameTitle
}