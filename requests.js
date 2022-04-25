const fetchPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        return response.json()
    }   else {
        throw new Error(response.status)
    }
}