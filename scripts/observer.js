// Observer Code
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.observer');
hiddenElements.forEach((el) => observer.observe(el));

// Observer square code
const observersquare = new IntersectionObserver((entries) => {
    
    entries.forEach((entry, index) => {
        console.log(entry);
        // let random = Math.floor(Math.random()*12);
        if (entry.isIntersecting) {
            entry.target.classList.add('square-animate');
        } else {
            entry.target.classList.remove('square-animate');
        }
    })
})

const squareElements = document.querySelectorAll('.square');
squareElements.forEach((el) => observersquare.observe(el));

// Observer svg code
const observerSvg = new IntersectionObserver((entries) => {
    
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('workspace-animate');
        } else {
            entry.target.classList.remove('workspace-animate');
        }
    })
})

const svg = document.querySelector('#workspace-group');
observerSvg.observe(svg);

// Next Code

// let squares = [];

// function getSquares(){
//     let nodeList = document.querySelectorAll('.square');
//     squares.push(...nodeList);
// }


// function flat(square){
//     square.classList.remove('squareHigh');
// }

// function hover(square, length){
//     square.classList.add('squareHigh');
//     setTimeout(flat(square), length);
// }

// function startHovering(){
//     setTimeout(hover(squares[1], 1000), 100);
//     setTimeout(hover(squares[0], 1000), 100);

// }

// getSquares()
// setTimeout(startHovering, 1000);

