var boxes = [];
function establishBox(name){
    boxes[boxes.length] = [name];
    var card = document.createElement("p");
    card.id = name;
    card.innerHTML = "<h3>" + name + "</h3>" + "<br>";
    document.getElementById('cards').appendChild(card);
}
function establishBoxContents(boxName, contents){
    var boxindex = -1;
    if(boxes){
        for(var x in boxes){
            if(boxes[x][0] = boxName){
                boxindex = x;
            }
        }
    }
    if(boxindex !== -1){
        if(!boxes[x][1]){
            boxes[x][1] = [contents];
        }
        else{
            boxes[x][1].push(contents);
        }
        var card = document.getElementById(boxName);
        card.innerHTML = card.innerHTML + "[" + contents + "], ";
    }
    else{
        establishBox(boxName);
        establishBoxContents(boxName, contents);
    }
}
