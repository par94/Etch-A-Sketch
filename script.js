const container = document.querySelector('.container');

console.log(container);

function Highlight (e) {
    //console.log(e);
    //console.log(this);
    this.classList.add("highlighted");
};

function Reset (e) {

    let size = 16;

    if (e) {
        do 
        {
            size = Number(prompt("Enter side lenght (from 2 to 100):", 16));
            console.log(typeof(size));
        } while ((size == NaN) || (size > 100) || (size < 2));
    }

    console.log(container.childNodes);

    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }

    container.style['grid-template-columns'] = `repeat(${size}, 1fr)`;

    console.log(container.childNodes);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('griditem');
            div.textContent = `${i}, ${j}`;
            container.appendChild(div);
        }
    }

    console.log(container.childNodes);

    console.log(e);
    console.log(size);
};

Reset();
const gridItems = Array.from(document.querySelectorAll('.griditem'));
gridItems.forEach(key => key.addEventListener("mouseleave", Highlight));
document.getElementById("resetButton").addEventListener("click", Reset);
console.log(container.childNodes);
