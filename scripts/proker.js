// let i = 1;

// function action(panah) {
//     document.getElementById("hal-" + i).style.display = "none";

//     if (panah === "kiri") {
//         i--;
//         if (i <=0) {
//             i = 3;
//         }
//     }
//     else if (panah === "kanan") {
//         i++;
//         if (i > 3) {
//             i = 1;
//         }
//     }
//     document.getElementById("hal-" + i).style.display = "flex";
// }
const selector = document.querySelector('#content-selector');
let slides = document.getElementsByClassName('slide');

hide(slides[selector.value]);
hideAll();



function hideAll(){
    for(let index of slides){
        hide(index);
    }
}

function hide(target){
    if(target!=undefined){
        target.classList.toggle("d-flex");
        target.classList.toggle("d-none");
    }
}

function contentSwitch(){
    let keyValue = selector.value;
    
    if(keyValue != undefined){
        for(let slide of slides){
            if (slide.classList.contains('d-flex')){
                hide(slide);
            }
        }
        hide(slides[keyValue]);
    }
}
