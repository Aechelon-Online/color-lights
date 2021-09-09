// Human-manageable map of keystrokes to colors.

const colormap = {
  1: 'red',
  2: 'limegreen',
  3: 'blue',
  4: 'yellow',
  5: 'cyan',
  6: 'magenta',
  7: 'orange',
  8: 'purple',
  9: 'green'
}

// Build a map of keystrokes to corresponding color DOM elements.
const elements = {}
for (const [key, value] of Object.entries(colormap)) {
  elements[key] = document.querySelector(`.${value}`)
}

// Add listeners.
document.addEventListener("keypress", e => {
  if (e.repeat || !(e.key in elements)) return
  elements[e.key].classList.remove("fade")
  elements[e.key].classList.add("show")
})

document.addEventListener("keyup", e => {
  if (!(e.key in elements)) return
  elements[e.key].classList.add("fade")
  elements[e.key].classList.remove("show")
})

