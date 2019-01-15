var b = [];
var d = 0;
window.onload = function() {
    var can = document.getElementById("c");
    var c = can.getContext("2d");
    var rainbow = document.getElementById("rainbow");
    setInterval(rain, 50);
    function rain(i) {
        c.fillStyle = "#8FF";
        b[i] = Math.floor(Math.random()*360);
        c.clearRect(b[i], d, 1, 5);
        c.fillRect(b[i], d, 1, 5);
        c.clearRect(b[i], d, 1, 5);
        d += 1;
        c.fillRect(b[i], d, 1, 5);
        if(d>=30) {
            rainbow.style.transition = "opacity 13s";
            rainbow.style.opacity = "1";
        }
    }
}
