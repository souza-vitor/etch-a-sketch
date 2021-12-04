const container = document.querySelector(".container");

let gridNumber = 16;

function makeGrid(number){

    for(let i = 0; i < number; i++){
        let col = document.createElement("div");
        col.classList.add("grid-item");
        container.appendChild(col);

        for(let j = 0; j < number; j++){
            let row = document.createElement("div");
            row.classList.add("grid-item");
            container.appendChild(row);
        }
    }

    container.style.gridTemplateRows = `repeat(${gridNumber}, auto)`;
    container.style.gridTemplateColumns = `repeat(${gridNumber}, auto)`;
}

makeGrid(gridNumber);


const items = document.querySelectorAll(".grid-item");

items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        
    });
});

const button = document.querySelector("button");

button.addEventListener('click', () => {
    let newSize = prompt("What is the size of grid?");
    gridNumber = parseInt(newSize);

    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    
    makeGrid(gridNumber);

    const items = document.querySelectorAll(".grid-item");

    items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        
        });
    });
});

