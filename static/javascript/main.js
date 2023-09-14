console.log("script added")

function getBlock(day, startHour, column) {
    return document.getElementById(day + " " + startHour + " " + column)
}

function colorBlock(block, color, direction, percent) {

    block.setAttribute("style", `background: linear-gradient(to ${direction}, white 0% ${100 - percent}%, ${color} ${100 - percent}% 100%); padding:0; padding-top:1`)
}