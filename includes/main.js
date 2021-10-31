function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "vermenu") {
        x.className += " responsive";
    } else {
        x.className = "vermenu";
    }
}