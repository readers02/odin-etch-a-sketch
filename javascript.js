function setDrawArea(size){
    const drawArea = document.getElementById("drawArea")
    for(let i = 0; i<(size*size); i++){
        const square = document.createElement("div");
        square.className = "drawSquare";
        const squareSize = 100/16
        square.style.height=squareSize + "%";
        square.style.width=squareSize + "%";
        drawArea.appendChild(square);
    }
}

setDrawArea(16);