// recup checkbox
let baliseBox = document.getElementById("accepter")
let accepter = baliseBox.checked
console.log(accepter)
// recup radio
let baliseRadio = document.querySelectorAll("input[type=radio]")
let radio = ""
for(let i = 0; i < baliseRadio[i].length; i++){
    if(baliseRadio[i].checked){
        radio = baliseRadio[i].value
    }
    console.log(radio)
}
// recup text
let text = document.getElementById("text")
console.log(text.value)
