let word = 'hello'
let spiltWord = word.split('')

for (let i = spiltWord.length; i > 0; i--) {
    spiltWord[0] = spiltWord[3]
}
console.log(spiltWord.join(''))