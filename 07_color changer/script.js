const buttons = document.querySelectorAll(".button")
const body= document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        // console.log(e)
        // console.log(e.target.id)
        switch(e.target.id){
            case "grey":
                body.style.backgroundColor=e.target.id
                break;
            case "red":
                body.style.backgroundColor=e.target.id
                break;
            case "blue":
                body.style.backgroundColor=e.target.id
                break;
            default:    
            body.style.backgroundColor=e.target.id
            break;
        }
    })
})