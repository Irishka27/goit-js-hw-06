const categoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryEl.length}`);
categoryEl.forEach(element => {
    const titleEl = element.querySelector('h2');
    const li = element.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${li.length}`);
});

