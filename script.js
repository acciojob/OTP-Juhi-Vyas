let inputs = document.querySelectorAll(".code")

window.addEventListener("load", () => {
  inputs[0].focus()
})

inputs.forEach((item, index) => {

  item.addEventListener("input", () => {
    if (item.value.length == 1 && index < inputs.length - 1) {
      inputs[index + 1].focus()
    }
  })

  item.addEventListener("keydown", (e) => {
    if (e.key == "Backspace" && item.value == "" && index > 0) {
      inputs[index - 1].focus()
    }
  })

})
