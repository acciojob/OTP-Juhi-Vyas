let input = document.querySelectorAll(".code")
let p = document.querySelector("#para")
let i = 0
window.addEventListener("load",()=>{
	input[0].focus()
})

input.forEach((item) => {
	item.addEventListener("input",()=>{
		if(item.value.length == 1 && i < 6){
		input[++i].focus();
			p.textContent = i
		}
	})
})

input.forEach((item) => {
	item.addEventListener("keydown",(event)=>{
	if(event.key == "Backspace"){
		item.value = ""
		input[--i].focus();
		p.textContent = i
		}
	})
})






