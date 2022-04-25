class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.calculateStatus()
    }
    setGameTitle() {
        if (this.status === 'Finished') {
            return 'Congratulations!'
        }   else if (this.status === 'Failed') {
            return 'Better luck next time!'
        }   else {
            return 'Try to guess the word below. Best of luck!'
        }
    }
    setStatusMessage() {
        if (this.status === 'Finished') {
            return 'Well done! You guessed the word'
        }   else if (this.status === 'Playing') {
            return `Guesses left: ${this.remainingGuesses}`
        }   else {
            return `Nice try! The word was "${capitalizeFirstLetterOfEachWord(this.word.join(''))}"`
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
        this.setStatusMessage()
    }
    makeGuess(letter) {
        letter = letter.toLowerCase()

        if (this.status === 'Playing') {
            const isLetterUnique = !this.guessedLetters.includes(letter)
            const isGoodGuess = this.word.includes(letter) || letter === ' '

            if (isGoodGuess && isLetterUnique) {
                this.guessedLetters.push(letter)
            }   else if (isLetterUnique && this.remainingGuesses > 0) {
                this.remainingGuesses--
            }

            this.calculateStatus()
        }
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            }   else {
                puzzle += '*'
            }
        })

        return capitalizeFirstLetterOfEachWord(puzzle)
    }
}