let input = document.querySelectorAll(".code")

input.forEach((item,i) => {
	item.addEventListener("input",()=>{
		if(item.value.length == 1){
		input[i+1].focus()
		}
	})
	
	item.addEventListener("keydown",(event)=>{
	if(event.key == "Backspace"){
		input.value = ""
		input[i-1].focus()
		}
	})
})





