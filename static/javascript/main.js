console.log("script added")

function getBlock(day, startHour, column) {
    return document.getElementById(day + " " + startHour + " " + column)
}

// element, color, buffer, color length
function colorBlock(block, color, before, percent) {
    var width = 100 / document.getElementById("numPeople").innerHTML

    block.setAttribute("style", `background: linear-gradient(to bottom, white 0% ${before}%, ${color} ${before}% ${before + percent}%, white ${before + percent}% 100%); 
    padding:0; margin-top:0; overflow:hidden; width:${width}%`)
}

function splitTime(time) {
    var array = time.split(":")
    array[0] = parseInt(array[0])
    array[1] = parseInt(array[1])
    return array
}

function colorTime(weekday, column, color, startTime, endTime) {
    var startArray = splitTime(startTime)
    var endArray = splitTime(endTime)

    // If start and end within the same hour
    if(startArray[0] == endArray[0]) {
        var block = document.getElementById(weekday + " " + startArray[0] + " " + column)
        var bufferPercent = startArray[1] / 60 * 100
        var colorPercent = (endArray[1] - startArray[1]) / 60 * 100

        colorBlock(block, color, bufferPercent, colorPercent)
        return
    }

    // For partial full start and end
    var startBlock = document.getElementById(weekday + " " + startArray[0] + " " + column)
    if (startArray[1] == 0) {
        var startBufferPercent = 0
    }
    else {
        var startBufferPercent = (60 - startArray[1]) / 60 * 100
    }
    colorBlock(startBlock, color, startBufferPercent, 100 - startBufferPercent)

    var endBlock = document.getElementById(weekday + " " + endArray[0] + " " + column)
    var blockColorPercent = endArray[1] / 60 * 100
    colorBlock(endBlock, color, 0, blockColorPercent)
    

    // One more than the start hour: this loop fills full hours
    for(let i = startArray[0] + 1; i < endArray[0]; i++) {
        // Fill full hours
        var block = document.getElementById(weekday + " " + i + " " + column)
        colorBlock(block, color, 0, 100)
    }
}