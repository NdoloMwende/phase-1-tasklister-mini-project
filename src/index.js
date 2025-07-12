document.addEventListener("DOMContentLoaded", () => {
  // console.log("Ready");
  const form =document.querySelector("form");
  const input=document.querySelector("#new-task-description");
  // console.log(form);
  // console.log(input);

  form.addEventListener("submit",(e)=>{
  e.preventDefault();
  buildList(input.value);

  form.reset();
});
 
});
function buildList(task){
  // console.log(task);
  let li=document.createElement("li");
  li.textContent=task;

  let btn=document.createElement("button");  
  btn.textContent= " Delete"
  btn.addEventListener('click',deleteTask)

  li.appendChild(btn);

  document.querySelector("#tasks").appendChild(li)
  // console.log(p);
}
function deleteTask(e){
  e.target.parentNode.remove()
  // console.log(e.target.parentNode);
};
function selectpriority(task){
  let dropdown=document.createElement("section");
}
