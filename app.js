const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button')
let classPicked;
let randomBtn = document.querySelector('.random')


randomBtn.addEventListener('click', () =>{
    ranColor(); once: true;
})


//creates divs
let grid;
for (let i = 0; i < 4096; i++){
    grid =  document.createElement('div')
grid.className = "reset"
container.appendChild(grid)
}

//class picker buttons

 document.querySelectorAll('.button').forEach(
    btn => {
        btn.addEventListener('click', e => {
            randomBtn.removeEventListener('click', () =>{
                ranColor(); once: true;
            })
         classPicked = btn.innerText;

        })
      
    })


// function changes class on hover

document.querySelectorAll('.reset').forEach(itm => {
   itm.addEventListener('mouseover', e => {
itm.removeAttribute('class')
    itm.classList.add(classPicked)
    
})
})


// reset button 
document.getElementById('res').addEventListener('click', e =>{
container.querySelectorAll('div').forEach(itm =>{
    itm.classList.remove('green','yellow','blue','white')
itm.classList.add('reset')
    
})
})


// Random color  picker and hover event Listener
let ranColor = () => document.querySelectorAll('.reset').forEach(item =>{
item.addEventListener('mouseover', e =>{let randomClass = () =>{
    let newCls;
    let randomCls = Math.floor(Math.random() * 4)
    if (randomCls === 0) newCls = 'green';
    if (randomCls === 1) newCls = 'yellow';
    if (randomCls ===2)  newCls  = 'blue';
    if (randomCls === 3) newCls = 'white';
    return newCls;
}

 
item.classList.remove('green','yellow','blue','white')
item.classList.add(randomClass())



})
})





