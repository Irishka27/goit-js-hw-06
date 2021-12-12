let counterValue = 0;
const btnMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
const onBtnClick = (num) => {
    counterValue += num;
    valueEl.textContent = counterValue;
};
btnMinus.addEventListener('click', () => onBtnClick(-1));
btnPlus.addEventListener('click', () => onBtnClick(+1));