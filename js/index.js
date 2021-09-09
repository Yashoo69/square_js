document.querySelector('button').addEventListener('click',() => {
    let value_square = parseInt(document.querySelector('#selector').value);
    let boardGame = document.querySelector('#Boardgame'); 
    let dimension = 100 / value_square;
    boardGame.innerHTML = "";
    
    for (let i = 1; i <= value_square; i++) {
        let column = document.createElement('div');
        column.style.width = dimension + "%";
        column.classList.add('column');
        
        for (let i = 1; i <= value_square; i++) {
            let columnItem = document.createElement('div');
            columnItem.style.height = dimension + "%";
            columnItem.classList.add('columnItem');
            column.appendChild(columnItem);
            
        }
        
        boardGame.appendChild(column);
    }
    
}); 

