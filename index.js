let add=document.getElementById("add");
let list=document.getElementById("todolist");
let input=document.getElementById("input");

let array=[];
window.onload=()=>{
   array=JSON.parse(localStorage.getItem('k1'))||[];
   for(let i=0;i<array.length;i++)
    addtodo(array[i]);
}

add.addEventListener("click",todo);

function todo()
{
    array.push(input.value);
    console.log(array);
    addtodo(input.value);
    input.value="";
}

function addtodo(val)
{
    let para=document.createElement("p");
    list.appendChild(para);
    para.innerHTML=val;
    localStorage.setItem('k1',JSON.stringify(array));
    para.addEventListener("click",()=>{
        para.style.textDecoration="line-through";
    })
    para.addEventListener("dblclick",()=>{
     remover(val);
     list.removeChild(para);
    })
}

function remover(valu)
{
  let index=array.indexOf(valu);
  if(index>-1)
  {
     array.splice(index,1);
  }
  localStorage.setItem('k1',JSON.stringify(array));
}