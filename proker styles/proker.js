let i = 1;

function action(panah) {
    document.getElementById("hal-" + i).style.display = "none";

    if (panah === "kiri") {
        i--;
        if (i <=0) {
            i = 3;
        }
    }
    else if (panah === "kanan") {
        i++;
        if (i > 3) {
            i = 1;
        }
    }
    document.getElementById("hal-" + i).style.display = "flex";
}