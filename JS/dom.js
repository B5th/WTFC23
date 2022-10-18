const pic = document.getElementById('picture');
const butt = document.querySelector('button');

pic.style.borderRadius = "100px";
butt.innerText = 'don"t click me';
butt.style.padding = "10px";
butt.style.backgroundColor = "blue";
butt.style.color = 'black';
butt.style.borderRadius = "10px";

const documentBody = document.querySelector('body');

const para = document.createElement('h1')
para.innerText = "I made it"
documentBody.appendChild(para)

