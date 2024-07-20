let width;
let height;


document.getElementById("submitbutton").onclick = function(){
    width = parseFloat(document.getElementById("widthinput").value);
    height = parseFloat(document.getElementById("heightinput").value);
    desiredwidth = parseFloat(document.getElementById("desiredwidthinput").value);
    desiredheight = parseFloat(document.getElementById("desiredheightinput").value);
    if (width!="" && !isNaN(width) && height!="" && !isNaN(height)){
        if (desiredheight !="" && !isNaN(desiredheight) && desiredwidth!="" && !isNaN(desiredwidth)){
            window.alert("Please choose only one dimension to change!");
            }
        else if (desiredwidth != "" && !isNaN(desiredwidth)){
            let x = (desiredwidth/width)*height;
            x = x.toFixed(1)
            document.getElementById("resulttext").innerHTML = x + " px"
        }   
        else if (desiredheight !="" && !isNaN(desiredheight)){
            let x = (desiredheight/height)*width;
            x = x.toFixed(1)
            document.getElementById("resulttext").innerHTML = x + " px"
        }
        else {
            window.alert("Please enter a valid desired height or width!")
        }
    }

    else{
        window.alert("Please enter a valid height and width!")
    }

}
















