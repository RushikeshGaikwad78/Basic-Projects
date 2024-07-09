const form = document.querySelector('form');
const UL = document.querySelector('ul');
const textinput = document.querySelector('#textinput');

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("FORM SUBMITTED!!!");
    const LI = document.createElement('li');
    LI.innerText= textinput.value;
    UL.appendChild(LI);
})