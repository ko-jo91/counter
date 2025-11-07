const mainEl = document.querySelector('.main');
const numberEl = document.querySelector('.number')
const refreshEl = document.querySelector('.fa-arrows-rotate');
const minusEl = document.querySelector('.fa-minus');
const plusEl = document.querySelector('.fa-plus');

plusEl.addEventListener('click', ()=>{
    const newValue = numberEl.textContent;
    const newValueAsNumber = +newValue;
    const newAmount = newValueAsNumber + 1;
    numberEl.textContent = newAmount;
    mainEl.textContent = "FANCY COUNTER";
    if (newAmount > 10) {
        mainEl.textContent = "MAXIMUM REACHED";
        newAmount = 10;
      
    }
    plusEl.blur();
})
    

minusEl.addEventListener('click', ()=>{
    const newValue = numberEl.textContent;
    const newValueAsNumber = +newValue;
    const newAmount = newValueAsNumber - 1;
    numberEl.textContent = newAmount;
    mainEl.textContent = "FANCY COUNTER";
    if (newAmount < 0) {
        mainEl.textContent = "MINIMUM REACHED";
        mainEl.classList.add('min--limit')
        newAmount = 0;
       
    }
    minusEl.blur();
})

refreshEl.addEventListener('click', ()=>{
    numberEl.textContent = 0;
    mainEl.textContent = "FANCY COUNTER";
    refreshEl.blur();
})



