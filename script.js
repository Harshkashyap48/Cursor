var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove",function(move){
    cursor.style.left = move.x+"px"
    cursor.style.top = move.y+"px"
})