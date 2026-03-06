function setDrawArea(size){
    const drawArea = document.getElementById("drawArea")
    for(let i = 0; i<(size*size); i++){
        const square = document.createElement("div");
        square.className = "drawSquare";
        const squareSize = 100/size
        square.style.height=squareSize + "%";
        square.style.width=squareSize + "%";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#000000";
        });
        drawArea.appendChild(square);
    }
}

function clearDrawArea(){
    const drawSquareList = document.querySelectorAll(".drawSquare");
    drawSquareList.forEach(square => {
        square.style.backgroundColor = "#ffffff";
    });
}

function resizeDrawArea() {
    let sizeString = prompt("Enter the number of squares you want along the length of the drawing area. (Must be positive and no greater than 100)");
    let size = null;
    try {
        size = parseInt(sizeString,10);
    } catch (error) {
        alert("Please enter a number.")
    }
    const drawSquareList = document.querySelectorAll(".drawSquare");
    if (!isNaN(size) && size < 101 && size > 0) {
        drawSquareList.forEach(square => {
            square.remove();
        });
        setDrawArea(size);
    }else{
        alert("Something went wrong, please try again.")
    }
}

setDrawArea(16);