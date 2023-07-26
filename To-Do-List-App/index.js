const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    } 
    inputBox.value="";
    saveData(); //when ever I will add any data //
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
      e.target.classList.toggle("routine");
      saveData()                            //Also remove any data it will automatically saved the new data// 
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

//The save data will be called and updated the content in the browser// 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML );
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data"); 

}
  showTask();

 