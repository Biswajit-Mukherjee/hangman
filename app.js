const overlay = document.querySelector('#overlay')
const headerActionsButton = document.querySelector('#header-actions-btn')
const headerActionsMenu = document.querySelector('#header-actions-menu')

headerActionsButton.addEventListener('click', () => {
    showElement(overlay)
    showElement(headerActionsMenu)
})

overlay.addEventListener('click', () => {
    const openElements = selectAllElementsWithClass('show')
    openElements.forEach((element) => {
        removeClassFromElement(element, 'show')
    })
    removeClassFromElement(overlay, 'show')
})