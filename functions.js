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

const getGameTitle = (instance) => {
    instance.status === 'Finished' ? addClassToElement(gameTitle, 'success') : removeClassFromElement(gameTitle, 'success')
    return instance.setGameTitle()
}

const getPuzzle = (instance) => {
    return instance.puzzle
}

const getPuzzleStatus = (instance) => {
    return instance.setStatusMessage()
}

const renderGame = (instance) => {
    gameTitle.textContent = getGameTitle(instance)
    puzzleElement.textContent = getPuzzle(instance)
    statusElement.textContent = getPuzzleStatus(instance)
}

const startGame = (guesses, difficultyLevel) => {
    fetchPuzzle(difficultyLevel).then((data) => {
        const game = createNewGameInstance(data.puzzle, guesses)
        renderGame(game)

        console.log(game)

        window.addEventListener('keypress', (e) => {
            game.makeGuess(e.key)
            renderGame(game)
        })
    }).catch((err) => {
        console.log(`Unable to fetch puzzle. Error code: ${err}`)
    })
}

const capitalizeFirstLetterOfEachWord = (originalPuzzle) => {
    let wordPuzzle = ''
    let wordPuzzleArray = originalPuzzle.split(' ')
    wordPuzzleArray.forEach((word) => {
        const firstLetter = word.charAt(0).toUpperCase()
        const rest = word.slice(1)

        wordPuzzle += firstLetter + rest + ' '
    })

    return wordPuzzle.trim()
}