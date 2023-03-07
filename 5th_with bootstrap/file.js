// var inp = document.getElementById("in").value;
// var out = document.getElementById("out");

function cele_to_kel() {
    let inp = document.getElementById("in").value;
    let result = parseInt(inp) + 273.15;
    document.getElementById("out").value = result;
}

function kel_to_cele() {
    let inp = document.getElementById("in").value;
    let result = parseInt(inp) - 273.15;
    document.getElementById("out").value = result;
}

function cele_to_fer() {
    let inp = document.getElementById("in").value;
    let result = (parseInt(inp) * 9) / 5 + 32;
    document.getElementById("out").value = result;
}

function fer_to_cele() {
    let inp = document.getElementById("in").value;
    let result = ((parseInt(inp) - 32) * 5) / 9;
    document.getElementById("out").value = result;
}

function kel_to_fer() {
    let inp = document.getElementById("in").value;
    let result = ((parseInt(inp) - 273.15) * 9) / 5 + 32;
    document.getElementById("out").value = result;
}

function fer_to_kel() {
    let inp = document.getElementById("in").value;
    let result = ((parseInt(inp) - 32) * 5) / 9 + 273.15;
    document.getElementById("out").value = result;
}

function func1() {
    var x = document.getElementById("selein").selectedIndex;
    var y = document.getElementById("selein").options;

    var s = document.getElementById("seleout").selectedIndex;
    var t = document.getElementById("seleout").options;
    var l = document.getElementById("selein").length;
    if ((y[x].text == t[s].text) && (x != l - 1)) {
        document.getElementById("seleout").value = t[s + 1].text;
    } else if (x == l - 1) {
        document.getElementById("seleout").value = t[0].text;
    }
}
3


function func2() {
    var x = document.getElementById("selein").selectedIndex;
    var y = document.getElementById("selein").options;

    var s = document.getElementById("seleout").selectedIndex;
    var t = document.getElementById("seleout").options;
    var l = document.getElementById("seleout").length;
    if ((t[s].text == y[x].text) && (s != l - 1)) {
        document.getElementById("selein").value = y[x + 1].text;
    } else if (s == l - 1) {
        document.getElementById("selein").value = y[0].text;
    }
}



function func() {


    let temp_in = document.getElementById("selein").value;
    let temp_out = document.getElementById("seleout").value;
    if (temp_in == "celcius" && temp_out == "kelvin") {
        cele_to_kel();
    } else if (temp_in == "celcius" && temp_out == "farenhite") {
        cele_to_fer();
    } else if (temp_in == "kelvin" && temp_out == "celcius") {
        kel_to_cele();
    } else if (temp_in == "kelvin" && temp_out == "farenhite") {
        kel_to_fer();
    } else if (temp_in == "farenhite" && temp_out == "kelvin") {
        fer_to_kel();
    } else if (temp_in == "farenhite" && temp_out == "celcius") {
        fer_to_cele();

    }
}