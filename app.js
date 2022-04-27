const overlay = document.querySelector('#overlay')
const modalCloseButtons = document.querySelectorAll('.modal-close')
const discardButtons = document.querySelectorAll('.action--discard')
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
const userCredits = document.querySelector('.credit-score')
const creditsInfoScore = document.querySelector('.info__score')
const firstOption = document.querySelector('.preference__option:first-of-type')
const profileOption = document.querySelector('.preference__option#profile')
const settingsOption = document.querySelector('.preference__option#settings')
const profileData = document.querySelector('#profile-data')
const settingsData = document.querySelector('#settings-data')
const difficultyLevel = 2
const guesses = 5
const versionNumber = '1.04.22.26'
const version = `Version ${versionNumber}`

// Render app version
appVersion.textContent = version

firstOption.classList.add('selected')

rendeMenuOptionContent(profileOption, profileData)
rendeMenuOptionContent(settingsOption, settingsData)

profileOption.addEventListener('click', () => {
    selectMenuOption(profileOption, 'preference__option')
    rendeMenuOptionContent(profileOption, profileData)
    rendeMenuOptionContent(settingsOption, settingsData)
})

settingsOption.addEventListener('click', () => {
    selectMenuOption(settingsOption, 'preference__option')
    rendeMenuOptionContent(profileOption, profileData)
    rendeMenuOptionContent(settingsOption, settingsData)
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

startGame(guesses, difficultyLevel)

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
})