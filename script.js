

const formOpenBtn = document.querySelector("#form-open"),
home=document.querySelector(".home"),
formContainer= document.querySelector(".form_container"),
formCloseBtn=document.querySelector(".form_close"),

signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click",()=> home.classList.add("show"))
formCloseBtn.addEventListener("click",()=> home.classList.remove("show"))
  
signupBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.add("active");

});
pwShowHide.forEach(icon =>{
    icon.addEventListener("click",()=>{
    let getPwInput=icon.parentElement.querySelector("input")
    
    if(getPwInput.type==="password"){
        getPwInput.type="text";
        icon.classList.replace("uil-eye-slash","uil-eye")

    }else{
        getPwInput.type="password";
        icon.classList.replace("uil-eye","uil-eye-slash")
    }
    //console.log(getPwInput);

    });
});

loginBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.remove("active");
});


// JavaScript code for the to-do list
function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") return;

    const taskList = document.getElementById("tasks");
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    document.getElementById("new-task").value = "";
  }

  
              
  
          
  
   


