let button=document.querySelector('button');
let body=document.querySelector("body");
let color=['red','blue','green','pink','purple','yellow','voilet'];

body.style.backgroundColor = 'wheat';

 // change of backgroung Color

 button.addEventListener('click',e=>{
    const colorindex =parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorindex];
    button.style.backgroundColor=color[colorindex];
    if(button.style.color=='blue'){
      button.style.color="white";
    }
 })