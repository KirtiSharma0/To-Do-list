const input = document.getElementById("input")
const listcontainer = document.getElementById("listcontainer")

function Addtask(){
    if(input.value === ''){
        alert("you have to write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        listcontainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        span.style.marginRight = "20px"
        span.style.padding = '12px 24px'
    }
    input.value = "";
    savedata();
}

listcontainer.addEventListener("click" , function(e) {
            if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
            }
            else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
            }
} , false);

function savedata(){
    localStorage.setItem("data" , listcontainer.innerHTML)
}
function showtask (){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showtask()