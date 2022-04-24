const showElement = (element) => {
    element.classList.add('show')
}

const hideElement = (element) => {
    element.classList.add('hidden')
}

const removeClassFromElement = (element, className) => {
    element.classList.remove(className)
}

const selectAllElementsWithClass = (className) => {
    return document.querySelectorAll(`.${className}`)
}