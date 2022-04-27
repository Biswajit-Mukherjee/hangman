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

const fetchSavedCredits = () => {
    const credits = localStorage.getItem('hangman-credits')
    return credits ? JSON.parse(credits) : 0
}

const saveCredits = (credits) => {
    if (credits) {
        localStorage.setItem('hangman-credits', credits)
    }
}

const getCreditScore = () => {
    return fetchSavedCredits()
}

const getGameTitle = (instance) => {
    instance.status === 'Finished' ? addClassToElement(gameTitle, 'success') : removeClassFromElement(gameTitle, 'success')
    instance.status === 'Finished' ? showPopup(creditSuccessPopup) : removeClassFromElement(creditSuccessPopup, 'show')
    return instance.setGameTitle()
}

const getPuzzle = (instance) => {
    return instance.puzzle
}

const getPuzzleStatus = (instance) => {
    const puzzleStatus = instance.setStatusMessage()
    if (instance.status === 'Failed') {
        return `Nice try! The puzzle was <strong>"${puzzleStatus.substring(0, puzzleStatus.length)}"</strong>`
    }
    return puzzleStatus
}

const renderGame = (instance) => {
    gameCredits.textContent = getCreditScore()
    gameTitle.textContent = getGameTitle(instance)
    puzzleElement.textContent = getPuzzle(instance)
    statusElement.innerHTML = getPuzzleStatus(instance)
    userCredits.textContent = `You have ${getCreditScore()} coins in your credit`
    creditsInfoScore.textContent = `Credits: ${getCreditScore()}`
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

const showPopup = (popup) => {
    showElement(popup)
    setTimeout(() => {
        removeClassFromElement(creditSuccessPopup, 'show')
    }, 5000)
}

const selectMenuOption = (menuOption, className) => {
    const options = document.querySelectorAll(`.${className}`)
    
    options.forEach((option) => {
        option.classList.remove('selected')
    })
    menuOption.classList.add('selected')
}

const renderMenu = () => {
    rendeMenuOptionContent(profileOption, profileData)
    rendeMenuOptionContent(settingsOption, settingsData)
}

const selectFirstMenuOption = () => {
    firstOption.classList.add('selected')
}

const resetMenu = () => {
    const menuOptions = document.querySelectorAll('.preference__option')
    menuOptions.forEach((menuOption) => {
        menuOption.classList.remove('selected')
    })
}

const rendeMenuOptionContent = (menuOption, menuOptionContent) => {
    if (menuOption.classList.contains('selected')) {
        addClassToElement(menuOptionContent, 'show')
    }   else {
        removeClassFromElement(menuOptionContent, 'show')
    }
}

const toggleElement = (element, className) => {
    element.classList.toggle(className)
}