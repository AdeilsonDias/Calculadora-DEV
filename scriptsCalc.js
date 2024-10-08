const display = document.querySelector(".spand_input")
const result = document.querySelector(".button_same")
const deletNumber = document.querySelector(".delet")


const getNumber = (numbers)=>{
    if (display.value === "Campo vazio") {
        display.value = ""; // Limpa o display
    }
    display.value+= numbers   
}
result.addEventListener("click",()=>{
    if(display.value===""){
        display.value="Campo vazio"
    }
    display.value= eval(display.value)
    
})

deletNumber.addEventListener("click",()=>{
    display.value = ""
})

