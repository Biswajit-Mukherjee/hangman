class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.calculateStatus()
    }
    setGameTitle() {
        if (this.status === 'Finished') {
            this.gameTitle = 'Congratulations!'
        }   else if (this.status === 'Failed') {
            this.gameTitle = 'Better luck next time!'
        }   else {
            this.gameTitle = 'Try to guess the word below. Best of luck!'
        }
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (finished) {
            this.status = 'Finished'
        }   else if (this.remainingGuesses === 0) {
            this.status = 'Failed'
        }   else {
            this.status = 'Playing'
        }

        this.setGameTitle()
    }
    getPuzzle() {

    }
}