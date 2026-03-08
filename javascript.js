function setDrawArea(size){
    const drawArea = document.getElementById("drawArea")
    for(let i = 0; i<(size*size); i++){
        const square = document.createElement("div");
        square.className = "drawSquare";
        const squareSize = 100/size
        square.style.height=squareSize + "%";
        square.style.width=squareSize + "%";
        square.dataset.opacity = 0;
        square.addEventListener("mouseenter", () => {
            let opacity = Number(square.dataset.opacity);

            if (opacity < 10) {
                opacity=opacity+2;
                square.dataset.opacity = opacity;

                const darkness = 100 - (opacity * 10);
                square.style.backgroundColor = `hsl(0, 0%, ${darkness}%)`;
            }
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