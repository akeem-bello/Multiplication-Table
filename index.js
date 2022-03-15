var number;
var lines;
var result = "";

function getNumbers(){
    var number = document.getElementById("number").value;
    var lines = document.getElementById("lines").value;
    for(i = 1; i <= lines; i++){
            result = result + `${i} x ${number} = ${i * number}` + "<br/>";
    }
     document.getElementById("result").innerHTML = result;
    
}





// function getNumbers(){
//     var blocks = document.getElementById('blocks').value;
//     var lines = document.getElementById('lines').value;
//     var result = "";
//     for (var i = 1; i <= lines; i++) {
//         result = result + i + " * " + blocks + " = " + i * blocks + "<br/>";
//     }
//     document.getElementById("result").innerHTML = result;
// }