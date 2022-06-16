const nextAdvice = document.querySelector('.getAdvice')
const showAdvice = document.querySelector('.Advice-section q')
const showID = document.querySelector('.Advice-section h2 span')
const divider = document.querySelector('.divider')
const api = "https://api.adviceslip.com/advice"

async function getAdvice(file) {
    const advice = await fetch(file)
    const adviceText = await advice.text()
    const adviceJson = JSON.parse(adviceText)
    showAdvice.innerText = adviceJson.slip.advice
    showID.innerText = "#" + adviceJson.slip.id
}


if (showAdvice.innerText === "") {
    getAdvice(api)
}
nextAdvice.addEventListener('click', () => {
    getAdvice(api)
})

