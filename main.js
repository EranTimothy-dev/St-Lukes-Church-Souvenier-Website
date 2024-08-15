// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                console.log(currentLocation +" " + paper1.style.zIndex);   
                console.log(currentLocation +" " + paper2.style.zIndex);   
                console.log(currentLocation +" " + paper3.style.zIndex);   
                console.log(currentLocation +" " + paper4.style.zIndex);   
                console.log(currentLocation +" " + paper5.style.zIndex);
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                console.log(currentLocation +" " + paper1.style.zIndex);
                console.log(currentLocation +" " + paper2.style.zIndex);
                console.log(currentLocation +" " + paper3.style.zIndex);
                console.log(currentLocation +" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                console.log(currentLocation+" " + paper1.style.zIndex);
                console.log(currentLocation+" " + paper2.style.zIndex);
                console.log(currentLocation+" " + paper3.style.zIndex);
                console.log(currentLocation+" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                // closeBook(false);
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                console.log(currentLocation +" " + paper1.style.zIndex);
                console.log(currentLocation +" " + paper2.style.zIndex);
                console.log(currentLocation +" " + paper3.style.zIndex);
                console.log(currentLocation +" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                // closeBook(false);
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                console.log(currentLocation +" " + paper1.style.zIndex);
                console.log(currentLocation +" " + paper2.style.zIndex);
                console.log(currentLocation +" " + paper3.style.zIndex);
                console.log(currentLocation +" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                paper2.style.zIndex = 2;
                paper3.style.zIndex = 1;
                paper4.style.zIndex = 0;
                paper5.style.zIndex = -1;
                console.log(currentLocation +" " + paper1.style.zIndex);
                console.log(currentLocation +" " + paper2.style.zIndex);
                console.log(currentLocation +" " + paper3.style.zIndex);
                console.log(currentLocation +" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                break;
            case 3:
                // closeBook(true);
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                paper3.style.zIndex = 1;
                paper4.style.zIndex = 0;
                paper5.style.zIndex = -1;
                console.log(currentLocation +" " + paper1.style.zIndex);
                console.log(currentLocation +" " + paper2.style.zIndex);
                console.log(currentLocation +" " + paper3.style.zIndex);
                console.log(currentLocation +" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                break;
            case 4:
                // openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 2;
                paper4.style.zIndex = 1;
                paper5.style.zIndex = 0;
                console.log(currentLocation +" " + paper1.style.zIndex);
                console.log(currentLocation +" " + paper2.style.zIndex);
                console.log(currentLocation +" " + paper3.style.zIndex);
                console.log(currentLocation +" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                break;
            case 5:
                // openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 3;
                paper5.style.zIndex = 2;
                console.log(currentLocation +" " + paper1.style.zIndex);
                console.log(currentLocation +" " + paper2.style.zIndex);
                console.log(currentLocation +" " + paper3.style.zIndex);
                console.log(currentLocation +" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                break;
            case 6: 
                openBook();
                paper5.classList.remove("flipped");
                // paper4.style.zIndex = 3;
                paper5.style.zIndex = 4;
                console.log("case 6")
                console.log(currentLocation +" " + paper1.style.zIndex);
                console.log(currentLocation +" " + paper2.style.zIndex);
                console.log(currentLocation +" " + paper3.style.zIndex);
                console.log(currentLocation +" " + paper4.style.zIndex);
                console.log(currentLocation +" " + paper5.style.zIndex);
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}