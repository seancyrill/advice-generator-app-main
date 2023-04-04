const adviceNum = document.querySelector('.advice-number')
const advice = document.querySelector('.advice')
const diceBtn = document.querySelector('.dice-button')

async function generateAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const jsonResponse = await response.json();
    adviceNum.innerText = `ADVICE #${jsonResponse.slip.id}`
    advice.innerText = `"${jsonResponse.slip.advice}"`
    console.log(jsonResponse)
}

diceBtn.addEventListener('click', () => generateAdvice())

generateAdvice();