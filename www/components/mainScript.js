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
    var exibirValor = parseInt(document.getElementById('valorExibir').value)
    alert(nomes[exibirValor-1])
}