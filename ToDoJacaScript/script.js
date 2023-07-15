const inputBox=document.getElementById("txt");
const list=document.getElementById("list");


function addTask(){
    if(inputBox.value===""){
        alert("You have to write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        let ch=document.createElement("ch");
        // span.innerHTML=""
        li.appendChild(ch);
    }

    inputBox.value="";
    saveData();
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showData(){
    list.innerHTML=localStorage.getItem("data");
}
showData();