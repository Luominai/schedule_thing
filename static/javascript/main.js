console.log("script added")

function getBlock(day, startHour, column) {
    return document.getElementById(day + " " + startHour + " " + column)
}

function colorBlock(block, color, before, percent) {

    block.setAttribute("style", `background: linear-gradient(to bottom, white 0% ${before}%, ${color} ${before}% ${before + percent}%, white ${before + percent}% 100%); 
    padding:0; padding-top:0; margin-top:1`)
}

function colorTime(startTime, endTime) {

}