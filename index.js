
let num = document.querySelector('input#id_numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let fin = document.querySelector('div#id_resultado')
let valores = []


    function isNumero(num) {

        if(Number(num) >= 1 && Number(num) <= 100) {
            return true
        } else {
            return false
        }

    }

    function inLista(num, array) {
        
        if( array.indexOf(Number(num)) != -1 ) { // O "indexOf" retorna o primeiro índice em que o elemento pode ser encontrado no array, e -1 caso não esteja presente.
            return true
        } else {
            return false
        }

    }

    function insere() {
        

        
        if( isNumero(num.value) && !inLista(num.value, valores) ) {

            valores.push(Number(num.value)) // adiciona valor do input ao array

            
            var test = document.createElement('option')
            test.innerHTML = `O valor ${num.value} foi adicionado`
            lista.appendChild(test)
            fin.innerHTML = ''

            num.value = '' // limpa o input
            num.focus() // coloca o mouse no input / seleciona o input
            
        } else {

            alert('Valor inválido ou já encontrado na lista')

        }
        
    }

    function finaliza() {

        if( valores.length != 0 ) {

            var maior = Math.max.apply(null, valores )
            var menor = Math.min.apply(null, valores)

            var soma = 0
            for (var i = 0; i < valores.length; i++) {
                soma += valores[i]
            }

            var media = soma / 2

            var test = window.document.getElementById('id_resultado')

            test.innerHTML = ''

            test.innerHTML = test.innerHTML + `<br> Ao todo, temos ${valores.length} números cadastrados.` + `<br>`
            test.innerHTML = test.innerHTML + `<br> O maior valor informado foi ${ maior }.` + `<br>`
            test.innerHTML = test.innerHTML + `<br> O menor valor informado foi ${ menor }.` + `<br>`
            test.innerHTML = test.innerHTML + `<br> Somando todos os valores temos ${ soma }.` + `<br>`
            test.innerHTML = test.innerHTML + `<br> A média dos valores digitados é ${ media }.` + `<br>`
        
        } else {
            alert('Digite ao menos um valor na lista')
        }
    }
