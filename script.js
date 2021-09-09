const red = document.querySelector('.red')
const limegreen = document.querySelector('.limegreen')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const cyan = document.querySelector('.cyan')
const magenta = document.querySelector('.magenta')
const green = document.querySelector('.green')
const orange = document.querySelector('.orange')
const purple = document.querySelector('.purple')
let time = "1s"

document.addEventListener("keypress", (e) => {
    if (e.repeat) return
    if (e.key === "1") {
        red.classList.remove("fade")
        red.classList.add("show")
    }
    if (e.key === "2") {
        limegreen.classList.remove("fade")
        limegreen.classList.add("show")
    }
    if (e.key === "3") {
        blue.classList.remove("fade")
        blue.classList.add("show")
    }
    if (e.key === "4") {
        yellow.classList.remove("fade")
        yellow.classList.add("show")
    }
    if (e.key === "5") {
        cyan.classList.remove("fade")
        cyan.classList.add("show")
    }
    if (e.key === "6") {
        magenta.classList.remove("fade")
        magenta.classList.add("show")
    }
    if (e.key === "7") {
        orange.classList.remove("fade")
        orange.classList.add("show")
    }
    if (e.key === "8") {
        purple.classList.remove("fade")
        purple.classList.add("show")
    }
    if (e.key === "9") {
        green.classList.remove("fade")
        green.classList.add("show")
    }
})

document.addEventListener("keyup", (e) => {
    if (e.key === "1") {
        red.classList.add("fade")
        red.classList.remove("show")
    }
    if (e.key === "2") {
        limegreen.classList.add("fade")
        limegreen.classList.remove("show")
    }
    if (e.key === "3") {
        blue.classList.add("fade")
        blue.classList.remove("show")
    }
    if (e.key === "4") {
        yellow.classList.add("fade")
        yellow.classList.remove("show")
    }
    if (e.key === "5") {
        cyan.classList.add("fade")
        cyan.classList.remove("show")
    }
    if (e.key === "6") {
        magenta.classList.add("fade")
        magenta.classList.remove("show")
    }
    if (e.key === "7") {
        orange.classList.add("fade")
        orange.classList.remove("show")
    }
    if (e.key === "8") {
        purple.classList.add("fade")
        purple.classList.remove("show")
    }
    if (e.key === "9") {
        green.classList.add("fade")
        green.classList.remove("show")
    }
})