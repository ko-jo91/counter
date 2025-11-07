const mainEl = document.querySelector('.main');
const numberEl = document.querySelector('.number')
const refreshEl = document.querySelector('.fa-arrows-rotate');
const minusEl = document.querySelector('.fa-minus');
const plusEl = document.querySelector('.fa-plus');

plusEl.addEventListener('click', ()=>{
    const newValue = numberEl.textContent;
    const newValueAsNumber = +newValue;
    const newAmount = newValueAsNumber + 1;
    mainEl.textContent = "FANCY COUNTER";
    if (newAmount > 10) {
        mainEl.textContent = "MAXIMUM REACHED";
        newAmount = 10;
        plusEl.disabled = true;
        minusEl.disabled = true;
    }
    numberEl.textContent = newAmount;
    plusEl.blur();
})
    

minusEl.addEventListener('click', ()=>{
    const newValue = numberEl.textContent;
    const newValueAsNumber = +newValue;
    const newAmount = newValueAsNumber - 1;
    mainEl.textContent = "FANCY COUNTER";
    if (newAmount < 0) {
        mainEl.textContent = "MINIMUM REACHED";
        newAmount = 0;
        plusEl.disabled = true;
        minusEl.disabled = true;
    }
    numberEl.textContent = newAmount;
    minusEl.blur();
})

refreshEl.addEventListener('click', ()=>{
    numberEl.textContent = 0;
    mainEl.textContent = "FANCY COUNTER";
    refreshEl.blur();
})



