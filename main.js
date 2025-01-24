const bg = prompt("Bg rang kiriting")
const color = prompt("Rang kiriting")

const colorCode = document.querySelector(".text")
colorCode.className = "color"
document.body.style.backgroundColor = bg
document.body.style.color = color