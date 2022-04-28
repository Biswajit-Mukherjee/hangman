const overlay = document.querySelector('#overlay')
const modalCloseButtons = document.querySelectorAll('.modal-close')
const headerActionsButton = document.querySelector('#header-actions-btn')
const headerActionsMenu = document.querySelector('#header-actions-menu')
const aboutAppModal = document.querySelector('#about-app-modal')
const aboutAppOption = document.querySelector('#about-app')
const howToPlayModal = document.querySelector('#how-to-play-modal')
const howToPlayOption = document.querySelector('#how-to-play')
const preferencesModal = document.querySelector('#preferences-modal')
const preferencesOption = document.querySelector('#preferences')
const gameCredits = document.querySelector('#credits')
const gameTitle = document.querySelector('#game-title')
const puzzleElement = document.querySelector('#puzzle')
const statusElement = document.querySelector('#status')
const resetButton = document.querySelector('#reset')
const appVersion = document.querySelector('#app-version')
const creditSuccessPopup = document.querySelector('#credit-success-popup')
const savingChangesPopup = document.querySelector('#saving-changes-popup')
const saveChangesSuccessPopup = document.querySelector('#save-changes-success-popup')
const discardButtons = document.querySelectorAll('.action--discard')
const saveChangesButton = document.querySelector('.action--save')
const userCredits = document.querySelector('.credit-score')
const creditsInfoScore = document.querySelector('.info__score')
const firstOption = document.querySelector('.preference__option:first-of-type')
const profileOption = document.querySelector('.preference__option#profile')
const settingsOption = document.querySelector('.preference__option#settings')
const profileData = document.querySelector('#profile-data')
const settingsData = document.querySelector('#settings-data')
const levelChosen = document.querySelector('.level-chosen')
const levelNumber = document.querySelector('#level-number')
const difficultyLevelSelectDropdown = document.querySelector('#difficulty-level')
const resetCreditsButton = document.querySelector('#reset-credits')

const popupTimeout = 3000
const guesses = 5
const versionNumber = '1.04.22.27'
const version = `Version ${versionNumber}`
let difficultyLevel = getDifficultyLevel()

// Render app version
appVersion.textContent = version

// Render preferences menu
selectFirstMenuOption()
renderMenu()

// Start game
startGame(guesses, difficultyLevel)

// Listen for events
profileOption.addEventListener('click', () => {
    selectMenuOption(profileOption, 'preference__option')
    renderMenu()
})

settingsOption.addEventListener('click', () => {
    selectMenuOption(settingsOption, 'preference__option')
    renderMenu()
})

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

resetButton.addEventListener('click', () => {
    startGame(guesses, difficultyLevel)
})

modalCloseButtons.forEach((modalCloseButton) => {
    modalCloseButton.addEventListener('click', () => {
        const openModals = document.querySelectorAll('.modal.show')
        openModals.forEach((modal) => {
            removeClassFromElement(modal, 'show')
        })
        removeClassFromElement(overlay, 'darken')
        removeClassFromElement(overlay, 'show')
    })
})

discardButtons.forEach((discardButton) => {
    discardButton.addEventListener('click', () => {
        const openModals = document.querySelectorAll('.modal.show')
        openModals.forEach((modal) => {
            removeClassFromElement(modal, 'show')
        })
        removeClassFromElement(overlay, 'darken')
        removeClassFromElement(overlay, 'show')
        location.reload()
    })
})

aboutAppOption.addEventListener('click', () => {
    removeClassFromElement(headerActionsMenu, 'show')
    showElement(overlay)
    addClassToElement(overlay, 'darken')
    showElement(aboutAppModal)
})

howToPlayOption.addEventListener('click', () => {
    removeClassFromElement(headerActionsMenu, 'show')
    showElement(overlay)
    addClassToElement(overlay, 'darken')
    showElement(howToPlayModal)
})

preferencesOption.addEventListener('click', () => {
    removeClassFromElement(headerActionsMenu, 'show')
    showElement(overlay)
    addClassToElement(overlay, 'darken')
    showElement(preferencesModal)
    resetMenu()
    selectFirstMenuOption()
    renderMenu()

    let credit = getCreditScore()
    let isCreditScoreChanged = false
    let isDifficultyLevelChanged = false

    resetCreditsButton.addEventListener('click', () => {
        isCreditScoreChanged = parseInt(credit) !== 0 ? true : false

        if (isCreditScoreChanged) {
            credit = resetCredits()
            creditsInfoScore.textContent = `Credits: ${credit}`
        }
    })

    difficultyLevelSelectDropdown.addEventListener('change', () => {
        isDifficultyLevelChanged = difficultyLevelSelectDropdown.value !== getDifficultyLevel()
    })

    isDifficultyLevelChanged = difficultyLevelSelectDropdown.value !== getDifficultyLevel()

    if (saveChangesButton) {
        saveChangesButton.addEventListener('click', () => {
            saveCredits(credit)
            setDifficultyLevel(difficultyLevelSelectDropdown.value)
            removeClassFromElement(preferencesModal, 'show')
            removeClassFromElement(overlay, 'darken')
            removeClassFromElement(overlay, 'show')
            if (isCreditScoreChanged || isDifficultyLevelChanged) {
                showPopup(savingChangesPopup)
                setTimeout(() => {
                    showPopup(saveChangesSuccessPopup)
                    setTimeout(() => {
                        location.reload()
                        startGame(guesses, getDifficultyLevel())
                    }, popupTimeout)
                }, popupTimeout)
            }   else {
                location.reload()
                startGame(guesses, getDifficultyLevel())
            }
        })
    }
})