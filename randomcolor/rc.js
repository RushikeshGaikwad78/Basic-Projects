const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let newcolor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newcolor; 

    h1.innerText =  `rgb(${r},${g},${b})`;
   
    
}

)