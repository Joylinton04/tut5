const scrambleWords = document.querySelector('.mixed-letters') 
const progressBar = document.querySelector('.progress-bar span') 
const hint = document.querySelector('.hint') 
const timer = document.querySelector('.time') 
const userInput = document.querySelector('#userInput') 
const checkBtn = document.querySelector('#check-word') 
const refreshBtn = document.querySelector('#refresh')

let correctWord = ''
let timeInterval;
let maxTime = 15
timer.textContent = maxTime

const words = [
    {
        word: 'scramble',
        hint: 'To mix up words randomly'
    },
    {
        word: 'difficult',
        hint: 'Something that is hard to do'
    },
    {
        word: 'Programming',
        hint: 'The act of writing instructions for a computer'
    },
    {
        word: 'addition',
        hint: 'To sum up numbers'
    },
    {
        word: 'Data',
        hint: 'A raw fact'
    }

]


const scramble = () => {
    let randomWord = words[Math.floor(Math.random() * words.length)]
    let word = randomWord.word.split('')
    let contain = ''

    for(let i = word.length-1; i > 0; i --) {
        let j = Math.floor(Math.random()*(i + 1))
        contain = word[i]
        word[i] = word[j]
        word[j] = contain
    }
    scrambleWords.textContent = word.join('')
    correctWord = randomWord.word.toLowerCase()
    userInput.value = ' '
    hint.textContent = `Hint: ${randomWord.hint}`
}
scramble()

const handleCheck = () => {
    let userValue = userInput.value.toLowerCase().trim()

    if(!userValue) return
    if(userValue === correctWord) {
        alert('Correct answer')
        clearInterval(timeInterval)
    } else {
        console.log('wrong answer')
    }
}

const updateTimer = () => {
    maxTime = 15
    clearInterval(timeInterval)
    timeInterval = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            timer.textContent = maxTime

            let width = (Math.floor(maxTime * 6.66))
            progressBar.style.width = `${width}%`
            width <= 40 ? progressBar.style.backgroundColor = 'red' : progressBar.style.backgroundColor = 'green'
        } else {
            maxTime = 15
            scramble()
        }
    }, 1000)
}
scramble()
updateTimer()

checkBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    handleCheck()
})

refreshBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    scramble()
    updateTimer()
})
