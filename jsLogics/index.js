const btn = document.querySelector("#btn")
const countText = document.querySelector("#count")

let count = 0

btn.addEventListener("click", function (){
    count++
    countText.innerText = "Count: " + count
})

const list = document.querySelector(".list")

list.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        if(e.target.style.textDecoration == "underline" || e.target.style.textDecoration == "solid"){
            e.target.style.textDecoration = "line-through"
        }
        else{
            e.target.style.textDecoration = "underline"
        }
    }
})