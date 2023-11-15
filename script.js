let Input = document.querySelector(".input")
let Ul = document.querySelector("ul")

document.addEventListener("keypress" , (e)=>{
    if(e.key == "Enter"){
        let li = document.createElement("li")
        li.innerText = Input.value
        Ul.append(li)
    }
})