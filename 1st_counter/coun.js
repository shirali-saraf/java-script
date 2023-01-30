let count = 0;

function inc() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function dec() {
    count--;
    document.getElementById("counter").innerHTML = count;
}

function res() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}