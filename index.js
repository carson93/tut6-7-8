/*var redArr = [];
var greenArr = [];
var blueArr = [];*/
var redRange = document.getElementById("redRange")
var greenRange = document.getElementById("greenRange")
var blueRange = document.getElementById("blueRange")

var colorsArr = [];



function changeColor(){
    document.getElementById("previewBox").style.background = "rgb("+redRange.value+","+greenRange.value+","+blueRange.value+")"
}


function pushColors(){
    /*redArr.push(parseInt(redRange.value))
    greenArr.push(parseInt(greenRange.value))
    blueArr.push(parseInt(blueRange.value))*/
    
    var obj = {
        red:parseInt(redRange.value),
        green:parseInt(greenRange.value),
        blue:parseInt(blueRange.value)
    }
    
    colorsArr.push(obj)
}

function shiftColors(){
    /*redArr.shift()
    greenArr.shift()
    blueArr.shift()*/
    
    colorsArr.shift()
}

function popColors(){
    /*redArr.pop()
    greenArr.pop()
    blueArr.pop()*/
    
    colorsArr.pop()
}

function spliceColors(){
    var startIndex = spliceIndex.value
    
    /*redArr.splice(startIndex, 1)
    greenArr.splice(startIndex, 1)
    blueArr.splice(startIndex, 1)*/
    
    colorsArr.splice(startIndex, 1)
}


function createSwatch(){
    /*ndiv = document.createElement("div")
    ndiv.style.backgroundColor = previewBox.style.backgroundColor
    ndiv.className = "swatches"
    display.appendChild(ndiv)*/
    
    display.innerHTML = ""
    
    /*for(var i = 0; i<redArr.length; i++){
        ndiv = document.createElement("div")
        ndiv.style.backgroundColor = "rgb("+redArr[i]+","+greenArr[i]+","+blueArr[i]+")"
        ndiv.className = "swatches"
        ndiv.addEventListener("click", function(){
            findIndex(this)
        })
        display.appendChild(ndiv)
    }*/
    
    for(var i = 0; i<colorsArr.length; i++){
        var ndiv = document.createElement("div")
        ndiv.style.backgroundColor = "rgb("+colorsArr[i].red+","+colorsArr[i].green+","+colorsArr[i].blue+")"
        ndiv.className = "swatches"
        ndiv.addEventListener("click", function(){
            findIndex(this)
        })
        display.appendChild(ndiv)
    }
    
    calcAvg()
    calcSum()
}

function findIndex(child){
    var c = display.children
    
    for (var i = 0; i < c.length; i++){
        if (c[i].isEqualNode(child)){
            spliceIndex.value = i
        }
    }
}

function calcAvgBACKUP(){
    
    //RED
    var total = 0
    
    for(var i=0; i<redArr.length; i++){
        total = total + redArr[i]
    }
    
    var avg = total/redArr.length;
    var roundRed = Math.round(avg)
    
    //GREEN
    total = 0
    
    for(var i=0; i<greenArr.length; i++){
        total = total + greenArr[i]
    }
    
    avg = total/greenArr.length;
    var roundGreen = Math.round(avg)
    
    //BLUE
    total = 0
    
    for(var i=0; i<blueArr.length; i++){
        total = total + blueArr[i]
    }
    
    avg = total/blueArr.length;
    var roundBlue = Math.round(avg)
    
    //AVERAGE
    averageBox.style.backgroundColor = "rgb("+roundRed+","+roundGreen+","+roundBlue+")"
}

function calcAvg(){
    var totalRed = 0
    var totalGreen = 0
    var totalBlue = 0
    
    for(var i = 0; i<colorsArr.length; i++){
        totalRed = totalRed + colorsArr[i].red
        totalGreen = totalGreen + colorsArr[i].green
        totalBlue = totalBlue + colorsArr[i].blue
    }
    
    var roundRed = Math.round(totalRed/colorsArr.length)
    var roundGreen = Math.round(totalGreen/colorsArr.length)
    var roundBlue = Math.round(totalBlue/colorsArr.length)
    
    document.getElementById("averageBox").style.backgroundColor = "rgb("+roundRed+","+roundGreen+","+roundBlue+")"
}

function calcSum(){
    var totalRed = 0
    var totalGreen = 0
    var totalBlue = 0
    
    for(var i = 0; i<colorsArr.length; i++){
        totalRed = totalRed + colorsArr[i].red
        totalGreen = totalGreen + colorsArr[i].green
        totalBlue = totalBlue + colorsArr[i].blue
        
        if(totalRed > 255){
            totalRed = 255
        }
        
        if(totalGreen > 255){
            totalGreen = 255
        }
        
        if(totalBlue > 255){
            totalBlue = 255
        }
    }
    
    document.getElementById("mixBox").style.backgroundColor = "rgb("+totalRed+","+totalGreen+","+totalBlue+")"
}



redRange.addEventListener("change", function(){
    changeColor()
})

greenRange.addEventListener("change", function(){
    changeColor()
})

blueRange.addEventListener("change", function(){
    changeColor()
})


document.getElementById("addColor").addEventListener("click", function(){
    pushColors()
    createSwatch()
})

document.getElementById("shiftColor").addEventListener("click", function(){
    shiftColors()
    createSwatch()
})

document.getElementById("popColor").addEventListener("click", function(){
    popColors()
    createSwatch()
})

document.getElementById("spliceColor").addEventListener("click", function(){
    spliceColors()
    createSwatch()
})


