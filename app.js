//1
const button = document.querySelector('button')


button.addEventListener('click', () => {
    const color = getRandomColor()
    document.body.style.backgroundColor = color
})
function getRandomColor() {
    const l = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += l[Math.floor(Math.random() * 10)]
    }
    return color
}
//2
const drink = prompt("Выберите: чай, кофе, сок, молоко, компот")
let message
switch (drink.toLowerCase()) {
    case "чай":
        message = "Чай оказывает благоприятное воздействие на нервную и пищеварительную системы, улучшает обмен веществ, снимает усталость и балансирует работу сердца."
        break
    case "кофе":
        message = "Кофе хорошая профилактика сердечно-сосудистых заболеваний"
        break
    case "сок":
        message = "Сок ускоряет метаболизм, придает бодрости, укрепляет сердечно-сосудистую систему."
        break
    case "молоко":
        message = "Молоко отличный источник витаминов и минералов, особенно белка и кальция"
        break
    case "компот":
        message = "Компот заряжает энергией и утоляет жажду"
        break
    default:
        message = "Попробуйте еще раз"
        break
}
alert(message)


