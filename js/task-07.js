const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', onRangeChange);
function onRangeChange(element) {
    const rez = element.currentTarget.value;
    textEl.style.fontSize = `${rez}px`;
}
