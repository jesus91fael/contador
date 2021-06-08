function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} \u{1f449}`
                
            }            
        }else{
            for(let c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} \u{1f449}`
                
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}