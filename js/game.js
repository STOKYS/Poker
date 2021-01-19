let mouse = {
    posX: 0,
    posY: 0
}

// Event při pohnutí miši, zapíše do objektu mouse, informace o miši
canvas.addEventListener("mousemove", function (position) {
    if (game.game_started) {
        let space = canvas.getBoundingClientRect();
        mouse.posX = Math.round((position.clientX - space.left) * (canvas.width / canvas.clientWidth));
        mouse.posY = Math.round(position.clientY - space.top) * (canvas.height / canvas.clientHeight);
    }
});

let timeOne = 0;

function update() {
    if ((Date.now() - timeOne) >= 5) {
        timeOne = Date.now()
        game.redraw()
    }
    if (game.game_started) {
        requestAnimationFrame(update)
    }
}

document.getElementById("bet").addEventListener("input", function (){
    menu()
})

function menu(){
    let doc = document.getElementById("bet")
    doc.min = game.call
    doc.max = game.players[0].money
    if (doc.value == doc.min){
        document.getElementById("call").innerText = "Call"
    } else {
        document.getElementById("call").innerText = "Raise"
    }
}