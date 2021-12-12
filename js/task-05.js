const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};
refs.inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value.length === 0) {
        refs.spanEl.textContent = 'Anonymous';
    }
    refs.spanEl.textContent = event.currentTarget.value;
 
};
