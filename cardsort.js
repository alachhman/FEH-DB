var boxes = [];
function establishBox(name){
    boxes[boxes.length] = [name];
    var card = document.createElement("p");
    card.innerHTML = "<h3>" + name + "</h3>" + "<br>" + "<p id =\"" + name + "\">";
    document.getElementById('cards').appendChild(card);
}
function establishBoxContents(boxName, contents, todelete){
    var category = document.getElementById(boxName);
    if(category){
        category.innerHTML = category.innerHTML + "[" + contents.replace("Add","") + "], ";
        var element = document.getElementById(todelete);
        element.parentNode.removeChild(element);
    }
    else{
        establishBox(boxName);
        establishBoxContents(boxName,contents,todelete)
    }
}
var index = 0;
var temper = [];
function readFile(filedata){
    var temp = filedata.split(",");
    temper = temp;
    index = 0;
    for(var x in temper){
        index = x;
        document.getElementById("csvdata").innerHTML = document.getElementById("csvdata").innerHTML + "<li id = \"" + x + "\">" + temp[x].replace("\" \"", "") + "" +
            "<button id=\"" + x + "b\" onclick=\"establishBoxContents(document.getElementById('toAddto').value,document.getElementById(\'" + x + "\').innerText," + x + ")\">Add</button></li>";
    }
}
