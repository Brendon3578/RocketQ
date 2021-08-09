const formEnterRoom = document.querySelector(".form-enter-room")
const inputEnterRoom = document.querySelector("#room-id")
let inputExistsInDb = inputEnterRoom.dataset.roomExists


if(inputExistsInDb === "true"){
    addInputStyleValueWrong("Sala não encontrada")
}
console.log(inputEnterRoom)

/* if necessário para quando na home a rota é mudada para create-pass*/
if (formEnterRoom){
    formEnterRoom.addEventListener("submit", e => {


        const valityInput = inputEnterRoom.value == "" || String(inputEnterRoom.value).length != 6
    
        if(valityInput){
            e.preventDefault()

            addInputStyleValueWrong("Insira um número de sala válida!", inputEnterRoom)
        }
    })
}

function addInputStyleValueWrong(placeholderText){

    inputEnterRoom.classList.add("valueWrong")
    inputEnterRoom.setAttribute("placeholder", placeholderText)

    setTimeout(() => {
        inputEnterRoom.classList.remove("valueWrong")
    }, 2000);
}