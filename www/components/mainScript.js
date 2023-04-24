var nomes = []
var username


//Adiciona no final
function VetorPush() {
    username = document.getElementById('username').value
    nomes.push(username)
    alert(nomes)
}

//Adiciona no inicio
function VetorUnshift() {
    username = document.getElementById('username').value
    nomes.unshift(username)
    alert(nomes)
}

//Remove do inicio
function VetorPushDelete(){
    nomes.pop()
    alert(nomes)
}

//Remove do final
function VetorUnshiftDelete(){
    nomes.shift()
    alert(nomes)
}

function Exibir(){
    alert(nomes)
}

function Search(){
    var searchValor = parseInt(document.getElementById('valorSearch').value)
    alert(nomes[searchValor-1])
}

function Listar(){
    for(var i = 0; i < nomes.length; i++){
        var node = document.createElement("li");
        var textnode = document.createTextNode(nomes[i]);
        node.appendChild(textnode);
        document.getElementById("listarNomes").appendChild(node);
    }
}